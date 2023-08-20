<template>
  <div>
    {{ battery }}%
    <div v-if="batteryIsLow">
      <div v-show="batteryIsEmpty || blink" class="low-battery"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';

const props = defineProps<{
  battery: number
}>()

const batteryIsLow = ref(false);
const batteryIsEmpty = ref(false);
const blink = ref(false);
let batteryInterval: number;

const battery = computed(() => Math.round(props.battery));

onMounted(() => {
  batteryInterval = setInterval(() => blink.value = !blink.value, 500);
});

onUnmounted(() => {
  clearInterval(batteryInterval);
});

watch(() => props.battery, () => {
  if (props.battery <= 20) {
    batteryIsLow.value = true;
  }
  if (props.battery === 0) {
    batteryIsEmpty.value = true;
  }
})

</script>

<style scoped>
  div {
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(125,125,133,1) 60%, rgba(255,255,255,1) 100%);
    border: 1px solid #fff;
    border-radius: 2px;
    width: 200px;
    height: 200px;
    display: flex;
    place-content: center;
    align-items: center;
    font-size: 3rem;
    text-align: right;
    flex-direction: column;
  }

  .low-battery {
    background: radial-gradient(circle, rgba(223,27,27,1) 0%, rgba(112,24,24,1) 100%);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    position: relative;
    overflow: hidden;

    &::after {
      content: '';
      display: block;
      background: #ffffff1d;
      width: 100%;
      height: 50%;
      position: absolute;
      top: 0;
    }
  }
</style>