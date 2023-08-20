<script setup lang="ts">
import battery from './battery.vue';
const props = defineProps({
    batteryPower: {type: Number,
    default: 0
    }});
</script>

<template>
<div>
    <div class="batterymeter">
      <div class="digital">
        <battery :batteryPower="props.batteryPower"/>
      </div>
    <span class="subtext">{{ props.batteryPower }} %</span>
    </div>
    <button id="switch-next">&rarr;</button>
</div>
</template>

<style scoped>
    .batterymeter {
      background: radial-gradient(circle, rgba(63,63,86,1) 0%, rgba(19,18,34,1) 100%);
      width: 200px;
      height: 200px;
      border: 3px solid #fff;
      border-radius: 50%;
      position: relative;
      box-shadow: 2px 2px 10px 2px #000a;
    }
  
    .digital {
      background: radial-gradient(circle, #4d4d4d 0%, #000 100%);
      width: 50%;
      height: 50%;
      position: absolute;
      left: 25%;
      top: 25%;
      border: 2px solid #fff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  
    .subtext {
      position: absolute;     /* Absolute positioning relative to batterymeter */
      bottom: 18px;           /* Move it slightly upwards from the very bottom */
      left: 52%;              /* Center the text horizontally */
      transform: translateX(-50%); /* Ensures true centering */
      font-size: 18px;
      line-height: 1;
      color: #888;
    }

    #switch-next{
        margin-top: 3%;
        font-weight: bold;      
    }
  

  
  </style>