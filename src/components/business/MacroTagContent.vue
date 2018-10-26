<template>
    <div class="bg-white element-shadow px-8 py-8" :style="'height:' + (windowSize.height - windowSize.tagContentReference) + 'px'">
        <h4 class="font-weight-light pb-8 pt-18 pl-18 m-0">Ad Server Macro Tags</h4>
        <p class="font-color-light pl-18 m-0">
            Default tags automatically create both standard and secure versions of pixel and javascript tags. If additional parameters are required, (i.e. “no block” or “disable flash”) select ‘Edit’
        </p>
        <div class="px-18">          
            <md-table v-show="hasData">
                <md-table-row>
                    <md-table-head>                        
                       <md-checkbox v-model="allSelected" class="mt-4" @change="selectAllAction()"></md-checkbox>
                    </md-table-head>
                    <md-table-head>Ad Server</md-table-head>
                    <md-table-head>Configuration</md-table-head>
                    <md-table-head>Media Type</md-table-head>
                </md-table-row>
                <md-table-row v-for="adserver in tagAddedList" :key="adserver._id">
                    <md-table-cell>
                         <md-checkbox v-model="adserver.SelectedStatus"></md-checkbox>                        
                    </md-table-cell>
                    <md-table-cell>{{ adserver.Name }}</md-table-cell>
                    <md-table-cell>
                        <div v-for="preference in adserver.Preferences" :key="preference.id">
                            {{preference.Name}}
                        </div>
                    </md-table-cell>
                    <md-table-cell>
                        <div v-for="mediaTypes in adserver.MediaTypes" :key="mediaTypes.id">
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
    data() {
        return {
            allSelected: false
        }
    },
    watch: {
        allSelectedStatus: function(val) {
            this.allSelected = val;
        }
    },
    methods: {
        setAdserverConfiguration(adserver) {
                this.$emit("set-current-adserver-configuration", adserver);
            },
            selectAllAction() {
                this.tagAddedList.forEach(element => {
                    element.SelectedStatus = this.allSelected
                });
            }
    },
    computed: {
        allSelectedStatus() {
                return this.tagAddedList.every(adserver => {
                    return adserver.SelectedStatus;
                });
        },
        tagAddedList: function() {
            return this.configurationList['macro-tag-content'];
        },
        hasData(){
            return this.tagAddedList.length > 0;
        }
    }
};
</script>
<style> 
 .md-table-head-label{
     padding-left: 25px
 }
</style>


