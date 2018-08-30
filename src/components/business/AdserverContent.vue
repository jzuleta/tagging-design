<template>
    <div class="ad-server-menu">
        <div class="ad-server-header d-flex align-items-center border-bottom  px-18">
            <i class="material-icons font-color-light mr-18">close</i>
            <h4 class="font-weight-strong">Select an Ad Server</h4>
            <i class="material-icons font-color-light ml-auto">search</i>
        </div>        
        <div class=" px-18">
            <div class="py-18 font-size-large">Recent</div>
            <ul>
                <li v-for="(adServerObj, adServerIndex) in getAdServerSection(true)">
                   <img src="/assets/img/ad-servers-logo/ad-form.png"/>
                </li>
            </ul>
            <div class="py-18 font-size-large">More</div>
             <ul>
                <li v-for="(adServerObj, adServerIndex) in getAdServerSection(false)">
                        {{adServerObj.Name}}  
                </li>
            </ul>
        </div>        
    </div>
</template>
<style scoped>
.ad-server-menu {
  width: 400px;
  position: fixed;
  height: 100%;
  background-color: white;
  z-index: 3;
  right: 0;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12);
}

.ad-server-header {
  height: 60px;
}

.ad-server-header i:hover {
  cursor: pointer;
}
</style>
<script>
import axios from "axios";
import "../../../assets/css/ad-server-logo.css";

export default {
  data() {
    return {
      adServerList: []
    };
  },
  beforeCreate: function() {
    axios.get("/assets/data/ad-servers.json").then(response => {
      this.adServerList = response.data;
    });
  },
  methods:{
      getAdServerSection:function(section){         
          return this.adServerList.filter(item =>{               
              return item.Favorite == section;
          });
      }
  }
};
</script>
