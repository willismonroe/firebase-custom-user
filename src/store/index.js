import Vue from "vue";
import Vuex from "vuex";

import { auth } from "@/firebase";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    SET_USER(state, data) {
      state.user = data;
    },
  },
  actions: {
    authCheck({ commit }) {
      auth.onAuthStateChanged((user) => {
        commit("SET_USER", user);
      });
    },
    logout() {
      auth.signOut();
    },
  },
});

export default store;
