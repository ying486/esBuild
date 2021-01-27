import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import '../my-theme/index.less';
import draggable from 'vuedraggable'
import jsBeautify from 'js-beautify';

Vue.config.productionTip = false
Vue.prototype.jsBeautify = jsBeautify
Vue.use(ViewUI);
Vue.component('draggable', draggable);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
