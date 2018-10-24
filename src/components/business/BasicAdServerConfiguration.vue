<template>
    <div>
        <div class="ad-server-header d-flex align-items-center border-bottom">            
            <md-button class="md-icon-button" @click="backAdServerSelection">
                <md-icon>arrow_back</md-icon>
            </md-button>
            <h4 class="font-weight-strong w-100">{{currentAdserver.Name}}</h4>
             <md-button class="md-icon-button ml-auto" @click="changeAdServerStatus(currentAdserver)">
                <md-icon v-if="currentAdserver.Favorite">star</md-icon>
                <md-icon v-else>star_border</md-icon>
            </md-button>            
        </div>
        <div  :style="'height:' + (windowSize.height - 110) + 'px;overflow:auto'">
            <div>               
                <div v-for="dataConfig in formattedDataType" :key="dataConfig.Title">
                    <div class="pt-18 font-size-small font-color-light px-18 mb-8">{{dataConfig.Title}}</div>
                    <div class="d-flex">
                        <div class="w-50 px-18" v-for="dataChunk in dataConfig.Data" :key="dataChunk.id">                            
                            <md-checkbox v-model="value.Value" v-for="value in dataChunk" :key="value.id" class="my-8">{{value.Name}}</md-checkbox>                             
                        </div>
                    </div>
                </div>
            </div>            
        </div>
        <div class="d-flex justify-content-end">
           <md-button @click="addAdserverConfiguration()">Add configuration</md-button>
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
</style>
<script>
const uuidv1 = require('uuid/v1');


export default {
    props: ["windowSize", "dataType", "currentAdserver" , "currentView", "configurationList"],  
    data() {
        return {
            dataTypeNames: []
        };
    },
    methods: {    
        splitDataType: function(arr) {            
            var index = 0;
            var arrayLength = arr.length;
            var tempArray = [];
            var chunkSize = arrayLength > 3 ? arrayLength / 2 : arrayLength;

            for (index = 0; index < arrayLength; index += chunkSize) {
                var myChunk = arr.slice(index, index + chunkSize);
                tempArray.push(myChunk);
            }

            return tempArray;
        },
        backAdServerSelection:function(){
            this.$emit("change-configuration-view", "adserver-content");
        },
        changeAdServerStatus:function(adServer){
            adServer.Favorite = !adServer.Favorite; 
        },
        addAdserverConfiguration: function() {            
            this.configurationList[this.currentView].push(Object.assign({
                    _id: uuidv1(),
                    preferences: this.dataType.Preferences.Data.filter((row, index) => {                                                    
                        return row.Value == true
                    }),
                    mediaTypes: this.dataType.MediaType.Data.filter((row, index) => {
                        return row.Value == true
                    })
                }, this.currentAdserver));

            this.$emit("configuration-visibility", false);
        }
    },
    computed: {     
        formattedDataType: function() {              
            this.dataTypeNames =
                Object.getOwnPropertyNames(this.dataType)
                .filter(item => {
                    return item != '__ob__'
                });
            return this.dataTypeNames.map(name => {
                return {
                    Title: this.dataType[name].Name,
                    Data: this.splitDataType(this.dataType[name].Data)
                };
            });            
        }
    }
};
</script>
