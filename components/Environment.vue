<script setup>
import { useGameStateStore } from "~~/stores/gamestatestore";

const gameStateStore = useGameStateStore();
const floor1 = ref();
const floor2 = ref();
const cloud1 = ref();
const cloud2 = ref();
const cloud3 = ref();
const cloud4 = ref();
const cloud5 = ref();

const clouds = [
  "cloud-one",
  "cloud-two",
  "cloud-three",
  "cloud-four",
  "cloud-five",
];
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
  cloud1.value.classList.add("animation-stop");
  cloud2.value.classList.add("animation-stop");
  cloud3.value.classList.add("animation-stop");
  cloud4.value.classList.add("animation-stop");
  cloud5.value.classList.add("animation-stop");
}

function startGame() {
  floor1.value.classList.remove("animation-stop");
  floor2.value.classList.remove("animation-stop");
  cloud1.value.classList.remove("animation-stop");
  cloud2.value.classList.remove("animation-stop");
  cloud3.value.classList.remove("animation-stop");
  cloud4.value.classList.remove("animation-stop");
  cloud5.value.classList.remove("animation-stop");
}

function ranodmClouds() {
  const randomCloudsId = Math.floor(Math.random() * clouds.length);
}
</script>

<template>
  <div class="environment">
    <div ref="cloud1" class="cloud-one"></div>
    <div ref="cloud2" class="cloud-two"></div>
    <div ref="cloud3" class="cloud-three"></div>
    <div ref="cloud4" class="cloud-four"></div>
    <div ref="cloud5" class="cloud-five"></div>

    <div ref="floor1" class="floor-one"></div>
    <div ref="floor2" class="floor-two"></div>
  </div>
</template>

<style lang="postcss">
.cloud-one {
  width: 64px;
  height: 20px;
  background-image: url(~/assets/img/cloud.png);
  background-size: cover;
  background-repeat: repeat-x;
  position: absolute;
  bottom: 78%;
  right: -10%;
  animation: move-cloud-one 6s infinite linear;
}
@keyframes move-cloud-one {
  0% {
    right: -20%;
  }
  100% {
    right: 100%;
  }
}

.cloud-two {
  width: 64px;
  height: 20px;
  background-image: url(~/assets/img/cloud.png);
  background-size: cover;
  background-repeat: repeat-x;
  position: absolute;
  bottom: 75%;
  right: -10%;
  animation: move-cloud-two 7s infinite linear;
}

@keyframes move-cloud-two {
  0% {
    right: -40%;
  }
  100% {
    right: 100%;
  }
}

.cloud-three {
  width: 64px;
  height: 20px;
  background-image: url(~/assets/img/cloud.png);
  background-size: cover;
  background-repeat: repeat-x;
  position: absolute;
  bottom: 92%;
  right: -10%;
  animation: move-cloud-three 8s infinite linear;
}

@keyframes move-cloud-three {
  0% {
    right: -60%;
  }
  100% {
    right: 100%;
  }
}

.cloud-four {
  width: 64px;
  height: 20px;
  background-image: url(~/assets/img/cloud.png);
  background-size: cover;
  background-repeat: repeat-x;
  position: absolute;
  bottom: 80%;
  right: -10%;
  animation: move-cloud-four 9s infinite linear;
}

@keyframes move-cloud-four {
  0% {
    right: -80%;
  }
  100% {
    right: 100%;
  }
}

.cloud-five {
  width: 64px;
  height: 20px;
  background-image: url(~/assets/img/cloud.png);
  background-size: cover;
  background-repeat: repeat-x;
  position: absolute;
  bottom: 90%;
  right: -10%;
  animation: move-cloud-five 10s infinite linear;
}

@keyframes move-cloud-five {
  0% {
    right: -100%;
  }
  100% {
    right: 100%;
  }
}

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

@keyframes move-floor-two {
  0% {
    left: 100%;
  }
  100% {
    left: 0%;
  }
}

@keyframes move-floor-one {
  0% {
    right: 0;
  }
  100% {
    right: 100%;
  }
}
</style>
