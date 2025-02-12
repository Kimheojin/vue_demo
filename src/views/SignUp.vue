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
        v-model="membername"
        density="compact"
        placeholder="이름 입력"
        prepend-inner-icon="mdi-account"
        variant="outlined"
      ></v-text-field>

      <v-text-field
        v-model="email"
        density="compact"
        placeholder="이메일 입력"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <v-text-field
        v-model="password"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="비밀번호 입력"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>
      <v-text-field
        v-model="confirmPassword"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="비밀번호 확인"
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
        @click="handleSignup"
        :loading="loading"
      >
        Sign Up
      </v-btn>
      <v-card-text class="text-center">
        <router-link to="/login" class="text-blue text-decoration-none">
          이미 아이디가 있으신가요? 로그인하기
        </router-link>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const visible = ref(false);
const loading = ref(false);

// 입력 필드들의 ref 생성
const membername = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const handleSignup = async () => {
  // 비밀번호 확인
  if (password.value !== confirmPassword.value) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  try {
    loading.value = true;
    const response = await axios.post("http://localhost:8080/api/signup", {
      membername: membername.value,
      email: email.value,
      password: password.value,
    });

    if (response.status === 200) {
      alert("회원가입이 완료되었습니다.");
      router.push("/login"); // 로그인 페이지로 이동
    }
  } catch (error) {
    console.error("Signup failed:", error);
    alert("회원가입에 실패했습니다.");
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.signup-container {
  min-height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 10px;
}

.v-card {
  width: 100%;
  max-width: 448px;
}

@media (max-width: 600px) {
  .signup-container {
    padding: 16px;
  }
}
</style>
