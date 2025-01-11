import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/", //메인 화면면
    name: "Home",
    component: () => import("../views/HelloWorld.vue"),
  },
  {
    path: "/login", //로그인 화면면
    name: "Login",
    component: () => import("../views/LoginView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
