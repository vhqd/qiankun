import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    test: { a: 1 },
  },
  mutations: {
    SET_TEST(state, val) {
      state.test = val;
    },
  },
  actions: {},
  modules: {},
});
