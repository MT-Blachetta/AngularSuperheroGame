<script setup lang="ts">
import { computed } from 'vue'


const props = defineProps({
    ratioHeight: {type: Number, 
        default: 600}
    });

const elementSize = computed( () => Math.round(275*props.ratioHeight) );



//const criticalState = computed( () => props.batteryState <= 20 );

</script>

<template>
    <div class="textinfo" :style="{'--element-size': `${elementSize}px`}">
      <div class="digital">
        <slot></slot>
      </div>
    </div>
  </template>
  
  
  <style scoped>
    .textinfo {
      background: radial-gradient(circle, rgba(63,63,86,1) 0%, rgba(19,18,34,1) 100%);
      width: var(--element-size);
      height: var(--element-size);
      border: 3px solid #fff;
      border-radius: 50%;
      position: relative;
      box-shadow: 2px 2px 10px 2px #000a
    }
  
    .digital {
      background: radial-gradient(circle, #4d4d4d 0%, #000 100%);
      width: 75%;
      height: 75%;
      position: absolute;
      left: 12.5%;
      top: 12.5%;
      border: 2px solid #fff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  
      &::before {
        content: '';
        display: block;
        border-bottom: 80px solid transparent;
        border-right: 10px solid #FCDA9D;
        position: absolute;
        left: -10px;
        top: 5px;
      }
  
      &::after {
        content: '';
        display: block;
        border-bottom: 80px solid transparent;
        border-left: 10px solid #E99D27;
        position: absolute;
        top: 5px;
      }
    
  
  
      &::after {
        content: '';
        display: block;
        width: 3px;
        height: 10px;
        background: #fff;
      }

    
  </style>