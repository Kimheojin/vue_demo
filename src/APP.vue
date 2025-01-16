<template>
  <v-app>
    <!-- 좌측 바 -->
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <!-- 좌측 상단 개인정보보 -->
        <v-list>
          <v-list-item
            prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
            subtitle="이메일 정보"
            title="오대식"
          >
            <template v-slot:append>
              <v-btn icon="mdi-menu-down" size="small" variant="text"></v-btn>
            </template>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>
        <!-- 메뉴바 -->

        <v-list-item
          v-for="(item, i) in menuItems"
          :key="i"
          :to="item.path"
          color="primary"
          variant="plain"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item.title"></v-list-item-title>
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
