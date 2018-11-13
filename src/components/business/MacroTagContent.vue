<template>
    <div class="bg-white element-shadow px-8 py-8" :style="'height:' + (windowSize.height - windowSize.tagContentReference) + 'px'">
      <div class="d-flex justify-content-between">
        <h4 class="font-weight-light pb-8 pt-18 pl-18 m-0">Ad Server Macro Tags</h4>        
        <div class="pr-18">
        <md-button class="md-icon-button m-0" @click="expanded = false">
            <md-icon>view_headline</md-icon>
        </md-button>
         <md-button class="md-icon-button m-0" @click="expanded = true">
            <md-icon>view_stream</md-icon>
        </md-button>
        </div>
      </div>        
        <div class="px-18">     
           <md-table v-show="!hasData">
                <md-table-row>
                    <md-table-head>                        
                       <md-checkbox class="mt-4" disabled></md-checkbox>
                    </md-table-head>
                    <md-table-head>Ad Server</md-table-head>
                    <md-table-head>Configuration</md-table-head>
                    <md-table-head>Media Type</md-table-head>
                </md-table-row>            
            </md-table>     
            <md-empty-state
              v-show="!hasData"
              md-label="It has not been added any Ad server">
              <md-button class="md-primary md-raised" @click="openAdServerSetup">Add Ad Server Configuration</md-button>
            </md-empty-state>
            <md-table v-show="hasData">
                <md-table-row>
                    <md-table-head>                        
                       <md-checkbox v-model="allSelected" class="mt-4" @change="selectAllAction()"></md-checkbox>
                    </md-table-head>
                    <md-table-head>Ad Server</md-table-head>
                    <md-table-head>Configuration</md-table-head>
                    <md-table-head>Media Type</md-table-head>
                </md-table-row>
                <md-table-row v-for="adserver in tagAddedList" :key="adserver._id" v-show="adserver.Visibility" @click="setAdserverConfiguration(adserver)">
                    <md-table-cell>
                         <md-checkbox v-model="adserver.SelectedStatus"></md-checkbox>                        
                    </md-table-cell>
                    <md-table-cell>{{ adserver.Name }}</md-table-cell>
                    <md-table-cell>
                      <ul class="list-unstyled p-0" v-if="expanded">
                        <li v-for="preference in adserver.Preferences" :key="preference.id">
                            {{preference.Name}}
                        </li>
                      </ul>
                      <div v-else>

                      </div>
                    </md-table-cell>
                    <md-table-cell>
                      <ul class="list-unstyled p-0" v-if="expanded">
                        <li v-for="mediaTypes in adserver.MediaTypes" :key="mediaTypes.id">
                            {{mediaTypes.Name}}
                        </li>
                      </ul>
                       <div v-else>

                      </div>
                    </md-table-cell>
                </md-table-row>
            </md-table>
        </div>
    </div>
</template>
<script>
export default {
  props: ["windowSize", "configurationList"],
  data() {
    return {
      allSelected: false,
      expanded: true
    };
  },
  watch: {
    allSelectedStatus: function(val) {
      this.allSelected = val;
    },
    someSelectedStatus(newValue, oldValue) {
      this.$emit("action-section-visivility", newValue);
    }
  },
  methods: {
    openAdServerSetup: function() {
      this.$emit("show-configuration", true, "adserver-content");
    },
    setAdserverConfiguration(adserver) {
      this.$emit("set-current-adserver-configuration", adserver);
    },
    selectAllAction() {
      this.tagAddedList.forEach(element => {
        element.SelectedStatus = this.allSelected;
      });
    }
  },
  computed: {
    allSelectedStatus() {
      return this.tagAddedList.every(adserver => {
        return adserver.SelectedStatus && adserver.Visibility;
      });
    },
    someSelectedStatus() {
      return this.tagAddedList.some(adserver => {
        return adserver.SelectedStatus && adserver.Visibility;
      });
    },
    tagAddedList: function() {
      return this.configurationList["macro-tag-content"];
    },
    hasData() {
      return (
        this.tagAddedList.filter(adserver => {
          return adserver.Visibility;
        }).length > 0
      );
    }
  }
};
</script>
<style>
.md-table-head-label {
  padding-left: 25px;
}
</style>