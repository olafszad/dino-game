<script setup>
import { useGameStateStore } from "~~/stores/gamestatestore";
import { usePlayerStore } from "~~/stores/playerstore";

const playerStore = usePlayerStore();
const gameStateStore = useGameStateStore();
const dino = ref();

function jump() {
  if (gameStateStore.gameState === 2) {
    dino.value.classList.remove("walk");
    dino.value.classList.add("jump");
  }
}

function removeJumpClass() {
  dino.value.classList.add("walk");
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

    if (gameStateStore.gameState === 3) {
      dino.value.classList.remove("walk");
      dino.value.classList.add("dead");
      dino.value.classList.remove("jump");
    }

    if (gameStateStore.gameState === 1) {
      // dino.value.classList.remove("walk");
      // dino.value.classList.remove("jump");
    }

    if (gameStateStore.gameState === 2) {
      dino.value.classList.remove("dead");
      dino.value.classList.add("jump");
    }
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
  animation: jump 1s;
}

.walk {
  animation: walk 0.4s infinite linear;
}

.dead {
  background-image: url(~/assets/img/dino-dead.png) !important;
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

@keyframes walk {
  0% {
    background-image: url(~/assets/img/dino-walk-1.png);
  }
  49% {
    background-image: url(~/assets/img/dino-walk-1.png);
  }
  50% {
    background-image: url(~/assets/img/dino-walk-2.png);
  }
  100% {
    background-image: url(~/assets/img/dino-walk-2.png);
  }
}
</style>
