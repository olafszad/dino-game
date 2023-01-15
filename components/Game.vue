<script setup>
import { useObstaclesStore } from "~~/stores/obstaclestore";
import { usePlayerStore } from "~~/stores/playerstore";
import { useGameStateStore } from "~~/stores/gamestatestore";

const obstaclesStore = useObstaclesStore();
const playerStore = usePlayerStore();
const gameStateStore = useGameStateStore();
const btn = ref();

let gameWindowSize = 0;

setInterval(() => {
  checkPosibleCollisions();
}, 10);

onMounted(() => {
  gameWindowSize = document.querySelector(".game__window").clientWidth;

  setInterval(() => {
    if (gameStateStore.gameState === 2) {
      btn.value.classList.add("hide-btn");
    }

    if (gameStateStore.gameState === 3) {
      btn.value.classList.remove("hide-btn");
    }
  }, 10);
});

function startGame() {
  console.log("1");
  gameStateStore.addGameState(2);
  obstaclesStore.resetGame();
  console.log("2");
}

function checkPosibleCollisions() {
  let dinoPositionInPercentagesLeft = 100 - (50 / (gameWindowSize + 2)) * 100;
  let dinoPositionInPercentagesRight = 100 - (94 / (gameWindowSize + 2)) * 100;

  const filteredObstaclesRightAndLeft = obstaclesStore.obstacles.filter(
    (obstacle) => {
      const obstacleDistanceFromRight = obstacle.right;
      const obstacleDistanceFromLeft =
        obstacle.right + (obstacle.width / (gameWindowSize + 2)) * 100;

      const obstalePosition = {
        obstacleDistanceFromLeft,
        obstacleDistanceFromRight,
      };

      const dinoPosition = {
        dinoPositionInPercentagesLeft,
        dinoPositionInPercentagesRight,
      };

      const isCollision =
        (obstacleDistanceFromRight <= dinoPositionInPercentagesLeft &&
          obstacleDistanceFromRight >= dinoPositionInPercentagesRight) ||
        (obstacleDistanceFromLeft <= dinoPositionInPercentagesLeft &&
          obstacleDistanceFromLeft >= dinoPositionInPercentagesRight);

      return isCollision;
    }
  );

  if (filteredObstaclesRightAndLeft.length > 0) {
    if (
      filteredObstaclesRightAndLeft[0].class === "cactus" &&
      playerStore.playerPosition >= 198
    ) {
      gameStateStore.addGameState(3);
    } else if (
      filteredObstaclesRightAndLeft[0].class === "big-cactus" &&
      playerStore.playerPosition >= 186
    ) {
      gameStateStore.addGameState(3);
    } else if (
      filteredObstaclesRightAndLeft[0].class === "triple-cactus" &&
      playerStore.playerPosition >= 194
    ) {
      gameStateStore.addGameState(3);
    } else if (
      filteredObstaclesRightAndLeft[0].class === "bat" &&
      playerStore.playerPosition >= 203
    ) {
      gameStateStore.addGameState(3);
    }
  }
}
</script>

<template>
  <div class="game">
    <div class="game_titie">Dino Game</div>
    <button ref="btn" class="game__btn-start" @click="startGame">Start</button>
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
  flex-direction: column;

  &__btn-start {
    border: 0px;
    background-color: black;
    border-radius: 3px;
    position: absolute;
    color: white;
    cursor: pointer;
    z-index: 2;
    transition: 0.3 s;

    &:hover {
      background-color: white;
      border: 1px solid black;
      color: black;
    }
  }

  &__window-container {
    position: relative;
    height: 300px;
    border: solid 1px;
    overflow: hidden;
  }

  &__window {
    overflow: hidden;
  }

  &_titie {
    font-size: 30px;
  }
}

.hide-btn {
  display: none;
}
</style>
