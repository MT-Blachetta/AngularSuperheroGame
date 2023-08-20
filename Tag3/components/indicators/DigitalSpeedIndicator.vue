<template>
  <div class="indicator">
    <progress :value="props.speed" :max="props.maxSpeed" />
    <p>{{ Math.round(props.speed) }} km/h</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  speed: number;
  maxSpeed: number;
}

const props = defineProps<Props>();

</script>

<style scoped>
  .indicator {
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(125,125,133,1) 60%, rgba(255,255,255,1) 100%);
    border: 1px solid #fff;
    border-radius: 2px;
    width: 200px;
    height: 200px;
    display: flex;
    place-content: center;
    align-items: center;
    font-size: 1rem;
    text-align: right;
  }

  p {
    text-align: center;
  }
</style>