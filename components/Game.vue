<script setup>
import { useObstaclesStore } from "~~/stores/obstaclestore";
import { usePlayerStore } from "~~/stores/playerstore";
import { useGameStateStore } from "~~/stores/gamestatestore";

const obstaclesStore = useObstaclesStore();
const playerStore = usePlayerStore();
const gameStateStore = useGameStateStore();
let gameWindowSize = 0;

setInterval(() => {
  checkPosibleCollisions();
}, 10);

onMounted(() => {
  gameWindowSize = document.querySelector(".game__window").clientWidth;
});

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

      // console.log(obstalePosition, dinoPosition, isCollision);

      // [.120%, .240%] Dino position
      // console.log(
      //   "Obstacle position",
      //   obstacleDistanceFromLeft,
      //   obstacleDistanceFromRight
      // );
      // console.log(
      //   "Dino position",
      //   dinoPositionInPercentagesLeft,
      //   dinoPositionInPercentagesRight
      // );

      // console.log(
      //   "Collision",
      //   dinoPositionInPercentagesLeft >=
      //     obstacleDistanceFromRight >=
      //     dinoPositionInPercentagesRight ||
      //     dinoPositionInPercentagesLeft >=
      //       obstacleDistanceFromLeft >=
      //       dinoPositionInPercentagesRight
      // );

      // console.log(
      //   (obstacleDistanceFromRight <= dinoPositionInPercentagesLeft &&
      //     obstacleDistanceFromRight >= dinoPositionInPercentagesRight) ||
      //     (obstacleDistanceFromLeft <= dinoPositionInPercentagesLeft &&
      //       obstacleDistanceFromLeft >= dinoPositionInPercentagesRight)
      // );

      return isCollision;
    }
    // obstacle.right <= dinoPositionInPercentagesLeft &&
    // obstacle.right >= dinoPositionInPercentagesRight &&
    // obstacle.right + (obstacle.width / (gameWindowSize + 2)) * 100 <=
    //   dinoPositionInPercentagesLeft &&
    // obstacle.right + (obstacle.width / (gameWindowSize + 2)) * 100 >=
    //   dinoPositionInPercentagesRight
  );

  if (filteredObstaclesRightAndLeft.length > 0) {
    if (
      filteredObstaclesRightAndLeft[0].class === "cactus" &&
      playerStore.playerPosition >= 198
    ) {
      gameStateStore.addGameState(0);
    } else if (
      filteredObstaclesRightAndLeft[0].class === "big-cactus" &&
      playerStore.playerPosition >= 186
    ) {
      gameStateStore.addGameState(0);
    } else if (
      filteredObstaclesRightAndLeft[0].class === "triple-cactus" &&
      playerStore.playerPosition >= 185
    ) {
      gameStateStore.addGameState(0);
    } else if (
      filteredObstaclesRightAndLeft[0].class === "bat" &&
      playerStore.playerPosition >= 203
    ) {
      gameStateStore.addGameState(0);
    }
  }
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
