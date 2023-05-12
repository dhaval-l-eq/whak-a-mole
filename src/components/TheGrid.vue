<template>
  <NewGame />
  <section>
    <div class="box" v-for="mole in moles" :key="mole.id">
      <TheBox v-if="mole.show" />
    </div>
  </section>
</template>

<script>
import TheBox from "./TheBox.vue";
import { molesData, moleShowInterval } from "@/helpers/config";
import NewGame from "./layout/NewGame.vue";
import { getRandom } from "@/helpers/helpers";

export default {
  data() {
    return {
      moles: molesData,
      moleToShow: null,
      showMoleTimeout: null,
      hideMoleTimeout: null,
    };
  },
  methods: {
    startNewGame() {
      clearTimeout(this.showMoleTimeout);
      clearTimeout(this.hideMoleTimeout);
      this.resetGame();
      this.moles.forEach((mole) => (mole.show = false));
      this.startInterval();
      this.startCountDown();
    },
    startInterval() {
      const interval = getRandom(1, 3);
      this.showMoleTimeout = setTimeout(() => {
        this.showRandomMole();
      }, interval * 1000);
      this.hideMoleTimeout = setTimeout(() => {
        this.hideMole();
        if (!this.gameOver) this.startInterval();
      }, interval * 1000 + moleShowInterval);
    },
    showRandomMole() {
      this.moleToShow = getRandom(0, 8);
      if (!this.gameOver) this.moles[this.moleToShow].show = true;
    },
    hideMole() {
      this.moles[this.moleToShow].show = false;
    },
  },
  provide() {
    return {
      startGame: this.startNewGame,
    };
  },
  components: { TheBox, NewGame },
  props: ["startCountDown", "resetGame", "gameOver"],
};
</script>

<style scoped>
section {
  display: grid;
  width: fit-content;
  margin: auto;
  border: 1px solid rgb(18, 18, 39);
  grid-template-columns: repeat(3, 1fr);
}

.box {
  width: 200px;
  height: 200px;
  border: 1px solid rgb(18, 18, 39);
}
</style>
