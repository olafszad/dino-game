<script setup>
import { useObstaclesStore } from "~~/stores/obstaclestore";
import { v4 as uuidv4 } from "uuid";
import { useGameStateStore } from "~~/stores/gamestatestore";

const obstaclesStore = useObstaclesStore();
const gameStateStore = useGameStateStore();

const obstacles = ["cactus", "big-cactus", "triple-cactus", "bat"];
const obstaclesSize = [24, 34, 69, 40];

setInterval(() => {
  if (
    obstaclesStore.obstacles.length !== 100 &&
    gameStateStore.getGameState !== 3 &&
    gameStateStore.getGameState !== 1
  ) {
    addObstacle();
  }
}, Math.floor(Math.random() * (4000 - 1000) + 1000));

function addObstacle() {
  const randomObstacleId = Math.floor(Math.random() * obstacles.length);

  const obstacle = {
    uuid: uuidv4(),
    class: obstacles[randomObstacleId],
    right: 0,
    width: obstaclesSize[randomObstacleId],
    // speed: 2.36,
    speed: 0.2,
  };

  const rightMovementInterval = setInterval(() => {
    obstacle.right += obstacle.speed;
  }, 10);

  setTimeout(() => {
    obstaclesStore.removeObstacles();
    clearInterval(rightMovementInterval);
  }, 5000);

  obstaclesStore.addObstacle(obstacle);
}
</script>

<template>
  <div class="obstacles">
    <div
      v-for="obstacle in obstaclesStore.obstacles"
      :class="[
        obstacle.class,
        {
          'animation-stop': gameStateStore.gameState === 3,
          'bat-fly': obstacle.class === 'bat',
        },
      ]"
    >
      {{ obstacle.id }}
    </div>
  </div>
</template>

<style lang="postcss">
.cactus {
  width: 24px;
  height: 52px;
  background-image: url(~/assets/img/cactus-small.png);
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 0;
  right: 0;
  animation: move-obstacle 5s forwards linear;
  z-index: 1;
}

.big-cactus {
  width: 34px;
  height: 64px;
  background-image: url(~/assets/img/cactus-big.png);
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  right: 0;
  bottom: 0;
  animation: move-obstacle 5s forwards linear;
  z-index: 1;
}

.triple-cactus {
  width: 69px;
  height: 55px;
  background-image: url(~/assets/img/triple-cactus.png);
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 1px;
  right: 0;
  animation: move-obstacle 5s forwards linear;
  z-index: 1;
}

.bat {
  width: 40px;
  height: 47px;
  background-image: url(~/assets/img/bat-wing-down.png);
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 0;
  right: 0;
  animation: move-obstacle 5s forwards linear;
  z-index: 1;
}

.bat-fly {
  animation: bat-fly 5s infinite linear;
}

@keyframes bat-fly {
  0% {
    background-image: url(~/assets/img/bat-wing-down.png);
    right: 0;
  }
  10% {
    background-image: url(~/assets/img/bat-wing-up.png);
  }
  20% {
    background-image: url(~/assets/img/bat-wing-down.png);
  }
  30% {
    background-image: url(~/assets/img/bat-wing-up.png);
  }
  40% {
    background-image: url(~/assets/img/bat-wing-down.png);
  }
  50% {
    background-image: url(~/assets/img/bat-wing-up.png);
  }
  60% {
    background-image: url(~/assets/img/bat-wing-down.png);
  }
  70% {
    background-image: url(~/assets/img/bat-wing-up.png);
  }
  80% {
    background-image: url(~/assets/img/bat-wing-down.png);
  }
  90% {
    background-image: url(~/assets/img/bat-wing-up.png);
  }
  100% {
    background-image: url(~/assets/img/bat-wing-down.png);
    right: 100%;
  }
}

.animation-stop {
  animation-play-state: paused;
}

@keyframes move-obstacle {
  0% {
    right: 0;
  }
  100% {
    right: 100%;
  }
}
</style>
