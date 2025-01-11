<script setup>
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <v-container>
    <v-card class="mx-auto mt-5" max-width="500">
      <v-card-text>
        <div class="card">
          <v-btn @click="count++">count is {{ count }}</v-btn>
          <p class="mt-4">Welcome to Home Page</p>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
