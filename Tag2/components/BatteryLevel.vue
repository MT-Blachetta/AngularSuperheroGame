<template>
  <div>
    {{ battery }}%
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  battery: number
}>()

const battery = computed(() => Math.round(props.battery))

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
  }
</style>