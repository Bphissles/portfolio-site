import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/style-guide",
      name: "Style Guide",
      component: () => import("../views/StyleGuide.vue")
    }
  ],
});

export default router;
