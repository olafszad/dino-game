<template>
  <div class="environment">
    <div class="floor-one"></div>
    <div class="floor-two"></div>
  </div>
</template>

<style lang="postcss">
.floor-one {
  width: 100%;
  height: 13px;
  background-image: url(~/assets/img/dino-sprites.png);
  background-position: left -261px top -50px;
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
  background-image: url(~/assets/img/dino-sprites.png);
  background-position: left -261px top -50px;
  background-size: cover;
  background-repeat: repeat-x;
  position: absolute;
  bottom: 0;
  left: 100%;
  animation: move-floor-two 5s infinite linear;
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
