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
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-btn class="mb-8" color="blue" size="large" variant="tonal" block>
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
<script></script>

<style scoped>
.login-container {
  min-height: calc(100vh - 64px); /* 앱바 높이만큼 빼줌 */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px; /* 모바일 대응을 위한 패딩 */
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
