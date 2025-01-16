import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default createVuetify({
  // 다크모드
  //https://vuetifyjs.com/en/features/theme/#javascript
  components,
  directives,
  theme: {
    defaultTheme: "dark",
  },
});
