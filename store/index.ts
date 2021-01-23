import Vue from 'vue';
import Vuex from 'vuex';
import { extractVuexModule, createProxy } from 'vuex-class-component';
import Counter from './counter';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(Counter)
  }
});

const createStore = () => {
  return store;
};

const vxm = {
  counter: createProxy(store, Counter)
};

export default createStore;
