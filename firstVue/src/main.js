// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import $ from 'jquery'
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/bootstrap/js/bootstrap.min.js'

import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

Vue.config.productionTip = false

Vue.component('AppHeader',Header);
Vue.component("AppBody",Body);
Vue.component("AppFooter",Footer);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
