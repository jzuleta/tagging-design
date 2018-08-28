import '../node_modules/bootstrap/dist/css/bootstrap-grid.css'
import '../node_modules/material-design-icons/iconfont/material-icons.css'

import '../assets/rules.css'
import '../assets/app.css'

import Vue from '../node_modules/vue/dist/vue.common.js'

import SideMenu from './components/navigation/SideMenu.vue'
import MainContent from './components/navigation/MainContent.vue'
import HeadContent from './components/navigation/HeadContent.vue'
import MenuContent from './components/navigation/MenuContent.vue'
import OverlayContent from './components/navigation/OverlayContent.vue'

 new Vue({
  el: '#app',
  components: {
      SideMenu, 
      MainContent, 
      HeadContent,
      MenuContent, 
      OverlayContent
  }
}) 
