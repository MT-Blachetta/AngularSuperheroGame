<script setup lang="ts">
import { ref, computed, watch, ComputedRef } from 'vue'
import speedometer from './components/Speedometer.vue';
//import batterymeter from './components/batterymeter.vue';
import tickedbattery from './components/tickedbattery.vue';
import textinfo from './components/textinfo.vue';
import media from './components/mediaDisplay.vue';
//import panel from './components/panel.vue';
import pedals from './components/pedals.vue';
import { mainStore } from './stores/mainStore.ts'
import { storeToRefs } from 'pinia';

//view parameter
/*
startTimer() {
      if (this.timer) return;

      this.timer = setInterval(() => {
        this.seconds++;
        if (this.seconds >= 60) {
          this.minutes++;
          this.seconds = 0;
        }

        // Reset at 99:59
        if (this.minutes >= 100) {
          this.resetTimer();
        }
      }, 1000);
    }

    resetTimer() {
      this.minutes = 0;
      this.seconds = 0;
      clearInterval(this.timer);
      this.timer = null;
      this.startTimer(); // restart the timer
    }

*/

type sizing = {
  top: number;
  left: number;
  width: number;
  height: number;  
}

const imageSize: sizing = {
  top: 0,
  left: 0,
  width: 1600,
  height: 1066,

}

const batteryIcon: sizing = {
        top: 590,
        left: 1210,
        width: 83,
        height: 62,
}

const carPanel: sizing = {
  top: 324,
  left: 430,
  width: 0,
  height: 0, 
}

const vW = ref<number>(window.innerWidth);
const vH = ref<number>(window.innerHeight);

function updateViewport() {
  vW.value = window.innerWidth;
  vH.value = window.innerHeight;
}

window.addEventListener('resize', updateViewport);

const widthRatio: ComputedRef<number> = computed( () => vW.value*0.8/imageSize.width );
const heightRatio: ComputedRef<number> =  computed( () => vH.value*0.75/imageSize.height);

const imageWidth = computed( () => Math.round(vW.value*0.8));
const imageHeight = computed( () => Math.round(vH.value*0.75));
const mediaWidth = computed( () => Math.round(vW.value*0.2)-2 );
const carTop = computed( () => Math.round(carPanel.top*heightRatio.value) );
const carLeft = computed( () => Math.round(carPanel.left*widthRatio.value) );

const batteryTop = computed(() => Math.round(batteryIcon.top*heightRatio.value))
const batteryLeft = computed(() => Math.round(batteryIcon.left*widthRatio.value))
const batteryWidth = computed(() => Math.round(batteryIcon.width*widthRatio.value))
const batteryHeight = computed(() => Math.round(batteryIcon.height*heightRatio.value))
//const mediaTop = computed( () => Math.round());
//const mediaLeft = computed( () => );


const max_speed: number = 250;
const updateInterval: number = 250;

const updateFactor: number = 10*updateInterval/1000;
const frictionFactor: number = 0.03*updateInterval/1000;
const constantFriction: number = 0.4*updateInterval/1000;
const reductionFactor: number = updateInterval/1000;
const brakeFactor: number = 24*updateInterval/1000;
const mainLoop = ref<number | null>(null);

/* const batteryChanged = ref<number>(100);
const maxAllowedSpeed = ref<number>(max_speed);


  const statusText = computed(() => {
  if (batteryPower.value <= 1) {
    return "Critical Battery Power! Car stopped";
  }
  if (batteryPower.value <= 20){
    return "Warning, low battery";
  }
  return "";
});

*/


const systemState = mainStore()
const { currentSpeed, batteryPower, accelerateFactor, started, currentTrack } = storeToRefs(systemState); // , targetSpeed 
//const trackInfo = computed(() => " ")
//console.log(systemState);
//console.log("current Speed is = ",currentSpeed);

