<script setup>
import { useObstaclesStore } from "~~/stores/obstaclestore";
import { usePlayerStore } from "~~/stores/playerstore";
import { useGameStateStore } from "~~/stores/gamestatestore";

const obstaclesStore = useObstaclesStore();
const playerStore = usePlayerStore();
const gameStateStore = useGameStateStore();

setInterval(() => {
  checkPosibleCollisions();
}, 10);

function checkPosibleCollisions() {
  const filteredObstacles = obstaclesStore.obstacles.filter(
    (obstacle) => obstacle.right <= 870 && obstacle.right >= 820
  );

  if (filteredObstacles.length > 0) {
    if (
      filteredObstacles[0].class === "cactus" &&
      playerStore.playerPosition >= 198
    ) {
      gameStateStore.addGameState(0);
    } else if (
      filteredObstacles[0].class === "big-cactus" &&
      playerStore.playerPosition >= 186
    ) {
      gameStateStore.addGameState(0);
    } else if (
      filteredObstacles[0].class === "triple-cactus" &&
      playerStore.playerPosition >= 185
    ) {
      gameStateStore.addGameState(0);
    } else if (
      filteredObstacles[0].class === "bat" &&
      playerStore.playerPosition >= 203
    ) {
      gameStateStore.addGameState(0);
    }
  }

  return filteredObstacles;
}
</script>

<template>
  <div class="game">
    <div class="game__window-container container">
      <div class="game__window">
        <Player></Player>
        <Obstacles></Obstacles>
        <Environment></Environment>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.game {
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: rgb(68, 68, 68);

  &__window-container {
    position: relative;
    height: 300px;
    border: solid 1px;
    border-color: red;
    overflow: hidden;
  }

  &__window {
    overflow: hidden;
  }
}
</style>
