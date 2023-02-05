import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/tutorial",
      name: "tutorial",
      component: () => import("../views/TutorialView.vue"),
      children: [
        {
          path: "tutorial2",
          component: () => import("../views/TutorialStep2View.vue"),
        },
        {
          path: "tutorial3",
          component: () => import("../views/TutorialStep3View.vue"),
        },
        {
          path: "tutorial4",
          component: () => import("../views/TutorialStep4View.vue"),
        },
        {
          path: "tutorial5",
          component: () => import("../views/TutorialStep5View.vue"),
        },
        {
          path: "tutorial6",
          component: () => import("../views/TutorialStep6View.vue"),
        },
        {
          path: "tutorial7",
          component: () => import("../views/TutorialStep7View.vue"),
        },
        {
          path: "tutorial8",
          component: () => import("../views/TutorialStep8View.vue"),
        },
        {
          path: "tutorial9",
          component: () => import("../views/TutorialStep9View.vue"),
        },
        {
          path: "tutorial10",
          component: () => import("../views/TutorialStep10View.vue"),
        },
        {
          path: "tutorial11",
          component: () => import("../views/TutorialStep11View.vue"),
        },
        {
          path: "tutorial12",
          component: () => import("../views/TutorialStep12View.vue"),
        },
        {
          path: "tutorial13",
          component: () => import("../views/TutorialStep13View.vue"),
        },
        {
          path: "tutorial14",
          component: () => import("../views/TutorialStep14View.vue"),
        },
        {
          path: "tutorial15",
          component: () => import("../views/TutorialStep15View.vue"),
        },
      ]
    },
  ],
});

export default router;
