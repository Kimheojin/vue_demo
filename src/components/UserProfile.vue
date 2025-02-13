<template>
  <v-list>
    <v-list-item
      prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
      :subtitle="user.email"
      :title="user.membername"
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
