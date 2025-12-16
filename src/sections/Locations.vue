<template>
    <section id="locations">
        <div class="layout pa4">
            <!-- Mobile Order 1-3 -->
            <div
                class="col1-row1 pa3 flex justify-center items-center flex-column">
                <h1 class="f2">
                    {{ $t('nav.locations') }}
                </h1>
            </div>
            <div
                class="col1-row2 ph3 ph5-ns pv3 flex justify-center items-center">
                <span>{{ $t('locations.t1') }}</span>
            </div>
            <div class="col1-row3 pa3 flex justify-center items-start">
                <a
                    href="#rental"
                    class="navigation-button inline-flex items-center no-underline justify-between">
                    <span>{{ $t("nav.rental") }}</span>
                    <span class="material-symbols-outlined ml2"
                        >arrow_downward</span
                    >
                </a>
            </div>

            <!-- Mobile Order 4 -->
            <div class="col2-3-span">
                <img
                    src="/assets/europe_custom_map.svg"
                    alt="Lokacije dela - Evropa"
                    class="w-100 h-100 object-contain" />
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
