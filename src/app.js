import "../node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "../node_modules/material-design-icons/iconfont/material-icons.css";

import "../assets/rules.css";
import "../assets/app.css";

import Vue from "../node_modules/vue/dist/vue.common.js";

import SideMenu from "./components/navigation/SideMenu.vue";
import MainContent from "./components/navigation/MainContent.vue";
import HeadContent from "./components/navigation/HeadContent.vue";
import MenuContent from "./components/navigation/MenuContent.vue";
import OverlayContent from "./components/navigation/OverlayContent.vue";
import ActionContent from "./components/navigation/ActionContent.vue";

import DashboardContent from "./components/business/DashboardContent.vue";
import MacroTagContent from "./components/business/MacroTagContent.vue";
import HardcodedTagContent from "./components/business/HardcodedTagContent.vue";
import VideoWrappedTagContent from "./components/business/VideoWrappedTagContent.vue";
import AdserverContent from "./components/business/AdserverContent.vue";

new Vue({
  el: "#app",
  components: {
    SideMenu,
    MainContent,
    HeadContent,
    MenuContent,
    OverlayContent,
    ActionContent,
    AdserverContent,
    DashboardContent,
    MacroTagContent,
    HardcodedTagContent,
    VideoWrappedTagContent
  },
  data: {
    currentView: "dashboard-content",
    adserverSetup: false,
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
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    adserverSetupStatus: function(status){
      this.adserverSetup = status;
    }
  }
});
