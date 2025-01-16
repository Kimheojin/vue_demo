import { createApp } from "vue";
import "./style.css";
import App from "./APP.vue";
import { createPinia } from "pinia";

// vuetify styles
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import vuetify from "./plugins/vuetify";

// router
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(vuetify);
app.use(router);

app.mount("#app");
