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
      <div  v-for="item in menuItems" :key="item.name" class="d-flex justify-content-start">
      <md-button class="">
         <div class="d-flex justify-content-start align-items-center">
            <i class="material-icons font-color-light">{{item.icon}}</i>
            <div class="font-size-large ml-24">{{item.name}}</div>
         </div>
      </md-button>
      </div>
        <!-- <li v-for="(item, index) in menuItems" :class="{'active-item' : activeItem == item.name}"           
            @click="changeView(item.name)">
             <md-button>
               <div class="d-flex justify-content-start align-items-center px-24 py-24 w-100">
               <i class="material-icons font-color-light">{{item.icon}}</i>
                <div class="font-size-large ml-24">{{item.name}}</div>
                </div>
             </md-button>
            
        </li> -->
    </ul>

</div>
</template>
<style scoped>
.md-button {
  padding: 0;
    width: 100%;
    margin: 0;
    height: 40px;
}


li.active-item i{
    color:#282828;
}

li.active-item div{
    font-weight: 500
}
</style>