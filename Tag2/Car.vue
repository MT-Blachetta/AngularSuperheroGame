<template>
  <div id="car">
    <Speedometer :speed="speed" :maxSpeed="maxSpeed" accelerate="accelerate" />
    <MediaInformation />
    <BatteryLevel :battery="battery" />
    <button @click="accelerate">Accelerate</button>
    <button @click="useBreaks">Break</button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import BatteryLevel from './components/BatteryLevel.vue';
import MediaInformation from './components/MediaInformation.vue';
import Speedometer from './components/Speedometer.vue';

// Book {
//   title: 'Winds of Winter',
//   author: 'George R. R. Martin',
//   release: 'never',
// }

const speed = ref<number>(0);
const targetSpeed = ref<number>(0);
const maxSpeed = 180;
const battery = ref<number>(100);

// watch(speed, (newSpeed) => battery.value = Math.round(100 - (newSpeed / maxSpeed) * 100))

setInterval(() => {
  speed.value += (targetSpeed.value - speed.value) * 0.1;
  // Update battery
  battery.value -= speed.value * 0.005;
  battery.value = Math.max(0, battery.value);
  if (battery.value === 0) {
    targetSpeed.value = 0;
  }
}, 100)

function accelerate() {
  targetSpeed.value += 10
  targetSpeed.value = Math.min(maxSpeed, targetSpeed.value);
}

function useBreaks() {
  targetSpeed.value -= 10
  targetSpeed.value = Math.max(0, targetSpeed.value);
}


</script>

<style scoped>
#car {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>
