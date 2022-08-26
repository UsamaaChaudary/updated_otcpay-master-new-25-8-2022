import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router';
import i18n from './i18n'
import VueStorage from "vue-ls";
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import "./styles/icon/iconfont.css";
import "./styles/icon/iconfont"
import "./core/use.js"
import '@/styles/index.scss' // global css
import _ from 'lodash'
Vue.config.productionTip = false
Vue.prototype._ = _
Vue.use(VueStorage, {
  namespace: "otc__", // key prefix
  name: "ls", // name variable Vue.[ls] or this.[$ls],
  storage: "local" // storage name session, local, memory
});
new Vue({
  store,
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')