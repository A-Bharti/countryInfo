import { createWebHistory, createRouter } from "vue-router";
import Result from "../components/result.vue";


const routes = [
  {
    path: "/search",
    name: "result",
    component: Result,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;