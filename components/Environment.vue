<script setup>
import { useGameStateStore } from "~~/stores/gamestatestore";

const gameStateStore = useGameStateStore();
const floor1 = ref();
const floor2 = ref();

setInterval(() => {
  if (gameStateStore.getGameState === 3 || 1) {
    gameStop();
  }
  if (gameStateStore.getGameState === 2) {
    startGame();
  }
}, 10);

function gameStop() {
  floor1.value.classList.add("animation-stop");
  floor2.value.classList.add("animation-stop");
}

function startGame() {
  floor1.value.classList.remove("animation-stop");
  floor2.value.classList.remove("animation-stop");
}
</script>

<template>
  <div class="environment">
    <div ref="floor1" class="floor-one"></div>
    <div ref="floor2" class="floor-two"></div>
  </div>
</template>

<style lang="postcss">
.floor-one {
  width: 100%;
  height: 13px;
  background-image: url(~/assets/img/floor.png);
  background-size: cover;
  background-repeat: repeat-x;
  position: absolute;
  bottom: 0;
  right: 0;
  animation: move-floor-one 5s infinite linear;
}

.floor-two {
  width: 100%;
  height: 13px;
  background-image: url(~/assets/img/floor.png);
  background-size: cover;
  background-repeat: repeat-x;
  position: absolute;
  bottom: 0;
  left: 100%;
  animation: move-floor-two 5s infinite linear;
}

.animation-stop {
  animation-play-state: paused;
}

@keyframes move-floor-one {
  0% {
    right: 0;
  }
  100% {
    right: 100%;
  }
}

@keyframes move-floor-two {
  0% {
    left: 100%;
  }
  100% {
    left: 0%;
  }
}
</style>
