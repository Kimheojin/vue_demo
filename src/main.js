import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { createPinia } from "pinia";

//vuetify 관련 설정정
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

//router
import router from "./router";
const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

// 플러그인 추가
app.use(createPinia());
app.use(vuetify);
app.use(router);

app.mount("#app");
