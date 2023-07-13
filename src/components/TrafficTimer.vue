<template>
    <div class="timer_container">{{ currentTime.toFixed(0) }}</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { LightType, FlashType, LIGHT_TIME } from '@/types/LightTypes';

export default defineComponent({
    name: 'TrafficTimer',

    data() {
        return {
            currentTime: this.startTime as number,
            currentTimer: null as number | null,
        };
    },

    props: {
        startTime: Number,
        nextLight: String as PropType<LightType>,
    },

    emits: {
        ['change-light']: null,
        ['switch-light']: (val: FlashType) => val === 'off' || val === 'on',
    },

    methods: {
        nextTick() {
            if (this.currentTime > 0) {
                localStorage.setItem(
                    'currentTime',
                    String(this.currentTime - 0.5),
                );
                this.currentTime -= 0.5;
            }
        },

        changeLight() {
            if (this.currentTime === 0) {
                this.currentTime = this.nextTime;
                this.$emit('change-light');
            }
        },

        switchLight() {
            if (this.currentTime < 3.5 && this.currentTime % 1 === 0) {
                this.$emit('switch-light', 'off');
            }
            if (this.currentTime < 3 && this.currentTime % 1 !== 0) {
                this.$emit('switch-light', 'on');
            }
        },

        getDataFromLS() {
            const currentTime = localStorage.getItem('currentTime');
            const currentLight = this.$route.name as
                | LightType
                | undefined
                | null;
           
            currentTime && currentLight &&
                +currentTime < LIGHT_TIME[currentLight] &&
                (this.currentTime = +currentTime);
        },
    },

    computed: {
        nextTime() {
            if (this.nextLight === 'yellow') return LIGHT_TIME.yellow;
            if (this.nextLight === 'red') return LIGHT_TIME.red;
            return LIGHT_TIME.green;
        },
    },

    watch: {
        currentTime() {
            this.changeLight();
            this.switchLight();
        },
    },

    created() {
        this.getDataFromLS();
    },

    mounted() {
        this.currentTimer = setInterval(() => {
            this.nextTick();
        }, 500);
    },

    unmounted() {
        this.currentTimer && clearInterval(this.currentTimer);
    },
});
</script>

<style scoped lang="scss">
.timer_container {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 120px;
    height: 120px;
    background-color: rgba(128, 128, 128, 0.75);
    border-radius: 100%;
    border: 4px white double;
    margin: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 36px;
}
</style>
