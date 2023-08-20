<script setup lang="ts">
import { ref , computed } from 'vue';
//import CurrentTrack from './CurrentTrack.vue';
import TrackList from './TrackList.vue';
//import { ActiveTrack, Track } from '../models/Track.ts';

const props = defineProps({
  viewportWidth: {type: Number,
  default: 800
  },
  viewportHeight: {type: Number, 
      default: 600}
});

const mediaWidth = computed( () => (props.viewportWidth*0.2)-2 );

// :style="{'--media-width':`${mediaWidth}px` '--media-height':`${props.viewPortHeight}px` }"

type Track = {
title: String;
artist: String;
album: String;
totalPlaytime: number;
};


  //const view = ref(0);

  const tracks = ref<Track[]>([
  {
    title: 'White Death',
    artist: 'Sabaton',
    album: 'Coat of arms',
    totalPlaytime: 250
  },
  {
    title: 'Ghost Divison',
    artist: 'Sabaton',
    album: 'The Art of War',
    totalPlaytime: 250
  },
  {
    title: 'Winged Husars',
    artist: 'Sabaton',
    album: 'The Last Stand',
    totalPlaytime: 250
  },
  {
    title: '40:1',
    artist: 'Sabaton',
    album: 'The Art of War',
    totalPlaytime: 250
  }
  ])
  //const activeTrack = ref<ActiveTrack>({...tracks.value[0], playtime: 0});

 // const trackInfo = computed(() => {
 //     const track = props.track;
   //   return `${track.artist} - ${track.album}` 
    //})

  // onMounted(() => {
  //   activeTrack.value = 
  // })
</script>

<template>
    <div class="media" :style="{'--media-width':`${mediaWidth}px`, '--media-height':`${props.viewportHeight}px` }">
      <TrackList :tracks="tracks" />
      <!--ul class="pagination">
        <li><button @click="view = Math.abs(view - 1) % 2">Back</button></li>
        <li><button @click="view = (view + 1) % 2">Next</button></li>
      </ul-->
    </div>
  </template>
  
  
  <style scoped>
    .media {
      background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(125,125,133,1) 60%, rgba(255,255,255,1) 100%);
      /*border: 1px solid #fff;*/
      /*border-radius: 2px;*/
      margin: 0px 0px 0px 0px;
      border: 0px 0px 0px 0px;
      padding: 0px 0px 0px 0px;
      width: var(--media-width);
      height: var(--media-height);
      display: flex;
      place-content: center;
      align-items: center;
      font-size: 1rem;
      flex-direction: column;
    }
  
    .pagination {
      list-style: none;
      display: flex;
      margin: 0;
      padding: 0;
      margin-top: auto;
    }
  </style>