import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutPage from "../views/AboutPage.vue";
import ContactPage from "../views/ContactPage.vue";
import ProjectPage from "../views/ProjectPage.vue";
import BinaryAdder from "../views/BinaryAdder.vue";
import Calculator from "../views/Calculator.vue";
import NumberConverter from "../views/NumberConverter.vue"
import LogicGateSimulator from "../views/LogicGateSimulator.vue"
import FlashCardQuiz from "../views/FlashCardQuiz.vue"

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
      path: "/number-converter",
      name: "NumberConverter",
      component: NumberConverter,
    },
    {
      path: "/logic-gate-simulator",
      name: "LogicGateSimulator",
      component: LogicGateSimulator,
    },
    {
      path: "/flash-cards",
      name: "FlashCardQuiz",
      component: FlashCardQuiz,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   component: AboutPage,
    // },
    {
      path: "/project/:project",
      name: "project",
      component: ProjectPage
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactPage
    }
    // {
    //   path: "/style-guide",
    //   name: "Style Guide",
    //   component: () => import("../views/StyleGuide.vue"),
    // },
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
