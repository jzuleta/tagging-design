<template>
    <div>
        <div class="ad-server-header d-flex align-items-center border-bottom">            
            <md-button class="md-icon-button" v-show="!isEditing" @click="backAdServerSelection">
                <md-icon>arrow_back</md-icon>
            </md-button>
            <h4 class="font-weight-strong w-100" :class="{'ml-18' : isEditing}">{{currentAdserver.Name}}</h4>
             <md-button class="md-icon-button ml-auto" v-show="!isEditing" @click="changeAdServerStatus(currentAdserver.BaseConfiguration)">
                <md-icon v-if="currentAdserver.BaseConfiguration.Favorite">star</md-icon>
                <md-icon v-else>star_border</md-icon>
            </md-button>     
             <md-button class="md-icon-button ml-auto" v-show="isEditing" @click="closeEdition()">
                <md-icon>close</md-icon>
            </md-button>       
        </div>
        <div :style="'height:' + (windowSize.height - 110) + 'px;overflow:auto'">
            <div>               
                <div v-for="dataConfig in formattedDataType" :key="dataConfig.Title">
                    <div class="pt-18 font-size-small font-color-light px-18 mb-8">{{dataConfig.Title}}</div>
                    <div class="d-flex">
                        <div class="px-18" :class="[dataConfig.Data.length == 1 ? 'w-100': 'w-50']" v-for="dataChunk in dataConfig.Data" :key="dataChunk.id">                            
                            <md-checkbox v-model="value.Value" v-for="value in dataChunk" :key="value.id" class="my-8" :class="{'w-100' :dataConfig.Data.length == 1  }">{{value.Name}}</md-checkbox>                             
                        </div>
                    </div>
                </div>
            </div>            
        </div>
        <div class="d-flex justify-content-end">
           <md-button @click="addAdserverConfiguration()" v-show="!isEditing">Add configuration</md-button>
           <md-button v-show="isEditing">Confirm changes</md-button>
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
            dataTypeNames: [],
            selectedConfiguration: [],
            invalidSections: 0          
        };
    },
    methods: {    
        splitDataType: function(arr, chunk) {            
            var index = 0;
            var arrayLength = arr.length;
            var tempArray = [];
            var chunkSize = chunk? chunk : arrayLength > 3 ? arrayLength / 2 : arrayLength;

            for (index = 0; index < arrayLength; index += chunkSize) {
                var myChunk = arr.slice(index, index + chunkSize);            
                tempArray.push(myChunk);
            }

            return tempArray;
        },       
        readAdServerConfiguration(){              
            (this.isEditing ? this.selectedConfiguration : this.currentAdserver.Configuration).forEach(adServerConfig => {
                this.dataTypeNames.forEach(name => {
                    var dataTypeSelection = this.dataType[name].Data.filter(dataValue => {
                        return dataValue.Name == adServerConfig;                        
                    });
                    
                    if(dataTypeSelection.length > 0){
                        dataTypeSelection[0].Value = true;
                        return;
                    }                        
                });
           });
        },
        readAdServerSelection(){            
            this.selectedConfiguration.length = 0;
            this.dataTypeNames.forEach(name => {
                this.currentAdserver[name].forEach(selection=>{
                      this.selectedConfiguration.push(selection.Name);
                 });                 
             });             
        },
        backAdServerSelection:function(){
            this.clearAdServerConfiguration();
            this.$emit("change-configuration-view", "adserver-content");
        },
        closeEdition(){
            this.clearAdServerConfiguration();
             this.$emit("configuration-visibility", false); 
        },
        changeAdServerStatus:function(adServer){
            adServer.Favorite = !adServer.Favorite; 
        },
        validateAdServerConfiguration: function(){
            this.invalidSections = 0;
             this.dataTypeNames.forEach(name=>{                
                this.dataType[name].IsValid = 
                this.dataType[name].Data.some(row =>{ return row.Value});

                this.dataType[name].IsValid ? 0 : this.invalidSections++;
            });
        },
        clearAdServerConfiguration: function(){
            this.dataTypeNames.forEach(name=>{
                this.dataType[name].Data.forEach(dataValue =>{
                    dataValue.Value = false;
                });
            });
        },
        addAdserverConfiguration: function() {     
            this.validateAdServerConfiguration();

            if(this.invalidSections == 0){ 
                var Configuration = new Object();

                this.dataTypeNames.forEach(name => {
                    Configuration[name] = this.dataType[name].Data.filter((row, index) => {                                                    
                        return row.Value == true
                    });
                });   

                this.configurationList[this.currentView].push(Object.assign({
                    _id: uuidv1(),
                    SelectedStatus:false,
                    Visibility: true,
                },Configuration, this.currentAdserver));
                

                this.clearAdServerConfiguration();
                this.$emit("configuration-visibility", false);
            }else{                
                 this.$emit("snackbar-visibility", {
                    showSnackbar: true,
                    position: 'center',
                    duration: 4000,
                    isInfinity: true,
                    snackbarMessage: 'You must select at least one element',
                    snackbarButtonMessage: 'Got it'
                 });
            }       
        }
    },
    computed: {     
        formattedDataType: function() {              
            this.dataTypeNames =
                Object.getOwnPropertyNames(this.dataType)
                .filter(item => {
                    return item != '__ob__'
                });            
            
            this.dataTypeNames = this.dataTypeNames.filter((name, index)=>{
                return this.dataType[name].Grid.some(grid=> grid == this.currentView)
            });            

            this.isEditing ? this.readAdServerSelection() : null;

            this.readAdServerConfiguration();
            return this.dataTypeNames.map(name => {                   
                return {
                    Title: this.dataType[name].Name,
                    Visibility: this.dataType[name].Grid.some(grid=> grid == this.currentView),
                    Data: this.splitDataType(this.dataType[name].Data, this.dataType[name].Chunk)
                };
            });            
        },
        isEditing(){
            return this.currentAdserver.hasOwnProperty('_id');
        }
    }
};
</script>
