/* eslint-disable no-param-reassign */
import services from "@/service";

export default {
  state: {
    menuList: [
      {
        label: "系统管理",
        path: "/home"
      }
    ],
    dynamicMenuList: [],
    breadCrumbList: []
  },
  mutations: {
    setNavDynamicMenuList(state, menuList) {
      state.dynamicMenuList = menuList;
      state.menuList = [...state.menuList, ...menuList];
    },

    breadCrumbList(state, breadCrumbList) {
      state.breadCrumbList = breadCrumbList;
    }
  },
  actions: {
    getDynamicMenuList({ commit }) {
      return new Promise((resolve, reject) => {
        try {
          services
            .getMenuList()
            .then(({ errno, data }) => {
              if (+errno === 200 || +errno === 0) {
                commit("setNavDynamicMenuList", data);
                resolve(true);
              } else {
                reject(new Error(`response errno is: ${errno}`));
              }
            })
            .catch(err => {
              reject(err);
            });
        } catch (error) {
          reject(error);
        }
      });
    }
  }
};
