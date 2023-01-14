<script setup>
import { useObstaclePositionStore } from "@/stores/gamestore";

const obstaclePositionStore = useObstaclePositionStore();
const cactus = ref();

onMounted(() => {
  setInterval(() => {
    let cactusPosition = parseInt(
      window.getComputedStyle(cactus.value).getPropertyValue("left")
    );
    console.log(obstaclePositionStore.getCount);
  }, 10);
});
</script>

<template>
  <div class="obstacles">
    <div ref="cactus" id="cactus"></div>
    <div id="big-cactus"></div>
    <div id="triple-cactus"></div>
    <div id="bat"></div>
  </div>
</template>

<style lang="postcss">
#cactus {
  width: 17px;
  height: 66px;
  background-image: url(~/assets/img/dino-sprites.png);
  background-position: left -261px top 28px;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 0;
  right: 0;
  animation: move-obstacle 5s infinite linear;
}

#big-cactus {
  width: 28px;
  height: 66px;
  background-image: url(~/assets/img/dino-sprites.png);
  background-position: left -331px top 13px;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  right: 0;
  bottom: 0;
  animation: move-obstacle 5s infinite linear;
}

#triple-cactus {
  width: 53px;
  height: 66px;
  background-image: url(~/assets/img/dino-sprites.png);
  background-position: left -433px top 13px;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 0;
  right: 0;
  animation: move-obstacle 5s infinite linear;
}

#bat {
  width: 48px;
  height: 66px;
  background-image: url(~/assets/img/dino-sprites.png);
  background-position: left -132px top 10px;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 0;
  right: 0;
  animation: move-obstacle 5s infinite linear;
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
