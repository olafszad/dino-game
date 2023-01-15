<script setup>
import { usePlayerStore } from "~~/stores/playerstore";

const playerStore = usePlayerStore();
const dino = ref();

function jump() {
  dino.value.classList.add("jump");
}

function removeJumpClass() {
  dino.value.classList.remove("jump");
}

onMounted(() => {
  document.addEventListener("keydown", () => {
    jump();
  });
  document.addEventListener("animationend", () => {
    removeJumpClass();
  });

  setInterval(() => {
    let dinoPosition = parseInt(
      window.getComputedStyle(dino.value).getPropertyValue("top")
    );
    playerStore.addPlayerPosition(dinoPosition);
  }, 10);
});
</script>

<template>
  <div class="player">
    <div ref="dino" id="dino"></div>
  </div>
</template>

<style lang="postcss">
#dino {
  width: 44px;
  height: 48px;
  background-image: url(~/assets/img/dino.png);
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 0;
  left: 50px;
  z-index: 2;
}

.jump {
  animation: jump 0.8s;
}

@keyframes jump {
  0% {
    bottom: 0;
  }
  50% {
    bottom: 124px;
  }
  60% {
    bottom: 124px;
  }
  100% {
    bottom: 0;
  }
}
</style>
