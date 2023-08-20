<template>
  <div class="analog">
    <div class="lines">
      <div class="line" style="transform: rotate(30deg)"></div>
      <div class="line" style="transform: rotate(60deg)"></div>
      <div class="line" style="transform: rotate(90deg)"></div>
      <div class="line" style="transform: rotate(120deg)"></div>
      <div class="line" style="transform: rotate(150deg)"></div>
      <div class="line" style="transform: rotate(180deg)"></div>
      <div class="line" style="transform: rotate(210deg)"></div>
      <div class="line" style="transform: rotate(240deg)"></div>
      <div class="line" style="transform: rotate(270deg)"></div>
      <div class="line" style="transform: rotate(300deg)"></div>
      <div class="line" style="transform: rotate(330deg)"></div>
    </div>
    <div class="indicator" :style="{ transform: `rotate(${rotation}deg)` }"></div>
    <div class="digital">
      <span class="speed">{{ Math.round(props.speed) }}</span>
      <span class="unit">km/h</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';

interface Props {
  speed: number;
}

const props = defineProps<Props>();

const rotation = computed(() => props.speed * 1.6 + 30);

</script>

<style scoped>
.analog {
  background: radial-gradient(circle, rgba(63, 63, 86, 1) 0%, rgba(19, 18, 34, 1) 100%);
  width: 200px;
  height: 200px;
  border: 3px solid #fff;
  border-radius: 50%;
  position: relative;
  box-shadow: 2px 2px 10px 2px #000a;
}

.digital {
  background: radial-gradient(circle, #4d4d4d 0%, #000 100%);
  width: 50%;
  height: 50%;
  position: absolute;
  left: 25%;
  top: 25%;
  border: 2px solid #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.speed {
  font-size: 30px;
  line-height: 1;
}

.unit {
  font-size: 10px;
  color: #888;
}

.indicator {
  border-bottom: 5px solid #C1B3B3;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -10px;
  transform: rotate(180deg);
  transition: transform 0.1s ease-in-out;

  &::before {
    content: '';
    display: block;
    border-bottom: 80px solid transparent;
    border-right: 10px solid #FCDA9D;
    position: absolute;
    left: -10px;
    top: 5px;
  }

  &::after {
    content: '';
    display: block;
    border-bottom: 80px solid transparent;
    border-left: 10px solid #E99D27;
    position: absolute;
    top: 5px;
  }
}

.line {

  position: absolute;
  left: 50%;
  top: 50%;
  padding-top: 88px;
  margin-left: -2px;
  transform-origin: top center;

  &::after {
    content: '';
    display: block;
    width: 3px;
    height: 10px;
    background: #fff;
  }
}
</style>