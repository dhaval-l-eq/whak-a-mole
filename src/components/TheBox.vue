<template>
  <div>
    <img
      @mousedown="updateScore"
      v-show="showImage[1]"
      src="./../assets/mole1.jpg"
      alt="mole"
    />
    <img
      @mousedown="updateScore"
      v-show="showImage[2]"
      src="./../assets/mole2.jpg"
      alt="mole"
    />
    <img
      @mousedown="updateScore"
      v-show="showImage[3]"
      src="./../assets/mole3.jpg"
      alt="mole"
    />
    <img
      @mousedown="updateScore"
      v-show="showImage[4]"
      src="./../assets/mole4.jpg"
      alt="mole"
    />
    <img
      @mousedown="updateScore"
      v-show="showImage[5]"
      src="./../assets/mole5.jpg"
      alt="mole"
    />
  </div>
</template>

<script>
import { getRandom } from "@/helpers/helpers";

export default {
  data() {
    return {
      showImage: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
      },
    };
  },
  methods: {
    toggleVisibleImage() {
      const imgIndex = getRandom(1, 5);
      this.showImage[imgIndex] = true;
    },
  },
  inject: ["updateScore"],
  mounted() {
    this.toggleVisibleImage();
  },
};
</script>

<style scoped>
img {
  width: 100%;
  transition: all 0.1s;
}

img:active {
  filter: brightness(95%);
  transform: scale(0.96);
}
</style>
