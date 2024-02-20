import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutPage from "../views/AboutPage.vue";
import ContactPage from "../views/ContactPage.vue";
import ProjectPage from "../views/ProjectPage.vue";
import BinaryAdder from "../views/BinaryAdder.vue";
import Calculator from "../views/Calculator.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/binary-adder",
      name: "Binary Adder",
      component: BinaryAdder,
    },
    {
      path: "/calculator",
      name: "Calculator",
      component: Calculator,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
    {
      path: "/project/:project",
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
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
});

export default router;
