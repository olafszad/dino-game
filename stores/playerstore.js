export const usePlayerStore = defineStore("playerPosition", {
  state: () => ({ playerPosition: null }),
  getters: {
    getPlayerPosition: (state) => state.playerPosition,
  },
  actions: {
    addPlayerPosition(dinoPosition) {
      this.playerPosition = dinoPosition;
    },
  },
});
