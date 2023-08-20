<template>
  <div id="car">
    <Speedometer :speed="speed" :maxSpeed="maxSpeed" v-slot="slotProps">
      <AnalogSpeedIndicator :speed=slotProps.speed />
      <!-- <DigitalSpeedIndicator :speed=slotProps.speed :maxSpeed="slotProps.maxSpeed" /> -->
    </Speedometer>
    <MediaInformation />
    <BatteryLevel :battery="battery" />
    <button @mousedown="startAccelerate" @mouseup="stopAccelerate">Accelerate</button>
    <button @mousedown="startBreaking" @mouseup="stopBreaking">Break</button>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, onUnmounted, onUpdated, ref, watch } from 'vue';
import BatteryLevel from './components/BatteryLevel.vue';
import MediaInformation from './components/MediaInformation.vue';
import Speedometer from './components/Speedometer.vue';
// import DigitalSpeedIndicator from './components/indicators/DigitalSpeedIndicator.vue';
import AnalogSpeedIndicator from './components/indicators/AnalogSpeedIndicator.vue';
import DigitalSpeedIndicator from './components/indicators/DigitalSpeedIndicator.vue';

// Book {
//   title: 'Winds of Winter',
//   author: 'George R. R. Martin',
//   release: 'never',
// }

interface CarInfo {
  speed: number,
  maxSpeed: number,
  accelerate: () => void
}

const speed = ref<number>(0);
const targetSpeed = ref<number>(0);
const maxSpeed = 180;
const battery = ref<number>(100);
let drainInterval: number;
let accelerateInterval: number;
let breakInterval: number;

// watch(speed, (newSpeed) => battery.value = Math.round(100 - (newSpeed / maxSpeed) * 100))
onMounted(() => {
  drainInterval = setInterval(drainBattery, 100)
})

onUnmounted(() => {
  clearInterval(drainInterval);
  clearInterval(accelerateInterval);
  clearInterval(breakInterval);
})

function drainBattery() {
  speed.value += (targetSpeed.value - speed.value) * 0.1;
  speed.value = Math.round(speed.value * 100) / 100;
  // Update battery
  battery.value -= speed.value * 0.005;
  battery.value = Math.max(0, battery.value);
  if (battery.value === 0) {
    targetSpeed.value = 0;
  }
}

function startAccelerate() {
  accelerateInterval = setInterval(accelerate, 100);
}

function stopAccelerate() {
  clearInterval(accelerateInterval);
}

function accelerate() {
  targetSpeed.value += 3
  targetSpeed.value = Math.min(maxSpeed, targetSpeed.value);
}

function startBreaking() {
  breakInterval = setInterval(useBreaks, 100);
}

function stopBreaking() {
  clearInterval(breakInterval);
}

function useBreaks() {
  targetSpeed.value -= 6
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
