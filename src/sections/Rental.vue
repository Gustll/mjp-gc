<script setup lang="ts">
import ImgSlider from '@/shared/components/ImgSlider.vue';

</script>

<template>
    <section
        id="rental">
        <div class="layout pa4">
            <!-- Mobile Order 1-3 -->
            <div
                class="col1-row1 ph3 ph5-ns pv3 flex justify-end items-center flex-column flex-end landing-title">
                <h1 class="f2">{{ $t('nav.rental') }}</h1>
            </div>
            <div
                class="col1-row2 ph3 ph5-ns pv3 flex items-center justify-center lh-copy">
                <div>
                    <span>{{ $t('rental.t1') }}</span>
                    <span>1,9t -> 3,6t -> 9t</span>
                    <br />
                    <span>{{ $t('rental.t2') }}</span>
                    <ul class="list ma0 pa0">
                        <li>
                            <span>{{ $t('rental.t3') }}</span>
                        </li>
                        <li>
                            <span>{{ $t('rental.t4') }}</span>
                        </li>
                        <li>
                            <span>{{ $t('rental.t5') }}</span>
                        </li>
                        <li>
                            <span>{{ $t('rental.t6') }}</span>
                        </li>
                        <li>
                            <span>{{ $t('rental.t7') }}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col1-row3 pa3 flex justify-center items-start">
                <a
                    href="#welding"
                    class="navigation-button inline-flex items-center no-underline f4 fw5 justify-between">
                    <span>{{ $t('nav.welding') }}</span>
                    <span class="material-symbols-outlined ml2"
                        >arrow_downward</span
                    >
                </a>
            </div>
            <!-- Mobile Order 4 -->
            <div
                class="col2-3-span flex justify-center items-center relative">
                <ImgSlider
                    :prefix="'najem'"
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

    img {
        object-fit: contain;
        overflow: hidden;
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
        .col1-row3 img {
            width: 230px;
        }
        .col2-3-span {
            grid-column: 2 / span 2;
            grid-row: 1 / span 3;
        }
    }
}
</style>
