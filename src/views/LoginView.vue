<template>
  <div class="login-container">
    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <div class="text-h4 text-center mb-6">Login</div>
      <div class="text-subtitle-1 text-medium-emphasis">Account</div>

      <v-text-field
        v-model="email"
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <div
        class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
      >
        Password
      </div>

      <v-text-field
        v-model="password"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-btn
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        block
        @click="handleLogin"
        :loading="loading"
      >
        Log In
      </v-btn>

      <v-card-text class="text-center">
        <router-link to="/signup" class="text-blue text-decoration-none">
          회원가입 하러가기 <v-icon icon="mdi-chevron-right"></v-icon>
        </router-link>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";

export default {
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();

    const email = ref("");
    const password = ref("");
    const visible = ref(false);
    const loading = ref(false);

    const handleLogin = async () => {
      try {
        loading.value = true;
        const response = await axios.post("http://localhost:8080/api/login", {
          email: email.value,
          password: password.value,
        });

        const token = response.headers.authorization;
        if (token) {
          authStore.setToken(token);
          alert("로그인에 성공했습니다!"); // 성공 알림 추가
          router.push("/");
        }
      } catch (error) {
        console.error("Login failed:", error);
        alert("로그인에 실패했습니다.");
      } finally {
        loading.value = false;
      }
    };

    return {
      email,
      password,
      visible,
      loading,
      handleLogin,
    };
  },
};
</script>
<style scoped>
.login-container {
  min-height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.v-card {
  width: 100%;
  max-width: 448px;
}

@media (max-width: 600px) {
  .login-container {
    padding: 16px;
  }
}
</style>
