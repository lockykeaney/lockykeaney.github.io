import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import { Home, About } from "../views";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
