<script setup lang="ts">
import About from './sections/About.vue';
import Assembly from './sections/Assembly.vue';
import Contact from './sections/Contact.vue';
import Locations from './sections/Locations.vue';
import Rental from './sections/Rental.vue';
import Service from './sections/Service.vue';
import Transport from './sections/Transport.vue';
import Welding from './sections/Welding.vue';
import Nav from './shared/components/Nav.vue';
import { ref, onMounted } from 'vue';

const isReady = ref(false);

onMounted(async () => {
    if ('fonts' in document) {
        try {
            await Promise.race([
                // Wait for fonts to load
                Promise.all([
                    document.fonts.load('300 1rem Merriweather'),
                    document.fonts.load('400 1rem Merriweather'),
                    document.fonts.load('600 1rem Merriweather'),

                    document.fonts.load('italic 300 1rem Merriweather'),
                    document.fonts.load('italic 400 1rem Merriweather'),
                    document.fonts.load('italic 600 1rem Merriweather'),
                    // Material Symbols
                    document.fonts.load('400 1rem "Material Symbols Outlined"'),
                ]),
                // Or timeout after 3 seconds
                new Promise((resolve) => setTimeout(resolve, 3000)),
            ]);
        } catch (error) {
            console.warn('Font loading failed:', error);
        }
    }

    // Small delay to ensure everything is painted
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            isReady.value = true;
        });
    });
});
</script>

<template>
    <div
        v-if="!isReady"
        class="loading-screen">
        <!-- Optional: Add a loading spinner here -->
        <div class="spinner"></div>
    </div>

    <div
        id="app"
        v-show="isReady"
        class="fade-in">
        <Nav />

        <About />
        <Transport />
        <Rental />
        <Welding />
        <Assembly />
        <Service />
        <Locations />
        <Contact />
    </div>
</template>

<style scoped>
.loading-screen {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
}

.fade-in {
    animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.spinner {
    width: 40px;
    height: 40px;
    border: 3px solid #f3f3f3;
    border-top: 3px solid #333;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>
