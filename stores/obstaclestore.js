export const useObstaclesStore = defineStore("obstacles", {
  state: () => ({ obstacles: [], removeTimer: null }),
  getters: {
    getObstacles: (state) => state.obstacles,
  },
  actions: {
    addObstacle(obstacle) {
      this.obstacles.push(obstacle);
    },
    removeTimerTimeout() {
      this.removeTimer = null;
    },
    removeObstacles() {
      if (this.obstacles.length === 100 && this.removeTimer === null) {
        this.removeTimer = setTimeout(() => {
          this.obstacles = [];
          this.removeTimerTimeout();
        }, 5000);
      }
    },
  },
});

// obstacle -> obstacle height, obstacle width, position
