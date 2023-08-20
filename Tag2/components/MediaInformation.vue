<template>
  <div>
    {{ detailedTrackInfo }}
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

  const artist = ref<string>('Sabaton');
  const title = ref<string>('White Death');
  const album = ref<string>('Coat of arms');
  const playtime = ref<number>(13);
  const totalPlaytime = ref<number>(250);
  const trackInfo = computed(() => {
    return `${artist.value} - ${album.value}` 
  })
  const detailedTrackInfo = computed(() => {
    return trackInfo.value + "-" + playtime.value
  })

  setTimeout(() => artist.value = 'Britney Spears', 3000);
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