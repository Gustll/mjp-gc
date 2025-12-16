<template>
    <section id="contact" class="secondary-container">
        <div class="layout pa4">
            <!-- Mobile Order 1-3 -->
            <div
                class="col1-row1 ph3 ph5-ns pv3 flex justify-end items-center flex-column flex-end landing-title">
                <h1 class="f2">{{ $t('nav.contact') }}</h1>
            </div>
            <div
                class="col1-row2 ph3 ph5-ns pv3 flex items-center justify-center lh-copy">
                <div>
                    Gregor Cesar
                    <br />
                    <span>{{ $t('contact.phone') }}</span>
                    <a
                        href="tel:+38640166095"
                        class="link primary">
                        00 386 40 166 095
                    </a>
                    <br />
                    <span>{{ $t('contact.email') }}</span>
                    <a
                        href="mailto:info.mjpgc@gmail.com"
                        class="link primary">
                        info.mjpgc@gmail.com
                    </a>
                </div>
            </div>
            <div class="col1-row3 pa3 flex justify-center items-start">
                <img
                    src="/assets/logo_gc.png"
                    alt="GC machinery showcase"
                    class="w-auto h-auto br3" />
            </div>

            <!-- Mobile Order 4 -->
            <div class="col2-3-span">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.288305408952!2d14.8156!3d45.9334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476532919ccc123b%3A0x9c4c88b9adf8d0c9!2sRde%C4%8Di%20Kal%208%2C%208211%20Dobrni%C4%8D!5e0!3m2!1ssl!2ssi!4v1616066554875!5m2!1ssl!2ssi"
                    style="
                        border: 0;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    "
                    allowfullscreen
                    loading="lazy"></iframe>
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
    padding: 1rem;

    & > div {
        height: 100%;
        box-sizing: border-box;
        overflow: hidden;
    }

    @media screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        height: 100vh;
        width: 100vw;
        padding: 0;
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

    .link {
        background-color: transparent;
        padding: 0;
        color: var(--primary);
    }
}
</style>
