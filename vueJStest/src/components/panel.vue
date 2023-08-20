<script setup lang="ts">
</script>

<template>
    <div class="cd-player">
        <button class="cd-button play">▶</button>
        <button class="cd-button pause">||</button>
        <button class="cd-button stop"></button>
    </div>
</template>

<style scoped>

.cd-player {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 20px 40px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
}

.cd-button {
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
    position: relative;
}

.cd-button:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.play:before {
    /*content: '▶';*/
    font-weight: bolder;
}

.pause:before {   
    font-weight: bolder;
     /*letter-spacing: -1px;
     content: '| |';
     */
}

.stop:before {
    width: 20px;
    height: 20px;
    background-color: white;
    display: block;
}

</style>
  