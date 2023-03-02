import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutPage from "../views/AboutPage.vue";
import ContactPage from "../views/ContactPage.vue";
import ProjectPage from "../views/ProjectPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
    {
      path: "/project",
      name: "project",
      component: ProjectPage
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactPage
    },
    {
      path: "/style-guide",
      name: "Style Guide",
      component: () => import("../views/StyleGuide.vue"),
    },
  ],
});

export default router;
