<script setup lang="ts">
import { computed, ComputedRef } from 'vue';

const props = defineProps({
    batteryPower: {type: Number,
    default: 0
    }});

const batteryColor: ComputedRef<"green" | "red"> = computed( () => props.batteryPower > 20 ? "green" : "red" );

//const classTest: ComputedRef<"battery-blue" | "battery-red"> = computed( () => props.batteryPower > 50 ? "battery-blue" : "battery-red" );

</script>

<template>
    <div class="battery-container">
      <div class="battery-body">
        <div class="battery-level" :style="{ width: `${props.batteryPower}%`, 'background-color': `${batteryColor}`}"></div>
      </div>
      <div class="battery-tip"></div>
    </div>
  </template>
  
  
  <style scoped>
.battery-container {
  display: flex;
  align-items: center;
  font-family: Arial, sans-serif;
  width: 80%;
  transform: scale(0.81);
  margin: 0 auto; 
}

  
  .battery-body {
    position: relative;
    width: 95px;
    height: 40px;
    border: 2px solid #000;
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
    margin-right: 4px;
  }
  
  .battery-level {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    transition: width 0.3s ease;
  }
  
  .battery-tip {
    width: 10px;
    height: 20px;
    background-color: rgb(0, 0, 0);
    /*border-radius: 1px 0 0 1px;*/
  }
  
  </style>
  