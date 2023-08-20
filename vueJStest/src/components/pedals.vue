<script setup lang="ts">
import { ref, computed } from 'vue'
import { mainStore } from '../stores/mainStore.ts'
import { storeToRefs } from 'pinia';


const props = defineProps({
    viewportWidth: {type: Number,
    default: 800
    },
    viewportHeight: {type: Number, 
        default: 600}
});

const pedalWidth = computed( () => Math.round(props.viewportWidth*0.8*0.5)-3 ); // 354 px;
const pedalHeight = computed( () => Math.round(props.viewportHeight*0.25)-3 ); // 838px ;
const viewWidth = computed( () => Math.round(props.viewportWidth*0.8)-1 ); 


const systemState = mainStore();
const { accelerateFactor, started, batteryPower } = storeToRefs(systemState);

const isPressedGas = ref(false);
const isPressedBrake = ref(false);

function pressGas(){
    console.log("gas pressed");
    accelerateFactor.value = 1;
    isPressedGas.value = true;
    if(batteryPower.value > 0) {
        started.value = !started.value;
    }    
}

function pressBrake(){
    console.log("brake pressed");
    accelerateFactor.value = -1;
    isPressedBrake.value = true;
}

function releaseGas() {
    console.log("released gas");
    accelerateFactor.value = 0;
    isPressedGas.value = false;
}

function releaseBrake() {
    console.log("released brake")
    accelerateFactor.value = 0;
    isPressedBrake.value = false;
}
</script>

<template>
    <div class="container" :style="{'--pedal-width': `${pedalWidth}px`, '--pedal-height': `${pedalHeight}px`, '--container-width': `${viewWidth}px` }">
        <div class="pedal">
            <img 
                v-show="isPressedGas" 
                @mouseup="releaseGas" 
                @mouseout="releaseGas" 
                src="../assets/pressed.png" 
            />
            <img 
                v-show="!isPressedGas" 
                @mousedown="pressGas" 
                src="../assets/gaspedal.png" 
            />
        </div>
        <div class="pedal">
            <img 
                v-show="isPressedBrake" 
                @mouseup="releaseBrake" 
                @mouseout="releaseBrake" 
                src="../assets/pressed.png" 
            />
            <img 
                v-show="!isPressedBrake" 
                @mousedown="pressBrake" 
                src="../assets/bremspedal.png" 
            />
        </div>    
    </div>
</template>

<style scoped>
.container {
    display: flex;
    width: var(--container-width);
    justify-content: space-between;
    margin: 0px 0px 0px 0px;
    border: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
}

.pedal {
    /*margin-right: 20px;*/
    position: relative;
    width: var(--pedal-width);
    height: var(--pedal-height);
}

.pedal img {
    position: absolute;
    top: 0;
    left: 0;
    width: var(--pedal-width);
    height: var(--pedal-height);
}


</style>


