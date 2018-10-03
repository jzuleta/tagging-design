<template>
<div>
    <div class="ad-server-header d-flex align-items-center border-bottom">
        <md-button class="md-icon-button" v-show="!isSearching" @click="hideConfigurationContent">
            <md-icon>close</md-icon>
        </md-button>
        <h4 class="font-weight-strong w-100" v-show="!isSearching">Select an Ad Server</h4>
        <md-field md-inline v-show="isSearching" class="mx-18">
            <label>Ad server name</label>
            <md-input v-model="searchInput"></md-input>
        </md-field>
        <md-button class="md-icon-button ml-auto" v-show="!isSearching" @click="setSearchStatus(true)">
            <md-icon>search</md-icon>
        </md-button>
        <md-button class="md-icon-button ml-auto" v-show="isSearching" @click="setSearchStatus(false)">
            <md-icon>close</md-icon>
        </md-button>
    </div>
    <div class="pl-18" :style="'height:' + (windowSize.height - 60) + 'px'" style="overflow:auto" :class="{'d-flex': isSearching}" v-show="isSearching">
        <md-empty-state v-show="filteredAdServers.length == 0"
                    md-icon="filter_none"
                    md-description="There are no coincidences">
        </md-empty-state>
        <ul>
            <li v-for="adServerObj in filteredAdServers" :key="adServerObj.FormattedName"
                    class="d-flex justify-content-start" @click="selectAdServer(adServerObj, true)">
                <div :class="adServerObj.FormattedName + '-logo'"
                        class="ad-server-logo-content"></div>
                <div class="pt-8 ad-server-content border-bottom">
                    <div class="d-flex">
                        <span class="font-weight-strong">{{adServerObj.Name}}</span>
                        <div class="ml-auto">
                            <span v-for="protocolObj in adServerObj.Protocols" :key="protocolObj"
                                  class="protocol-content font-size-small mr-8"
                                  :class="protocolObj.toLowerCase() + '-status'">
                                {{protocolObj}}
                            </span>
                        </div>
                    </div>
                    <div class="font-size-small font-color-light ad-server-tag">
                      {{getCommaFormat(adServerObj.TagTypes)}}
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="pl-18" :style="'height:' + (windowSize.height - 60) + 'px'" style="overflow:auto" v-show="!isSearching">
        <div class="pt-18 font-size-large">Recent</div>
        <ul>
            <li v-for="adServerObj in getAdServerPreference(true)" :key="adServerObj.FormattedName"
                    class="d-flex justify-content-start" @click="selectAdServer(adServerObj, false)">
                <div :class="adServerObj.FormattedName + '-logo'"
                        class="ad-server-logo-content"></div>
                <div class="pt-8 ad-server-content border-bottom">
                    <div class="d-flex">
                        <span class="font-weight-strong">{{adServerObj.Name}}</span>
                        <div class="ml-auto">
                            <span v-for="protocolObj in adServerObj.Protocols" :key="protocolObj"
                                  class="protocol-content font-size-small mr-8"
                                  :class="protocolObj.toLowerCase() + '-status'">
                                {{protocolObj}}
                            </span>
                        </div>
                    </div>
                    <div class="font-size-small font-color-light ad-server-tag">
                      {{getCommaFormat(adServerObj.TagTypes)}}
                    </div>
                </div>
            </li>
        </ul>
        <div class="pt-18 font-size-large">More</div>
        <ul>
            <li v-for="adServerObj in getAdServerPreference(false)" :key="adServerObj.FormattedName"
                    class="d-flex justify-content-start" @click="selectAdServer(adServerObj, false)">
                <div :class="adServerObj.FormattedName + '-logo'"
                        class="ad-server-logo-content"></div>
                <div class="pt-8 ad-server-content border-bottom">
                    <div class="d-flex">
                        <span class="font-weight-strong">{{adServerObj.Name}}</span>
                        <div class="ml-auto">
                            <span v-for="protocolObj in adServerObj.Protocols" :key="protocolObj"
                                  class="protocol-content font-size-small mr-8"
                                  :class="protocolObj.toLowerCase() + '-status'">
                                {{protocolObj}}
                            </span>
                        </div>
                    </div>
                    <div class="font-size-small font-color-light ad-server-tag">
                      {{getCommaFormat(adServerObj.TagTypes)}}
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>
<style scoped>
.ad-server-header {
  height: 60px;
}

.ad-server-header i:hover {
  cursor: pointer;
}

.ad-server-logo-content {
  width: 125px;
  height: 55px;
  background-size: 100px auto;
  background-repeat: no-repeat;
  background-position-y: center;
}

.ad-server-content {
  width: 240px;
}

ul {
  list-style: none;
  padding-left: 0;
}

.protocol-content {
  font-size: 11px;
  border-radius: 3px;
  padding: 2px 5px;
}
.standard-status {
  background-color: #ebebeb;
}

.secure-status {
  background-color: #0f9d58;
  color: white;
}

.md-empty-state{
  transition: none;
}
</style>
<script>
import axios from "axios";
import "../../../assets/css/ad-server-logo.css";

export default {
    props: ["windowSize"],
    data() {
        return {
            adServerList: [],
            isSearching: false,
            searchInput: ''
        };
    },
    beforeCreate: function() {
        axios.get("/assets/data/ad-servers.json").then(response => {
            this.adServerList = response.data;
        });
    },
    computed: {
        filteredAdServers: function() {
            return this.searchInput.trim().length > 0 ? this.adServerList.filter(item => {
                return item.Name.toLowerCase()
                    .indexOf(this.searchInput.toLowerCase()) > -1;
            }) : this.adServerList;
        }
    },
    methods: {
        setSearchStatus: function(status) {
            this.isSearching = status;
            this.searchInput = '';
        },
        getAdServerPreference: function(section) {
            return this.adServerList.filter(item => {
                return item.Favorite == section;
            });
        },
        getCommaFormat: function(arr) {
            return arr
                .map((item, index, array) => {
                    return index + 1 == array.length ? " & " + item : index == 0 ? item : ", " + item;
                })
                .join("");
        },
        selectAdServer:function(adServer, filtered){
            this.$emit("select-adserver", adServer);
            this.$emit("change-configuration-view", "basic-adserver-configuration");
        },
        hideConfigurationContent:function(){    
            this.$emit("configuration-visibility", false);
        }
    }
};
</script>
