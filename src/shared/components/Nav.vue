<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import LanguageSwitcher from './LanguageSwitcher.vue';

const isOpen = ref(false);

const toggleMenu = () => (isOpen.value = !isOpen.value);
const closeMenu = () => (isOpen.value = false);

const isLogoVisible = ref(false);
let observer: IntersectionObserver | null = null;

function getThreshold() {
    // Mobile: 50% scrolled (threshold 0.5)
    // Desktop: 30% scrolled (threshold 0.83)
    return window.innerWidth < 768 ? 0.4 : 0.83;
}

function setupObserver() {
    // Clean up existing observer
    if (observer) {
        observer.disconnect();
    }

    const firstSection = document.querySelector('section:first-of-type');

    if (firstSection) {
        const threshold = getThreshold();

        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    isLogoVisible.value =
                        !entry.isIntersecting ||
                        entry.intersectionRatio < threshold;
                });
            },
            { threshold },
        );

        observer.observe(firstSection);
    }
}

onMounted(() => {
    setupObserver();
    window.addEventListener('resize', setupObserver);
});

onUnmounted(() => {
    if (observer) {
        observer.disconnect();
    }
    window.removeEventListener('resize', setupObserver);
});
</script>

<template>
    <header
        id="navbar"
        class="fixed top-0 left-0 w-100 flex justify-between items-center z-5 pa2 relative">
        <!-- Logo -->
        <div
            class="logo"
            :class="{ visible: isLogoVisible }">
            <a href="#about">
                <img
                    src="/assets/logo_gc.png"
                    id="logo" />
            </a>
        </div>

        <div class="language-container absolute">
            <LanguageSwitcher />
        </div>

        <!-- Desktop Navigation -->
        <nav class="dn flex-l pa3">
            <a
                href="#welding"
                class="nav-link ml3"
                >{{ $t('nav.welding') }}</a
            >
            <a
                href="#assembly"
                class="nav-link ml3"
                >{{ $t('nav.assembly') }}</a
            >
            <a
                href="#service"
                class="nav-link ml3"
                >{{ $t('nav.service') }}</a
            >
            <a
                href="#locations"
                class="nav-link ml3"
                >{{ $t('nav.locations') }}</a
            >
            <a
                href="#rental"
                class="nav-link ml3"
                >{{ $t('nav.rental') }}</a
            >
            <a
                href="#contact"
                class="nav-link ml3"
                >{{ $t('nav.contact') }}</a
            >
        </nav>

        <!-- Mobile Burger -->
        <div class="burger flex dn-l items-center">
            <button
                @click="toggleMenu"
                class="f3 bg-transparent bn pointer">
                ☰
            </button>
        </div>
    </header>

    <!-- Mobile expanded menu -->
    <div
        class="fixed top-0 right-0 w-100 h-100 flex-column items-center justify-center z-4 mobile-nav"
        :class="isOpen ? 'flex' : 'dn'">
        <a
            href="#welding"
            class="mobile-link mb3 f3"
            @click="closeMenu">
            {{ $t('nav.welding') }}
        </a>
        <a
            href="#assembly"
            class="mobile-link mb3 f3"
            @click="closeMenu">
            {{ $t('nav.assembly') }}
        </a>
        <a
            href="#service"
            class="mobile-link mb3 f3"
            @click="closeMenu">
            {{ $t('nav.service') }}
        </a>
        <a
            href="#locations"
            class="mobile-link mb3 f3"
            @click="closeMenu">
            {{ $t('nav.locations') }}
        </a>
        <a
            href="#rental"
            class="mobile-link mb3 f3"
            @click="closeMenu">
            {{ $t('nav.rental') }}
        </a>
        <a
            href="#contact"
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
        opacity: 0;
        transform: translateY(20px);
        transition:
            opacity 0.3s ease,
            transform 0.3s ease;

        &.visible {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .language-container {
        left: 150px;
    }
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

.mobile-nav {
    background-color: var(--text-muted);
}
</style>
