import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default createVuetify({
  // 다크모드
  components,
  directives,
  theme: {
    defaultTheme: "dark",
  },
});
