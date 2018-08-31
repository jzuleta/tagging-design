<template>
    <div class="ad-server-menu">
        <div class="ad-server-header d-flex align-items-center border-bottom  px-18">
            <i class="material-icons font-color-light mr-18">close</i>
            <h4 class="font-weight-strong">Select an Ad Server</h4>
            <i class="material-icons font-color-light ml-auto">search</i>
        </div>        
        <div class=" px-18" :style="'height:' + (windowSize.height) + 'px'" style="overflow:auto">
            <div class="pt-18 font-size-large">Recent</div>
            <ul>
                <li v-for="(adServerObj, adServerIndex) in getAdServerPreference(true)"
                    class="d-flex justify-content-start">
                   <div :class="adServerObj.FormattedName + '-logo'"
                        class="ad-server-logo-content">
                    </div>
                    <div class="pt-8 ad-server-content">
                        <div class="d-flex">
                            <span class="font-weight-strong">{{adServerObj.Name}}</span>
                            <div class="ml-auto">
                            <span v-for="(protocolObj, rotocolIndex) in adServerObj.Protocols"
                                  class="protocol-content font-size-small ml-8"
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
                <li v-for="(adServerObj, adServerIndex) in getAdServerPreference(true)"
                    class="d-flex justify-content-start">
                   <div :class="adServerObj.FormattedName + '-logo'"
                        class="ad-server-logo-content">
                    </div>
                    <div class="pt-8 ad-server-content">
                        <div class="d-flex">
                            <span class="font-weight-strong">{{adServerObj.Name}}</span>
                            <div class="ml-auto">
                            <span v-for="(protocolObj, rotocolIndex) in adServerObj.Protocols"
                                  class="protocol-content font-size-small ml-8"
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
.ad-server-menu {
  width: 400px;
  position: fixed;
  height: 100%;
  background-color: white;
  z-index: 3;
  right: 0;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12);
}

.ad-server-header {
  height: 60px;
}

.ad-server-header i:hover {
  cursor: pointer;
}

.ad-server-logo-content {
  width: 150px;
  height: 55px;
  background-size: 100px auto;
  background-repeat: no-repeat;
  background-position-y: center;
}

.ad-server-content {
  width: 215px;
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

</style>
<script>
import axios from "axios";
import "../../../assets/css/ad-server-logo.css";

export default {
    props: ["windowSize"],
  data() {
    return {
      adServerList: []
    };
  },
  beforeCreate: function() {
    axios.get("/assets/data/ad-servers.json").then(response => {
      this.adServerList = response.data;
    });
  },
  methods:{
      getAdServerPreference:function(section){         
          return this.adServerList.filter(item =>{               
              return item.Favorite == section;
          });
      },
      getCommaFormat:function(arr){
          return arr.map((item, index, array) =>{
              return (index + 1) == array.length  ? ' & ' + item : index == 0 ? item:   ', '  + item
          }).join('');
      }
  }
};
</script>
