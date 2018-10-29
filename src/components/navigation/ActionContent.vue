<template>
    <div class="col-10 p-0 pr-24 action-content">
        <div class="d-flex justify-content-end">
            <md-button class="mdc-button" v-show="hasSelectedData">                              
                  File Management
            </md-button>
            <md-button class="mdc-button" @click="removeSelectedAdServers()" v-show="hasSelectedData">                              
                  Remove Selection
            </md-button>
            <md-button class="mdc-button" @click="openAdServerSetup" v-show="isTagAddition">                              
                  Add Tag Configuration
            </md-button>
            <md-button class="mdc-button" v-show="isTagAddition">                               
                  Submit Request
            </md-button>
        </div>
        <slot></slot>
    </div>
</template>
<script>

export default {   
      props:["currentView", "hasSelectedData"],
            methods: {
            openAdServerSetup: function() {                  
                  this.$emit("show-configuration", true, 'adserver-content');
            },
            removeSelectedAdServers(){                  
                  this.$emit("remove-selected-adservers");
            }
      },
      computed:{
            isTagAddition(){
                  return this.currentView != 'dashboard-content' && this.hasSelectedData == false;
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
