import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router';
import HelloWorld from './components/HelloWorld';
import Warehouse from './components/WarehousesDetails';

Vue.use(VueRouter);
const routes=[
  {
    path:'/edit',
    component: Warehouse
  },
  {
    path:'/',
    component: HelloWorld
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

Vue.config.productionTip = false;
new Vue({
  router:router,
  render: h => h(App)
}).$mount("#app");
