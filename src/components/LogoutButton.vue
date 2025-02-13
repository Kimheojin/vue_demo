<!-- components/LogoutButton.vue -->
<template>
  <v-list>
    <v-list-item color="error" variant="plain" @click="handleLogout">
      <template v-slot:prepend>
        <v-icon icon="mdi-logout"></v-icon>
      </template>
      <v-list-item-title>로그아웃</v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script setup>
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const handleLogout = () => {
  authStore.logout();
  router.push("/login"); // 로그아웃 후 로그인 페이지로 이동
};
</script>
