<template>
  <div>
    <div class="ad-server-header d-flex align-items-center border-bottom  px-18">
        <i class="material-icons font-color-light mr-18">arrow_back</i>
        <h4 class="font-weight-strong">Weborama</h4>
    </div>
    <div  :style="'height:' + (windowSize.height - 60) + 'px'" style="overflow:auto">
        <div class="d-flex justify-content-between px-18">
            <div class="w-50">
                <div class="pt-18 font-size-large">Tag Type</div>
                <div v-for="(tagType, index) in dataType.TagTypes" 
                    class="d-flex align-items-center justify-content-star mt-8">
                    <input type="checkbox" :id="tagType.Name +'-chk'"/>
                    <label :for="tagType.Name +'-chk'" class="ml-24">{{tagType.Name}}</label>
                </div>                
            </div>
            <div class="w-50">
                <div class="pt-18 font-size-large">Protocol</div>
                <div v-for="(protocolType, index) in dataType.ProtocolTypes" 
                    class="d-flex align-items-center justify-content-star mt-8">
                    <input type="checkbox" :id="protocolType.Name +'-chk'"/>
                    <label :for="protocolType.Name +'-chk'" class="ml-24">{{protocolType.Name}}</label>
                </div>                
            </div>
        </div>
        <div class="d-flex justify-content-between mt-18 border-top px-18">
            <div class="w-50">
                <div class="pt-18 font-size-large">Preferences</div>
                <div v-for="(preference, index) in dataType.Preferences" 
                    class="d-flex align-items-center justify-content-star mt-8">
                    <input type="checkbox" :id="preference.Name +'-chk'"/>
                    <label :for="preference.Name +'-chk'" class="ml-24">{{preference.Name}}</label>
                </div>                
            </div>
            <div class="w-50">
                <div class="pt-18 font-size-large">Others</div>
                <div v-for="(other, index) in dataType.Others" 
                    class="d-flex align-items-center justify-content-star mt-8">
                    <input type="checkbox" :id="other.Name +'-chk'"/>
                    <label :for="other.Name +'-chk'" class="ml-24">{{other.Name}}</label>
                </div>                
            </div>
        </div>
        <div class="mt-18 border-top px-18">
            <div class="pt-18 font-size-large">Media Type</div>
            <div class="d-flex justify-content-between ">
            <div class="w-50" v-for="(mediaTypeSection, mdIndex) in formatMediaType()">                
                <div v-for="(mediaType, index) in mediaTypeSection" 
                    class="d-flex align-items-center justify-content-star mt-8">
                    <input type="checkbox" :id="mediaType.Name +'-chk'"/>
                    <label :for="mediaType.Name +'-chk'" class="ml-24">{{mediaType.Name}}</label>
                </div>                
            </div>
            </div>
        </div>
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
export default {
  props: ["windowSize", "dataType"],
  /*   data() {
    return {
      adServerList: []
    };
  },*/
  methods: {
     formatMediaType: function() {           

         var index = 0;
         var arrayLength = this.dataType.MediType.length;
         var tempArray = [];
         var chunkSize = 4;

         for (index = 0; index < arrayLength; index += chunkSize) {             
             var myChunk = this.dataType.MediType.slice(index, index + chunkSize);
             tempArray.push(myChunk);
         }

         return tempArray;
     }
 }
};
</script>
