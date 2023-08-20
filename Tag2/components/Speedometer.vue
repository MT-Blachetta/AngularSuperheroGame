<template>
  <div>
    <progress :value="props.speed" :max="props.maxSpeed" />
    {{ Math.round(props.speed) }}
  </div>
</template>

<script setup lang="ts">
type Book = {
  title: string;
  author: string;
  release: string;
}

interface Props {
  speed: number;
  maxSpeed?: number;
  book?: Book;
}

const props = withDefaults(defineProps<Props>(), {
  maxSpeed: 100,
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
    font-size: 1rem;
    text-align: right;
  }
</style>