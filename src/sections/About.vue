<template>
    <section id="about">
        <div class="pa4">
            <!-- Mobile Order 1 -->
            <div
                class="col1-row1 pa3 logo-container"
                id="landing-logo">
                <img
                    src="/assets/logo_gc.png"
                    id="logo" />
            </div>

            <!-- Mobile Order 2 -->
            <div class="col2-row1 pv3 pl3 pr5">
                <span>{{ $t('about.top') }}</span>
            </div>

            <!-- Mobile Order 3 -->
            <div
                class="ph3 ph5-ns pv3 flex flex-column items-start col1-row2-span-ns">
                <h2 class="f2 fw7 mb3">MONTAŽA JEKLENIH POSTROJENJ GC s.p.</h2>
                <a
                    href="#varjenje"
                    class="inline-flex items-center no-underline justify-between">
                    <span>{{ $t('nav.welding') }}</span>
                    <span class="material-symbols-outlined ml2"
                        >arrow_downward</span
                    >
                </a>
            </div>
            <!-- Mobile Order 4 -->
            <div class="col1-row3 pa3 relative">
                <span
                    class="absolute left-0 bottom-0 pa3 inline-flex items-center f5">
                    Dobrnič
                    <span class="material-symbols-outlined ml2"
                        >location_on</span
                    >
                </span>
            </div>

            <!-- Mobile Order 5 -->
            <div class="col2-row3 pv3 pl3 pr5">
                <span>{{ $t('about.bottom') }}</span>
            </div>

            <!-- Mobile Order 6 -->
            <div
                class="col3-image flex items-center justify-center w-hidden pa2">
                <img
                    src="/assets/servis.jpg"
                    alt="GC"
                    class="w-auto h-100 br3" />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
#about > div:first-child {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    gap: 1rem;

    .logo-container {
        width: 310px;
    }

    img {
        max-width: 100%;
        max-height: 1200px;
        object-fit: contain;
        object-fit: cover;
    }

    @media screen and (min-width: 768px) {
        height: 100vh;
        width: 100vw;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 0;

        .col1-row1 {
            grid-column: 1;
            grid-row: 1;
        }
        .col1-row2-span {
            grid-column: 1 / span 2;
            grid-row: 2;
        }
        .col1-row2-span-ns {
            grid-column: 1 / span 2;
            grid-row: 2;
        }
        .col1-row3 {
            grid-column: 1;
            grid-row: 3;
        }
        .col2-row1 {
            grid-column: 2;
            grid-row: 1;
        }
        .col2-row3 {
            grid-column: 2;
            grid-row: 3;
        }
        .col3-image {
            grid-column: 3;
            grid-row: 1 / span 3;
        }
    }
}
</style>
