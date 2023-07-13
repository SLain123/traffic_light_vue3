<template>
    <div class="container">
        <img
            :src="require(`../assets/${offLight ? 'off' : currentLight}.jpg`)"
            :title="currentLight"
            :alt="currentLight"
            class="light_img"
        />
        <traffic-timer
            :nextLight="nextLight"
            :startTime="startTime"
            @change-light="changeLight"
            @switch-light="switchLight"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import TrafficTimer from '@/components/TrafficTimer.vue';
import { LightType, FlashType } from '@/types/LightTypes';

export default defineComponent({
    name: 'LightView',
    components: {
        TrafficTimer,
    },

    data() {
        return {
            prevLight: null as LightType | null,
            currentLight: this.light as LightType,
            offLight: false,
        };
    },

    props: {
        startTime: Number,
        light: String as PropType<LightType>,
    },

    methods: {
        changeLight() {
            const nextLight = this.nextLight;
            this.prevLight = this.currentLight;
            localStorage.setItem('prevLight', this.currentLight);
            this.currentLight = nextLight;

            this.$router.push(`/${nextLight}`);
        },

        switchLight(mode: FlashType) {
            mode === 'off' ? (this.offLight = true) : (this.offLight = false);
        },

        getDataFromLS() {
            const prevLight = localStorage.getItem(
                'prevLight',
            ) as LightType | null;
            prevLight && (this.prevLight = prevLight);
        },
    },

    computed: {
        nextLight() {
            if (this.currentLight === 'green' || this.currentLight === 'red') {
                return 'yellow';
            } else if (
                this.currentLight === 'yellow' &&
                this.prevLight === 'red'
            ) {
                return 'green';
            }
            return 'red';
        },
    },

    created() {
        this.getDataFromLS();
    },
});
</script>

<style scoped lang="scss">
.container {
    width: 100%;
    height: 100vh;
    background-color: grey;
}

.light_img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
