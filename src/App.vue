<template>
  <TheHeader />
  <GameInfo :gameOver="gameOver" :timeLeft="timeLeft" :score="score" />
  <TheGrid
    :gameOver="gameOver"
    :resetGame="resetGameData"
    :startCountDown="startCountDown"
  />
</template>

<script>
import GameInfo from "./components/GameInfo.vue";
import TheGrid from "./components/TheGrid.vue";
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  data() {
    return {
      timeLeft: 60,
      score: 0,
      countdownInterval: null,
      gameOver: false,
      gameOverTimeout: null,
    };
  },
  methods: {
    startCountDown() {
      this.countdownInterval = setInterval(() => {
        this.timeLeft--;
      }, 1000);
      this.gameOverHandler();
    },
    gameOverHandler() {
      this.gameOverTimeout = setTimeout(() => {
        clearInterval(this.countdownInterval);
        this.gameOver = true;
      }, 60000);
    },
    resetGameData() {
      this.timeLeft = 60;
      this.score = 0;
      this.gameOver = false;
      clearInterval(this.countdownInterval);
      clearTimeout(this.gameOverTimeout);
    },
    updateScoreHandler() {
      this.score++;
    },
  },
  provide() {
    return {
      updateScore: this.updateScoreHandler,
    };
  },
  components: { TheHeader, GameInfo, TheGrid },
};
</script>

<style>
@import "https://unpkg.com/open-props";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
