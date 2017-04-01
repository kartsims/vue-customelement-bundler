import Vue from 'vue'

// include vue-custom-element plugin to Vue
import VueCustomElement from './assets/js/vue-custom-element.min.js'
Vue.use(VueCustomElement)

// import and register your component(s)
import ShareButtonsComponent from './components/ShareButtonsComponent'
Vue.customElement('share-buttons', ShareButtonsComponent)
