// import page1 from './pages/page1.vue'
import page2 from "./pages/page2.vue";
import VueRouter from "vue-router";
const page1 = { template: "<div>page1</div>" };
import Vue from "vue";
console.log("router");
Vue.use(VueRouter);
const routes = [
  {
    path: "/page1",
    name: "page1",
    component: page1
  },
  {
    path: "/page2",
    name: "page2",
    component: page2
  }
];
const router = new VueRouter({ mode: "", routes });
console.log(router);
export default router;
