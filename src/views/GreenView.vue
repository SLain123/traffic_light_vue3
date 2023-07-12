<template>
    <div>
        <img src="../assets/green.jpg" alt="green light" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'GreenView',
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
