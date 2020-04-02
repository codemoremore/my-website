import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue"
Vue.use(Router);

export default new Router({
  base:"/website/",
  mode:'history',
  // mode:'hash',
  routes: [
    {
      path:"/",
      name:"login",
      component:Login
    }
  ]
});
