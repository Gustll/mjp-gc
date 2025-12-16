<script setup lang="ts">
import ImgSlider from '@/shared/components/ImgSlider.vue';
</script>
<template>
    <section id="assembly">
        <div class="layout pa4">
            <!-- Mobile Order 1-3 -->
            <div
                class="col1-row1 ph3 ph5-ns pv3 flex justify-end items-center flex-column flex-end landing-title">
                <h1 class="f2">
                    <span>{{ $t('nav.assembly') }}</span>
                </h1>
            </div>
            <div
                class="col1-row2 ph3 ph5-ns pv3 flex items-center justify-center lh-copy">
                <ol class="ma0">
                    <li>
                        <span>{{ $t('assembly.t1') }}</span>
                    </li>
                    <li>
                        <span>{{ $t('assembly.t2') }}</span>
                    </li>
                    <li>
                        <span>{{ $t('assembly.t3') }}</span>
                    </li>
                    <li>
                        <span>{{ $t('assembly.t4') }}</span>
                    </li>
                    <li>
                        <span>{{ $t('assembly.t5') }}</span>
                    </li>
                    <li>
                        <span>{{ $t('assembly.t6') }}</span>
                    </li>
                    <li>
                        <span>{{ $t('assembly.t7') }}</span>
                    </li>
                </ol>
            </div>
            <div class="col1-row3 pa3 flex justify-center items-start">
                <a
                    href="#service"
                    class="inline-flex items-center no-underline justify-between">
                    <span>{{ $t('nav.service') }}</span>
                    <span class="material-symbols-outlined ml2"
                        >arrow_downward</span
                    >
                </a>
            </div>

            <!-- Mobile Order 4 -->
            <div
                class="col2-3-span flex justify-center items-center relative">
                <ImgSlider
                    :prefix="'montaza'"
                    :count="8" />
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

    img {
        object-fit: contain;
        overflow: hidden;
    }
    ol {
        font-size: 16px;
    }

    @media screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        height: 100vh;
        width: 100vw;
        gap: 0;

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
}
</style>
