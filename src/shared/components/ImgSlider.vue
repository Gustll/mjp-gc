<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

const currentIndex = ref(0);

function next() {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
}

function prev() {
  currentIndex.value =
    currentIndex.value === 0 ? props.images.length - 1 : currentIndex.value - 1;
}
</script>

<template>
  <div class="slider-container">
    <img
      :src="`/assets/${images[currentIndex]}`"
      class="slider-image"
      alt="Slide"
    />

    <button class="slider-btn slider-left" @click="prev">&#10094;</button>

    <button class="slider-btn slider-right" @click="next">&#10095;</button>
  </div>
</template>
