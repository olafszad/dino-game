<script setup></script>

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

  &__window-container {
    position: relative;
    height: 300px;
    border: solid 1px;
    border-color: red;
  }

  &__window {
    overflow: hidden;
  }
}
</style>
