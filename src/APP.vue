<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="냉장고 파먹기기"></v-app-bar>

    <v-navigation-drawer>
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          :title="item.title"
        >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main
      class="d-flex align-center justify-center"
      style="min-height: 300px"
    >
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<script setup>
import { ref } from "vue";

const menuItems = ref([
  //router.js에서 추가적인 설정 필요한듯
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Login", path: "/Login" },
  { title: "Dashboard", path: "/dashboard" },
]);
</script>

<style lang="scss">
body {
  overflow: hidden;
  min-height: 100vh;
  background: rgb(128, 128, 128);
  background: linear-gradient(
    0deg,
    rgba(128, 128, 128, 0.9) 0%,
    rgba(50, 50, 50, 1) 100%
  );

  @media (max-width: 600px) {
    overflow: auto;
  }
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
}
</style>
