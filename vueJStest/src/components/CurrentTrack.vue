<template>
    <div class="current-track">
      {{ trackInfo }}
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  //import { Track } from '../models/Track';

  type Track = {
  title: String;
  artist: String;
  album: String;
  totalPlaytime: number;
 };
  
  const props = defineProps<{
    track: Track
  }>()
  
    const trackInfo = computed(() => {
      const track = props.track;
      return `${track.artist} - ${track.album}` 
    })
  </script>
  
  <style scoped>
    .current-track {
      color: #222;
    }
  </style>