export const useGameStateStore = defineStore("gameState", {
  state: () => ({ gameState: 1 }),
  getters: {
    getGameState: (state) => state.gameState,
  },
  actions: {
    addGameState(gameOver) {
      this.gameState = gameOver;
    },
  },
});
