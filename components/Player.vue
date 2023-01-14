<script setup>
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

    // if (cactusPosition >= 50 && cactusPosition <= 94 && dinoPosition > 194) {
    //   alert("hahah noob");
    // };
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
  height: 66px;
  background-image: url(~/assets/img/dino-sprites.png);
  background-position: left -855px top 16px;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 0;
  left: 50px;
}

.jump {
  animation: jump 0.5s;
}

@keyframes jump {
  0% {
    bottom: 0;
  }
  45% {
    bottom: 80px;
  }
  60% {
    bottom: 80px;
  }
  100% {
    bottom: 0;
  }
}
</style>
