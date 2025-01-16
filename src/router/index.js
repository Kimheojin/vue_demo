import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login", //로그인 화면면
    name: "Login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/signup", //로그인 화면면
    name: "SignUp",
    component: () => import("../views/SignUp.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
