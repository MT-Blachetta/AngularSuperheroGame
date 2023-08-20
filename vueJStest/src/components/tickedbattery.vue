<script setup lang="ts">
import battery from './battery.vue';
import { computed } from 'vue';

const props = defineProps({
    batteryPower: {type: Number,
    default: 0
    },
    ratioHeight: {type: Number, 
        default: 1}

});

const speedometerSize = computed(() => Math.round(225*props.ratioHeight) );
const subtextFontSize = computed(() => Math.round(18*props.ratioHeight) );
const linePadding = computed(() => Math.round(96*props.ratioHeight) );
const lineHeight = computed(() => Math.round(11*props.ratioHeight) );


const rotation = computed(() => 30+3*props.batteryPower);
const batteryRounded = computed( () => Math.round(props.batteryPower) );

</script>

<template>
<div :style="{'--meter-size': `${speedometerSize}px`, '--line-padding': `${linePadding}px`, '--line-height': `${lineHeight}px`, '--subtext-fontsize': `${subtextFontSize}px`}">
    <div class="batterymeter">
        <div class="lines">
        <div class="line" style="transform: rotate(30deg)"></div>
        <div class="line" style="transform: rotate(60deg)"></div>
        <div class="line" style="transform: rotate(90deg)"></div>
        <div class="line" style="transform: rotate(120deg)"></div>
        <div class="line" style="transform: rotate(150deg)"></div>
        <div class="line" style="transform: rotate(180deg)"></div>
        <div class="line" style="transform: rotate(210deg)"></div>
        <div class="line" style="transform: rotate(240deg)"></div>
        <div class="line" style="transform: rotate(270deg)"></div>
        <div class="line" style="transform: rotate(300deg)"></div>
        <div class="line" style="transform: rotate(330deg)"></div>
      </div>
      <div class="indicator" :style="{transform: `rotate(${rotation}deg)`}"></div>
      <div class="digital">
        <battery :batteryPower="props.batteryPower"/>
      </div>
    <span class="subtext">{{ batteryRounded }} %</span>
    </div>
    <button class="metabutton">&rarr;</button>
</div>
</template>

<style scoped>
    .batterymeter {
      background: radial-gradient(circle, rgba(63,63,86,1) 0%, rgba(19,18,34,1) 100%);
      width: var(--meter-size);
      height: var(--meter-size);
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
      position: absolute;     
      bottom: 17px;           
      left: 52%;              
      transform: translateX(-50%); 
      font-size: var(--subtext-fontsize);
      line-height: 1;
      color: #888;
    }

    .indicator {
      border-bottom: 5px solid #C1B3B3;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -10px;
      transform: rotate(180deg);
      transition: transform 1s ease-in-out;
  
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
    }
  
    .line {
  
      position: absolute;
      left: 50%;
      top: 50%;
      padding-top: var(--line-padding);
      margin-left: -2px;
      transform-origin: top center;
  
      &::after {
        content: '';
        display: block;
        width: 3px;
        height: var(--line-height);
        background: #fff;
      }
    } 

    .metabutton {
        margin-top: 2%;
        font-weight: bold;
        color: blue;      
    }

  
  </style>