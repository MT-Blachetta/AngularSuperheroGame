<template>
  <div class="track-list">
    <input v-model="filter" type="text">
    <button @click="filter = ''">Reset</button>
    <ul>
      <li v-for="track in filteredTracks">
        {{ trackInfo(track) }}<span class="artist">{{ track.artist }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { Track } from '../models/Track';

const props = defineProps<{
  tracks: Track[]
}>()

const filteredTracks = ref(props.tracks);
const filter = ref("");

watch(filter, filterTracks);

function trackInfo(track: Track) {
  return `${track.title} - ${track.album}`
}

function filterTracks(input: string) {
  if (input.length > 0) {
    return filteredTracks.value = filteredTracks.value.filter((track) => track.title.includes(input))
  }
  filteredTracks.value = props.tracks;
}

</script>

<style scoped>
  .track-list {
    color: #222;
    font-size: 0.9rem;
    overflow-y: scroll;
    width: 100%;
  }

  input {
    display: block;
    width: 100%;
    padding: 5px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #444;
    cursor: pointer;
    padding: 5px;

    &:hover {
      background: #fff2;
    }
  }

  .artist {
    color: #444;
    font-size: 0.8rem;
    display: block;
  }
</style>