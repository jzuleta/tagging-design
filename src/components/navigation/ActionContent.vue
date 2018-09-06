<template>
      <div class="col-10 p-0 pr-24 action-content">
            <div class="d-flex justify-content-between">
                  <div class="d-flex align-items-center action-section">                                                
                        <button class="button">
                              <i class="material-icons font-color-white mr-8">check_box_outline_blank</i>
                              Select All
                        </button>
                  </div>
                  <div class="d-flex align-items-center action-section">                        
                        <button class="button" v-show="false">
                              <i class="material-icons font-color-white mr-8">attachment</i>
                              File Management
                        </button>
                        <button class="button ml-8" v-show="false">
                              <i class="material-icons font-color-white mr-8">delete</i>
                              Remove Selection
                        </button>
                        <button class="button ml-8" @click="openAdServerSetup">
                              <i class="material-icons font-color-white mr-8">add</i>
                              Add Tag Configuration
                        </button>
                        <button class="button ml-8">
                               <i class="material-icons font-color-white mr-8">done</i>
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

button {
  padding: 5px 8px;
  border: none;
  border-radius: 2px;
  letter-spacing: 0.3px;
  display: flex;
  align-items: center;
  background-color: transparent;
  font-size: 12px;
  transition: background-color .3s ease-in-out,border-right .3s ease-in-out
}

button:hover{
      background-color: #2196f3bf;
}
</style>
