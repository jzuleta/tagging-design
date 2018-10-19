<script>
export default {
  data() {
    return {
      menuItems: [
        { name: "Dashboard", icon: "equalizer"},
        { name: "Macro Tag", icon: "label"},
        { name: "Hardcoded Tag", icon: "assignment"},
        { name: "Video Wrapped Tag", icon: "ondemand_video"},
      ],
      activeItem: "Dashboard"
    };
  },
  methods: {
    changeView: function(view) {
      this.activeItem = view;
      this.$emit(
        "change-view",
        view
          .toLowerCase()
          .replace(new RegExp(" ", "g"), "-")
          .concat("-content")
      );
    }
  }
};
</script>
<template>  
   <div class="col-2 p-0 h-100">
    <ul class="menu-content side-menu p-0 mt-24">      
      <md-button v-for="item in menuItems" :key="item.name" @click="changeView(item.name)" :class="{'active-item' : activeItem == item.name}">
         <div class="d-flex justify-content-start align-items-center">
            <i class="material-icons font-color-light">{{item.icon}}</i>
            <div class="font-size-large ml-24">{{item.name}}</div>
         </div>
      </md-button> 
    </ul>

</div>
</template>
<style>
.menu-content button{
    width: 100%;
    margin: 0;
    height: 46px;
    padding-left: 18px;
}

.menu-content button .md-ripple{
      display: flex;
    justify-content: start;
}

.menu-content button.active-item{
  background-color: #d8d8d8
}

</style>
