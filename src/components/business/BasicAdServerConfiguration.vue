<template>
    <div>
        <div class="ad-server-header d-flex align-items-center border-bottom px-18">
            <i class="material-icons font-color-light mr-18">arrow_back</i>
            <h4 class="font-weight-strong">Weborama</h4>
            <i class="material-icons font-color-light font-size-big ml-auto">star_border</i>
        </div>
        <div  :style="'height:' + (windowSize.height - 110) + 'px;overflow:auto'">
            <div>               
                <div v-for="dataConfig in formattedDataType" :key="dataConfig.Title">
                    <div class="pt-18 font-size-small font-color-light px-18 mb-8">{{dataConfig.Title}}</div>
                    <div class="d-flex">
                        <div class="w-50 px-18" v-for="dataChunk in dataConfig.Data" :key="dataChunk.id">
                            <md-checkbox v-for="value in dataChunk" :key="value.id" class="my-8">{{value.Name}}</md-checkbox>
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
<script>export default {
    props: ["windowSize", "dataType"],
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
        }
    },
    computed: {
        formattedDataType: function() {
            if (this.dataType) {
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
    }
};
</script>