watch(started, () => { 
  if(currentSpeed.value == 0){
    mainLoop.value = setInterval(() => {
      if(batteryPower.value == 0){ currentSpeed.value = 0; } 
      else {
        if(accelerateFactor.value < 0){ 
        currentSpeed.value = Math.max(currentSpeed.value*(1-frictionFactor) - constantFriction + accelerateFactor.value*brakeFactor,0);
        } else  { 
        let rawSpeed: number = Math.max(currentSpeed.value*(1-frictionFactor) - constantFriction + accelerateFactor.value*updateFactor,0);
        currentSpeed.value = Math.min(rawSpeed,max_speed); 
                }
        batteryPower.value = Math.max(batteryPower.value-reductionFactor*currentSpeed.value/max_speed,0);
      }
      //if(batteryChanged.value > batteryRounded.value) batteryChanged.value = batteryRounded.value
      if(currentSpeed.value == 0){
        if(mainLoop.value){ clearInterval(mainLoop.value); } }


      } , updateInterval); } 
    
    });


const criticalState = computed( () => batteryPower.value <= 20 );

// #pedal-panel {
//  height: 40vh;
// } height: 60vh;
// style="flex-grow: 3;"
// style="flex-grow: 1;"


</script>
<template>
  <div id="main-content" :style="{'--icon-top': `${batteryTop}px`, '--icon-left': `${batteryLeft}px`, '--icon-width': `${batteryWidth}px`, '--icon-height': `${batteryHeight}px`, '--image-width': `${imageWidth}px`, '--image-height': `${imageHeight}px`, '--car-top': `${carTop}px`, '--car-left': `${carLeft}px`, '--media-width': `${mediaWidth}px`, '--media-height': `${vH}px` }">
    <!--h6 :style="{ color: 'red', marginBottom: '20px' }">{{ statusText }}</h6-->
    <div style="display: flex;">  

    <div id="car-field" >
      <div id="environment">
      <div id="car-panel">    
        <speedometer :speed="currentSpeed" :max_speed="max_speed" :ratioHeight="heightRatio" />
        <textinfo :batteryState="batteryPower" :ratioHeight="heightRatio">
          <p v-if="currentTrack.totalPlaytime>0" style="font-size: 0.9rem; width: fit-content; height: fit-content; color:white">{{ currentTrack.title }} - {{ currentTrack.album }} <span style="font-size: 0.7rem; display: block;">{{ currentTrack.artist }}<br> <span style="color:yellowgreen">{{ currentTrack.totalPlaytime }}</span> minutes</span> </p>
          <!--p style="color:aqua, font-size: 0.8rem">{{ currentTrack.totalPlaytime }}</p-->
        </textinfo>/>
        <tickedbattery :batteryPower="batteryPower" :ratioHeight="heightRatio"/>
      </div>
      <img v-if="criticalState" class="icon" src="./assets/battery.png"/>
    </div>
    <pedals :viewportWidth="vW" :viewportHeight="vH" />
      <!--div id="pedal-panel"-->      
  </div>

  <div id="media-field" > 
  <media :viewportWidth="vW" :viewportHeight="vH" />
  </div>

    </div>
        
  </div>
</template>

<style scoped>

#main-content{
  position: absolute;
  top: 0px;  
  left: 0px;


}

#car-field {
  /*position: absolute;*/
  /*top: 0;*/
  /*left: 0;*/
  width: var(--image-width);
  margin: 0px 0px 0px 0px;
  border: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
}

#media-field {
  /*position: absolute;*/
  /*top: 0px;*/
  /*left: var(--image-width);*/
  width: var(--media-width);
  height: var(--media-height);
  margin: 0px 0px 0px 0px;
  /*border: 0px 0px 0px 0px;*/
  border-left: 2px;
  border-color: black;
  padding: 0px 0px 0px 0px;
}

#environment {
  background-image: url('./assets/dashboard.png');
  background-size: var(--image-width) var(--image-height);
  background-repeat: no-repeat;
  position: relative;
  width: var(--image-width);
  height: var(--image-height);
  margin: 0px 0px 0px 0px;
  border: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
}

#car-panel {
  display: flex;
  position: absolute;
  top: var(--car-top);
  left: var(--car-left); 
}

.icon {
        position: absolute;
        top: var(--icon-top);
        left: var(--icon-left);
        width: var(--icon-width);
        height: var(--icon-height);
}

.artist {
      color: #444;
      font-size: 0.8rem;
      display: block;
    }


</style>





