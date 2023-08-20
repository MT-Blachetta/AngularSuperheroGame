const props = defineProps({
    currentSpeed: {type: Number,
    default: 0
    },
    max_speed: {type: Number, 
        default: 360}
});

const props = defineProps({
    batteryPower: {type: Number,
    default: 0
    }});

    margin-top: 20%;
    margin-bottom: 20%;


    <div class="battery-percentage">{{ props.batteryPower}}%</div>

    const increaseSpeed = () => {
        //currentSpeed.value = Math.ceil(Math.min(currentSpeed.value+3,maxAllowedSpeed.value));
        currentSpeed.value = Math.min(currentSpeed.value+3,maxAllowedSpeed.value);
    }
    
    const decreaseSpeed = () => {
        currentSpeed.value = Math.max(currentSpeed.value-3,0);

    
    }

    <div class="d-flex justify-content-center mt-3">
    <button class="btn btn-success me-2" @click="increaseSpeed">Increase Speed</button>
    <button class="btn btn-danger" @click="decreaseSpeed">Decrease Speed</button>
  </div>