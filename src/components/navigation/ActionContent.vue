<template>
      <div class="col-10 p-0 pr-24 action-content">
            <div class="d-flex justify-content-between">
                  <div class="d-flex align-items-center action-section">       
                        <md-checkbox>Select All</md-checkbox>                                         
                  </div>
                  <div class="d-flex align-items-center action-section">                        
                        <md-button class="mdc-button" v-show="false">                              
                              File Management
                        </md-button>
                        <md-button class="mdc-button" v-show="false">                              
                              Remove Selection
                        </md-button>
                        <md-button class="mdc-button" @click="openAdServerSetup">                              
                              Add Tag Configuration
                        </md-button>
                        <md-button class="mdc-button">                               
                              Submit Request
                        </md-button>
                  </div>
            </div>
            <slot></slot>
      </div>
</template>
<script>

export default {   
        methods: {
            openAdServerSetup: function() {                  
                  this.$emit("show-configuration", true);
            }
      }
}
</script>

<style scoped>
.action-content {
  margin-top: -120px;
  z-index: 2;
}
.action-section {
  height: 50px;
}

</style>
