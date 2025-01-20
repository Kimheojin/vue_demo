import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/", //홈 화면
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/login", //로그인 화면
    name: "Login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/signup", //회원가입 화면
    name: "SignUp",
    component: () => import("../views/SignUp.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
