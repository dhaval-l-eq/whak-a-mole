<template>
  <section>
    <BaseCard>
      <h2>Your Score:</h2>
      <p>{{ score }}</p>
    </BaseCard>
    <BaseCard>
      <h2>Time Left:</h2>
      <p>{{ timeLeft }} s</p>
    </BaseCard>
    <div v-if="gameOver" class="game-over">
      <div>
        <h2>Game Over!</h2>
        <p>Your Score: {{ score }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["timeLeft", "score", "gameOver"],
};
</script>

<style scoped>
section {
  width: 80%;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  margin: 2rem auto;
}

h2 {
  margin-bottom: 1rem;
}

p {
  font-size: 1.5rem;
  font-weight: 300;
  text-align: center;
}

.game-over {
  position: absolute;
  top: 50%;
  right: 10%;
  padding: 2rem;
  background-color: rgb(22, 19, 41);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.219);
  animation: showafter 0.4s forwards;
}

.game-over div {
  background-color: white;
  padding: 5px 1rem;
}

@keyframes showafter {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
