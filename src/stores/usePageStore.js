import { defineStore } from "pinia";

export const usePagerStore = defineStore("pageStore", {
  state: () => ({
    userInfo: {},
    test: 0,
  }),
  actions: {
    setUserInfo(userInfo) {
      this.userInfo = userInfo;
    },
  },
  persist: true,
});
