import Vue from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.css";
import "jquery/src/jquery.js";
import "popper.js/dist/popper";
import "bootstrap/dist/js/bootstrap";
import "firebaseui/dist/firebaseui";

Vue.config.productionTip = false;

import router from "./router";
import store from "./store";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
