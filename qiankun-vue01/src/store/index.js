import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    test: {},
  },
  mutations: {
    SET_TEST(state, val) {
      state.test = val;
    },
  },
  actions: {},
  modules: {},
});
