// import { defineStore } from 'pinia'

export const useObstaclePositionStore = defineStore("obstaclePosition", {
  state: () => ({ count: 0 }),
  getters: {
    getCount: (state) => state.count,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
