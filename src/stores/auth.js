import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: null,
    user: {
      email: "",
      membername: "",
      authorityNames: [],
    },
  }),

  actions: {
    setToken(token) {
      this.token = token;
    },
    clearToken() {
      this.token = null;
    },
    setUserInfo(userInfo) {
      this.user = {
        ...this.user,
        email: userInfo.email,
        membername: userInfo.membername,
        authorityNames: userInfo.authorityNames,
      };
    },
    clearUserInfo() {
      this.user = {
        email: "",
        membername: "",
        authorityNames: [],
      };
    },
    logout() {
      this.clearToken();
      this.clearUserInfo();
    },
  },
  persist: true,
});
