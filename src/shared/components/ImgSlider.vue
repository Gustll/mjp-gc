<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';

const props = defineProps({
    prefix: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
        required: true,
    },
    extension: {
        type: String,
        default: 'jpg',
    },
});

const images = computed(() =>
    Array.from(
        { length: props.count },
        (_, i) => `${props.prefix}_${i + 1}.${props.extension}`,
    ),
);

const currentIndex = ref(0);
const sliderContainer = ref<HTMLElement | null>(null);
const isVisible = ref(false);
const loadedImages = ref<Set<number>>(new Set());
let autoplayTimer: number | null = null;
let observer: IntersectionObserver | null = null;

function next(): void {
    currentIndex.value = (currentIndex.value + 1) % images.value.length;
    preloadAdjacentImages();
    resetAutoplay();
}

function prev(): void {
    currentIndex.value =
        currentIndex.value === 0
            ? images.value.length - 1
            : currentIndex.value - 1;
    preloadAdjacentImages();
    resetAutoplay();
}

function goTo(index: number): void {
    currentIndex.value = index;
    preloadAdjacentImages();
    resetAutoplay();
}

function preloadAdjacentImages(): void {
    const indices = [
        currentIndex.value,
        (currentIndex.value + 1) % images.value.length,
        currentIndex.value === 0
            ? images.value.length - 1
            : currentIndex.value - 1,
    ];

    indices.forEach((index) => {
        if (!loadedImages.value.has(index)) {
            loadedImages.value.add(index);
        }
    });
}

function loadAllImages(): void {
    // Load all images at once when slider becomes visible
    for (let i = 0; i < images.value.length; i++) {
        loadedImages.value.add(i);
    }
}

function startAutoplay(): void {
    if (!isVisible.value) return;

    autoplayTimer = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % images.value.length;
        preloadAdjacentImages();
    }, 5000);
}

function stopAutoplay(): void {
    if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
    }
}

function resetAutoplay(): void {
    stopAutoplay();
    startAutoplay();
}

function setupIntersectionObserver(): void {
    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !isVisible.value) {
                    isVisible.value = true;
                    loadAllImages();
                    startAutoplay();
                } else if (!entry.isIntersecting && isVisible.value) {
                    isVisible.value = false;
                    stopAutoplay();
                }
            });
        },
        {
            threshold: 0.1, // Trigger when 10% of component is visible
            rootMargin: '50px', // Start loading slightly before entering viewport
        },
    );

    if (sliderContainer.value) {
        observer.observe(sliderContainer.value);
    }
}

onMounted(() => {
    setupIntersectionObserver();
});

onUnmounted(() => {
    stopAutoplay();
    if (observer && sliderContainer.value) {
        observer.unobserve(sliderContainer.value);
        observer.disconnect();
    }
});
</script>

<template>
    <div
        ref="sliderContainer"
        class="relative w-100 h-100 overflow-hidden slider-container pa4">
        <div class="w-100 h-100 relative">
            <img
                v-for="(image, index) in images"
                :key="index"
                v-show="loadedImages.has(index)"
                :src="loadedImages.has(index) ? `/assets/${image}` : undefined"
                :class="[
                    'slider-image absolute w-auto h-auto',
                    { active: index === currentIndex },
                ]"
                :loading="index === 0 ? 'eager' : 'lazy'"
                alt="Slide" />
        </div>

        <template v-if="isVisible">
            <button
                class="slider-btn left-0 white pa3 pointer br3 absolute"
                @click="prev"
                aria-label="Previous slide">
                &#10094;
            </button>
            <button
                class="slider-btn right-0 white pa3 pointer br3 absolute"
                @click="next"
                aria-label="Next slide">
                &#10095;
            </button>

            <div class="slider-dots absolute flex z-9">
                <span
                    v-for="(_, index) in images"
                    :key="index"
                    :class="['dot pointer', { active: index === currentIndex }]"
                    @click="goTo(index)"></span>
            </div>
        </template>
    </div>
</template>

<style scoped lang="scss">
.slider-container {
    .slider-image {
        object-fit: contain;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
        max-width: 100%;
        max-height: 100%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        &.active {
            opacity: 1;
        }
    }

    .slider-btn {
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0, 0, 0, 0.5);
        border: none;
        transition: background 0.3s;

        &:hover {
            background: rgba(0, 0, 0, 0.8);
        }
    }

    .slider-dots {
        bottom: 50px;
        left: 50%;
        transform: translateX(-50%);
        gap: 10px;
    }

    .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transition: background 0.3s;

        &.active {
            background: rgba(255, 255, 255, 1);
        }

        &:hover {
            background: rgba(255, 255, 255, 0.8);
        }
    }

    @media screen and (max-width: 768px) {
        height: 220px;
        width: 295px;
    }
}
</style>
