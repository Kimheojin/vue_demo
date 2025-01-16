<template>
  <v-app>
    <!-- 좌측 바 -->
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item v-for="(item, i) in menuItems" :key="i" :to="item.path">
          <template v-slot:prepend>
            <v-icon>{{ item.icon }}</v-icon>
          </template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- 상단 바 -->
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>냉장고 파먹기</v-app-bar-title>
    </v-app-bar>

    <!-- router -->
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(null);
const menuItems = ref([
  { title: "홈", path: "/", icon: "mdi-home" },
  { title: "로그인", path: "/Login", icon: "mdi-account" },
  { title: "내 정보", path: "/contact", icon: "mdi-account-cog" },
  { title: "냉장고 파먹기", path: "/contact", icon: "mdi-fridge" },
  { title: "레시피 검색하기", path: "/contact", icon: "mdi-magnify" },
]);
</script>

<style></style>
