import { createApp } from "vue";
import "./style.css";
import App from "./APP.vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// vuetify styles
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import vuetify from "./plugins/vuetify";

// router
import router from "./router";

const app = createApp(App);
const pinia = createPinia();

// Pinia persist 플러그인 추가
pinia.use(piniaPluginPersistedstate);

// createPinia() 대신 pinia 인스턴스 사용
app.use(pinia);
app.use(vuetify);
app.use(router);

app.mount("#app");
