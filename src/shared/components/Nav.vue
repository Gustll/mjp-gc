<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);

const openMenu = () => (isOpen.value = true);
const closeMenu = () => (isOpen.value = false);
</script>

<template>
    <header
        id="navbar"
        class="fixed top-0 left-0 w-100 flex justify-between items-center bg-white-90 z-5 pa2">
        <!-- Logo -->
        <div
            class="logo"
            ref="nav-logo">
            <a href="#about">
                <img
                    src="/assets/logo_gc.png"
                    id="logo" />
            </a>
        </div>

        <div class="language-selector absolute">
            <LanguageSwitcher />
        </div>

        <!-- Desktop Navigation -->
        <nav class="dn flex-l pa3">
            <a
                href="#varjenje"
                class="nav-link ml3"
                >{{ $t('nav.welding') }}</a
            >
            <a
                href="#montaza"
                class="nav-link ml3"
                >{{ $t('nav.assembly') }}</a
            >
            <a
                href="#servis"
                class="nav-link ml3"
                >{{ $t('nav.service') }}</a
            >
            <a
                href="#lokacije-dela"
                class="nav-link ml3"
                >{{ $t('nav.locations') }}</a
            >
            <a
                href="#najem-bagrov"
                class="nav-link ml3"
                >{{ $t('nav.rental') }}</a
            >
            <a
                href="#kontakt"
                class="nav-link ml3"
                >{{ $t('nav.contact') }}</a
            >
        </nav>

        <!-- Mobile Burger -->
        <div class="burger flex dn-l items-center">
            <button
                @click="openMenu"
                class="f3 bg-transparent bn pointer">
                ☰
            </button>
        </div>
    </header>

    <!-- Mobile expanded menu -->
    <div
        class="fixed top-0 right-0 w-100 h-100 bg-white flex-column items-center justify-center z-4"
        :class="isOpen ? 'flex' : 'dn'">
        <a
            href="#varjenje"
            class="mobile-link mb3 f3"
            @click="closeMenu">
            {{ $t('nav.welding') }}
        </a>
        <a
            href="#montaza"
            class="mobile-link mb3 f3"
            @click="closeMenu">
            {{ $t('nav.assembly') }}
        </a>
        <a
            href="#servis"
            class="mobile-link mb3 f3"
            @click="closeMenu">
            {{ $t('nav.service') }}
        </a>
        <a
            href="#lokacije-dela"
            class="mobile-link mb3 f3"
            @click="closeMenu">
            {{ $t('nav.locations') }}
        </a>
        <a
            href="#najem-bagrov"
            class="mobile-link mb3 f3"
            @click="closeMenu">
            {{ $t('nav.rental') }}
        </a>
        <a
            href="#kontakt"
            class="mobile-link mb3 f3"
            @click="closeMenu">
            {{ $t('nav.contact') }}
        </a>

        <button
            @click="closeMenu"
            class="mt4 f2 bg-transparent bn pointer">
            ✕
        </button>
    </div>
</template>

<style lang="scss" scoped>
#navbar {
    transition: all 0.3s ease;
    background-color: var(--text-muted);

    .logo {
        width: 120px;
    }
}

#navbar #nav-logo {
    opacity: 0;
    transition: opacity 0.5s ease;
}

.nav-link,
.mobile-link {
    text-decoration: none;
    color: var(--bg-dark);
    font-weight: 600;
    transition: color 0.3s ease;
}

.nav-link:hover,
.mobile-link:hover {
    color: var(--primary);
}

#mobile-menu {
    background-color: var(--text-muted);
}

#burger-btn,
#close-btn {
    color: var(--bg-dark);
}

/* Styling for the custom language selector */
.language-selector {
    left: 150px;
}

#language-select {
    background-color: var(--text-muted);
    font-family:
        'Apple Color Emoji',
        /* iOS/macOS */ 'Segoe UI Emoji',
        /* Windows */ 'Noto Color Emoji',
        /* Android/Linux */ 'Segoe UI Symbol',
        /* older fallback */ sans-serif;
    font-size: 1rem;
}
</style>
