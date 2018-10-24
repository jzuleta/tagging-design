<template>
    <div class="bg-white element-shadow px-8 py-8" :style="'height:' + (windowSize.height - windowSize.tagContentReference) + 'px'">
        <h4 class="font-weight-light pb-8 pt-18 pl-18 m-0">Ad Server Macro Tags</h4>
        <p class="font-color-light pl-18 m-0">
            Default tags automatically create both standard and secure versions of pixel and javascript tags. If additional parameters are required, (i.e. “no block” or “disable flash”) select ‘Edit’
        </p>
        <div class="px-18">        
            <md-table v-model="tagAddedList">   
                <md-table-empty-state                    
                    md-label="No tag added"
                    md-description="Click on Add New Tag Configuration button">
                </md-table-empty-state>               
                <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="multiple">
                    <md-table-cell md-label="Ad server" md-sort-by="email">{{ item.Name }}</md-table-cell>
                    <md-table-cell md-label="Configuration" md-sort-by="gender">
                        <div v-for="preference in item.preferences" :key="preference.id">
                            {{preference.Name}}
                        </div>
                    </md-table-cell>
                    <md-table-cell md-label="Media Type" md-sort-by="title">
                        <div v-for="mediaTypes in item.mediaTypes" :key="mediaTypes.id">
                            {{mediaTypes.Name}}
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
  computed:{
      tagAddedList: function(){
        return this.configurationList['macro-tag-content'];
      }    
  }
};
</script>

