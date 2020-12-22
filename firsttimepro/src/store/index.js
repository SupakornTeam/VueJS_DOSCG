/**
 * @file 路径配置配置
 * @author lifanyu
 */

import Vue from "vue";
import Vuex from "vuex";

import app from "./module/app";
import page from "./module/page";
import user from "./module/user";
import nav from "./module/nav";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    app,
    page,
    user,
    nav
  }
});
