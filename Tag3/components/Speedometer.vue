<template>
  <div class="speedometer">
    <slot :speed="props.speed" :maxSpeed="props.maxSpeed"></slot>
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

</style>