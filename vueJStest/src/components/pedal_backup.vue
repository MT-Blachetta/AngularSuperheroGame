<script setup lang="ts">
import { ref, computed } from 'vue'
import { mainStore } from '../stores/mainStore.ts'
import { storeToRefs } from 'pinia';
//const props = defineProps({});

const systemState = mainStore();
const { accelerateFactor, started } = storeToRefs(systemState);

const isPressedGas = ref(false);
const unpressedGas = computed( () => !isPressedGas.value );
const isPressedBrake = ref(false);
const unpressedBrake = computed( () => !isPressedBrake.value);

function pressGas(){
accelerateFactor.value = 1;
isPressedGas.value = true;
started.value = !started.value;
}

function pressBrake(){
    accelerateFactor.value = -1;
    isPressedBrake.value = true;
}

function releaseGas() {
    accelerateFactor.value = 0;
    isPressedGas.value = false;
}

function releaseBrake() {
    accelerateFactor.value = 0;
    isPressedBrake.value = false;
}

</script>

<template>
    <div class="container">
    <div class="pedal">
      <img v-show="unpressedGas" @mousedown="pressGas" src="../assets/gaspedal.png" />
      <img v-show="isPressedGas" @mouseup="releaseGas" @mouseout="releaseGas" scr="../assets/pressed.png" />
    </div>
    <div class="pedal">
      <img v-show="unpressedBrake" @mousedown="pressBrake" src="../assets/bremspedal.png" />
      <img v-show="isPressedBrake" @mouseup="releaseBrake" @mouseout="releaseBrake" scr="../assets/pressed.png" />
    </div>   
    </div>
</template>

<style scoped>
.container {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.pedal {
    margin-right: 20px; /* adjust the margin as needed */
    position: relative;
    width: 154px;
    height: 438px;
}

.pedal img {
    position: absolute;
    top: 0;
    left: 0;
    width: 154px;
    height: 438px;
}
</style>