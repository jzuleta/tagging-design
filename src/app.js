 import "../node_modules/bootstrap/dist/css/bootstrap-grid.css";

import "../assets/css/rules.css";
import "../assets/css/app.css";

import '../node_modules/vue-material/dist/vue-material.min.css'

import Vue from "../node_modules/vue/dist/vue.common.js";
import axios from "axios";

import SideMenu from "./components/navigation/SideMenu.vue";
import MainContent from "./components/navigation/MainContent.vue";
import HeadContent from "./components/navigation/HeadContent.vue";
import MenuContent from "./components/navigation/MenuContent.vue";
import OverlayContent from "./components/navigation/OverlayContent.vue";
import ActionContent from "./components/navigation/ActionContent.vue";
import ConfigurationContent from "./components/navigation/ConfigurationContent.vue"

import DashboardContent from "./components/business/DashboardContent.vue";
import MacroTagContent from "./components/business/MacroTagContent.vue";
import HardcodedTagContent from "./components/business/HardcodedTagContent.vue";
import VideoWrappedTagContent from "./components/business/VideoWrappedTagContent.vue";
import AdserverContent from "./components/business/AdserverContent.vue";
import BasicAdserverConfiguration from "./components/business/BasicAdserverConfiguration.vue";


import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

new Vue({
  el: "#app",
  components: {
    SideMenu,
    MainContent,
    HeadContent,
    MenuContent,
    OverlayContent,
    ActionContent,
    ConfigurationContent,
    BasicAdserverConfiguration, 
    AdserverContent,
    DashboardContent,
    MacroTagContent,
    HardcodedTagContent,
    VideoWrappedTagContent
  },
  beforeCreate: function() {
    axios.get("/assets/data/data-type.json").then(response => {
      this.dataType = response.data;
    });
    axios.get("/assets/data/ad-servers.json").then(response => {
        this.adserverList = response.data;
    });
  },
  data: {
    currentView: "dashboard-content",
    configurationList:{
      'macro-tag-content':[],
      'hardcoded-tag-content':[],
      'video-wrapped-tag-content':[]
    },
    currentAdServer: {},
    configurationView: "adserver-content",
    configurationVisibility: false,
    dataType: null,
    adserverList: null,
    window: {
      width: 0,
      height: 0,
      heightReference:150
    }
  },
  created: function() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },

  methods: {
    changeView: function(view) {
      this.currentView = view;
    },
    changeActionView:function(view){
      this.configurationView = view;
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    setConfigurationVisibility: function(status){        
      this.configurationVisibility = status;
    },
    setCurrentAdServer:function(adServer){      
      this.currentAdServer = adServer;
    }
  }
});
