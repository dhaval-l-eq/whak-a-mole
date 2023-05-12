<template>
  <div>
    <button @click="startGame">New Game</button>
  </div>
</template>

<script>
export default {
  inject: ["startGame"],
};
</script>

<style scoped>
div {
  position: absolute;
  top: 50%;
  left: 10%;
  width: fit-content;
  padding: 2rem;
  background-color: rgb(22, 19, 41);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.219);
}

button {
  font-weight: var(--font-weight-6);
  font-size: var(--font-size-5);
  background: var(--gray-0);
  color: inherit;
  border: 0;
  padding: var(--size-4) var(--size-8);
  transform: translateY(calc(var(--y, 0) * 1%)) scale(var(--scale));
  transition: transform 0.1s;
  position: relative;
}

button:hover {
  cursor: pointer;
  --y: -10;
  --scale: 1.1;
  --border-scale: 1;
}

button:active {
  --y: 5%;
  --scale: 0.9;
  --border-scale: 0.9, 0.8;
}

button:before {
  content: "";
  position: absolute;
  inset: calc(var(--size-3) * -1);
  border: var(--size-2) solid var(--gray-0);
  transform: scale(var(--border-scale, 0));
  transition: transform 0.125s;

  --angle-one: 105deg;
  --angle-two: 290deg;
  --spread-one: 30deg;
  --spread-two: 40deg;
  --start-one: calc(var(--angle-one) - (var(--spread-one) * 0.5));
  --start-two: calc(var(--angle-two) - (var(--spread-two) * 0.5));
  --end-one: calc(var(--angle-one) + (var(--spread-one) * 0.5));
  --end-two: calc(var(--angle-two) + (var(--spread-two) * 0.5));

  mask: conic-gradient(
    transparent 0 var(--start-one),
    white var(--start-one) var(--end-one),
    transparent var(--end-one) var(--start-two),
    white var(--start-two) var(--end-two),
    transparent var(--end-two)
  );

  z-index: -1;
}
</style>
