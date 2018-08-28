<script>
export default {
  data() {
    return {
      menuItems: [
        { name: "Dashboard", icon: "equalizer" },
        { name: "Macro Tag", icon: "label" },
        { name: "Hardcoded Tag", icon: "assignment" },
        { name: "Video Wrapped Tag", icon: "ondemand_video" }
      ]
    };
  },
  methods: {
    changeView: function(view) {
      this.$emit(
            "change-view", view
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
        <li v-for="(item, index) in menuItems" 
            class="d-flex justify-content-start align-items-center px-24"
            @click="changeView(item.name)">
            <i class="material-icons font-color-light">{{item.icon}}</i>
            <div class="font-weight-strong ml-24">{{item.name}}</div>
        </li>
    </ul>

</div>
</template>
<style scoped>
li {
  height: 40px;
}

li:hover {
  color: #191919;
  cursor: pointer;
  background-color: #e7e7e7;
}
</style>