import { defineStore } from "pinia"
import { ref, computed } from "vue"

export const mainStore = defineStore('mainStore', () => {

    type Track = {
        title: String;
        artist: String;
        album: String;
        totalPlaytime: number;
        };

    const currentSpeed = ref<number>(0);
    const batteryPower = ref<number>(100);  
    //const batteryRounded = computed( () => Math.round(batteryPower.value) );   
    const accelerateFactor = ref<number>(0);
    const started = ref<boolean>(false);
    const currentTrack = ref<Track>({ title: "", artist: "", album: "", totalPlaytime: 0});
    //const targetSpeed = ref<number>(130);
    //const decelerate = ref<boolean>(false);
    
  
    return { currentSpeed, batteryPower, accelerateFactor, started, currentTrack } // targetSpeed,
  })