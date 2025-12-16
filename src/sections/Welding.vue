<script setup lang="ts">
import ImgSlider from '@/shared/components/ImgSlider.vue';

</script>

<template>
    <section
        id="welding"
        class="secondary-container">
        <div class="layout pa4">
            <!-- Mobile Order 1-3 -->
            <div
                class="col1-row1 ph3 ph5-ns pv3 flex justify-end items-center flex-column flex-end">
                <h1 class="f2">{{ $t('nav.welding') }}</h1>
            </div>
            <div
                class="col1-row2 ph3 ph5-ns pv3 flex flex-column items-start justify-center lh-copy">
                <span>{{ $t('welding.t1') }}</span>
                <span>{{ $t('welding.t2') }}</span>
            </div>
            <div class="col1-row3 pa3 flex justify-center items-start">
                <a
                    href="#assembly"
                    class="inline-flex items-center no-underline justify-between">
                    <span>{{ $t('nav.assembly') }}</span>
                    <span class="material-symbols-outlined ml2"
                        >arrow_downward</span
                    >
                </a>
            </div>

            <!-- Mobile Order 4 -->
            <div
                class="col2-3-span flex justify-center items-center relative">
                <ImgSlider
                    :prefix="'varjenje'"
                    :count="3" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.layout {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    gap: 1rem;

    & > div {
        height: 100%;
        box-sizing: border-box;
        overflow: hidden;
    }

    .slider-left {
        top: 50%;
        left: 0%;
        transform: translate(0%, -50%);
    }

    .slider-right {
        top: 50%;
        right: 0%;
        transform: translate(0%, -50%);
    }
    img {
        object-fit: contain;
        overflow: hidden;
    }
}

@media screen and (min-width: 768px) {
    .layout {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        height: 100vh;
        width: 100vw;
        gap: 0;
    }

    .col1-row1 {
        grid-column: 1;
        grid-row: 1;
    }
    .col1-row2 {
        grid-column: 1;
        grid-row: 2;
    }
    .col1-row3 {
        grid-column: 1;
        grid-row: 3;
    }
    .col2-3-span {
        grid-column: 2 / span 2;
        grid-row: 1 / span 3;
    }
}
</style>
