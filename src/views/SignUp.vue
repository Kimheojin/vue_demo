<template>
  <div class="signup-container">
    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <div class="text-h4 text-center mb-6">회원 가입</div>
      <v-text-field
        density="compact"
        placeholder="이름 입력"
        prepend-inner-icon="mdi-account"
        variant="outlined"
      ></v-text-field>

      <v-text-field
        density="compact"
        placeholder="이메일 입력"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="비밀번호 입력"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>
      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="비밀번호 확인"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-btn class="mb-8" color="blue" size="large" variant="tonal" block>
        Sign Up
      </v-btn>
      <v-card-text class="text-center">
        <router-link to="/login" class="text-blue text-decoration-none">
          이미 아이디 ~~ 로그인창으로
        </router-link>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
const visible = ref(false);
</script>

<style scoped>
.signup-container {
  /* 'singup'이 아닌 'signup'으로 수정했습니다 */
  min-height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 10px; /* 위쪽 여백 추가 */
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
