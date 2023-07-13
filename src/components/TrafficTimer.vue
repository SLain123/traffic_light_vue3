<template>
    <div class="timer_container">{{ currentTime }}</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { LightType, FlashType } from '@/types/LightTypes';

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
            currentTime &&
                +currentTime > 0 &&
                (this.currentTime = +currentTime);
        },
    },

    computed: {
        nextTime() {
            if (this.nextLight === 'yellow') return 3;
            if (this.nextLight === 'red') return 10;
            return 15;
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
    left: 50%;
    transform: translate(-50%);
}
</style>
