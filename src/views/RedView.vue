<template>
    <div>
        <img src="../assets/red.jpg" alt="red light" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'RedView',
});
</script>

<style scoped lang="scss">
div {
    height: 88vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
img {
    height: 500px;
}
</style>
