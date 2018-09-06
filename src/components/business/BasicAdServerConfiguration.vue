<template>
    <div>
        <div class="ad-server-header d-flex align-items-center border-bottom  px-18">
            <i class="material-icons font-color-light mr-18">arrow_back</i>
            <h4 class="font-weight-strong">Weborama</h4>
            <i class="material-icons font-color-light font-size-big ml-auto">star_border</i>
        </div>
        <div  :style="'height:' + (windowSize.height - 60) + 'px'" style="overflow:auto">
            <div class="d-flex justify-content-between px-18">
                <div class="w-50">
                    <div class="pt-18 font-size-small font-color-light">Tag Type</div>
                    <div v-for="(tagType, index) in dataType.TagTypes" 
                    class="d-flex align-items-center justify-content-star mt-8">
                        <div class="mdc-checkbox d-flex align-items-center justify-content-star">
                            <input type="checkbox" class="mdc-checkbox__native-control" :id="tagType.Name +'-chk'" />
                            <div class="mdc-checkbox__background">
                                <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                                    <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                                </svg>
                                <div class="mdc-checkbox__mixedmark"></div>
                            </div>
                        </div>
                        <label :for="tagType.Name +'-chk'">{{tagType.Name}}</label>
                    </div>
                </div>
                <div class="w-50">
                    <div class="pt-18 font-size-small font-color-light">Protocol</div>
                    <div v-for="(protocolType, index) in dataType.ProtocolTypes" 
                    class="d-flex align-items-center justify-content-star mt-8">
                        <div class="mdc-checkbox">
                            <input type="checkbox" class="mdc-checkbox__native-control" :id="protocolType.Name +'-chk'" />
                            <div class="mdc-checkbox__background">
                                <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                                    <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                                </svg>
                                <div class="mdc-checkbox__mixedmark"></div>
                            </div>
                        </div>
                        <label :for="protocolType.Name +'-chk'">{{protocolType.Name}}</label>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-between mt-18 border-top px-18">
                <div class="w-50">
                    <div class="pt-18 font-size-small font-color-light">Preferences</div>
                    <div v-for="(preference, index) in dataType.Preferences" 
                    class="d-flex align-items-center justify-content-star mt-8">
                        <div class="mdc-checkbox">
                            <input type="checkbox" class="mdc-checkbox__native-control" :id="preference.Name +'-chk'" />
                            <div class="mdc-checkbox__background">
                                <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                                    <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                                </svg>
                                <div class="mdc-checkbox__mixedmark"></div>
                            </div>
                        </div>
                        <label :for="preference.Name +'-chk'">{{preference.Name}}</label>
                    </div>
                </div>
                <div class="w-50">
                    <div class="pt-18 font-size-small font-color-light">Others</div>
                    <div v-for="(other, index) in dataType.Others" 
                    class="d-flex align-items-center justify-content-star mt-8">
                        <div class="mdc-checkbox">
                            <input type="checkbox" class="mdc-checkbox__native-control" :id="other.Name +'-chk'" />
                            <div class="mdc-checkbox__background">
                                <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                                    <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                                </svg>
                                <div class="mdc-checkbox__mixedmark"></div>
                            </div>
                        </div>
                        <label :for="other.Name +'-chk'">{{other.Name}}</label>
                    </div>
                </div>
            </div>
            <div class="mt-18 border-top px-18">
                <div class="pt-18 font-size-small font-color-light">Media Type</div>
                <div class="d-flex justify-content-between ">
                    <div class="w-50" v-for="(mediaTypeSection, mdIndex) in formatMediaType()">
                        <div v-for="(mediaType, index) in mediaTypeSection" class="d-flex align-items-center justify-content-star mt-8">
                            <div class="mdc-checkbox">
                                <input type="checkbox" class="mdc-checkbox__native-control" :id="mediaType.Name +'-chk'" />
                                <div class="mdc-checkbox__background">
                                    <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                                        <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                                    </svg>
                                    <div class="mdc-checkbox__mixedmark"></div>
                                </div>
                            </div>
                            <label :for="mediaType.Name +'-chk'">{{mediaType.Name}}</label>
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

.mdc-checkbox{
    margin-left: -8px;
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
