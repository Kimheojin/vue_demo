<template>
  <v-list>
    <v-list-item
      :prepend-avatar="
        user.email
          ? 'https://cdn.vuetifyjs.com/images/profiles/marcus.jpg'
          : 'https://cdn.vuetifyjs.com/images/profiles/no-profile.jpg'
      "
      :subtitle="user.email || '비로그인 상태입니다'"
      :title="user.membername || '게스트'"
    >
      <template v-slot:append>
        <v-btn icon="mdi-menu-down" size="small" variant="text"></v-btn>
      </template>
    </v-list-item>
  </v-list>
</template>

<script setup>
import { useAuthStore } from "../stores/auth";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
</script>
