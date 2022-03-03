import { createStore } from "vuex";
import todoStore from "./todoStore";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  modules: {
    todoStore
  },
  plugins: [createPersistedState()]
});
