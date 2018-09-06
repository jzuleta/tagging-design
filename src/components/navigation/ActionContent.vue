<template>
      <div class="col-10 p-0 pr-24 action-content">
            <div class="d-flex justify-content-between">
                  <div class="d-flex align-items-center action-section">                                                
                        <button class="mdc-button">
                              <i class="material-icons mdc-button__icon">check_box_outline_blank</i>
                              Select All
                        </button>
                  </div>
                  <div class="d-flex align-items-center action-section">                        
                        <button class="mdc-button" v-show="false">
                              <i class="material-icons mdc-button__icon">attachment</i>
                              File Management
                        </button>
                        <button class="mdc-button" v-show="false">
                              <i class="material-icons mdc-button__icon">delete</i>
                              Remove Selection
                        </button>
                        <button class="mdc-button" @click="openAdServerSetup">
                              <i class="material-icons mdc-button__icon">add</i>
                              Add Tag Configuration
                        </button>
                        <button class="mdc-button">
                               <i class="material-icons mdc-button__icon">done</i>
                              Submit Request
                        </button>
                  </div>
            </div>
            <slot></slot>
      </div>
</template>
<script>

export default {      
        methods: {
            openAdServerSetup: function() {                  
                  this.$emit("adserver-setup", true);
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
