<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

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

// Generate images array from prefix and count
const images = computed(() =>
    Array.from(
        { length: props.count },
        (_, i) => `${props.prefix}_${i + 1}.${props.extension}`,
    ),
);

const currentIndex = ref(0);
let autoplayTimer: number | null = null;

function next(): void {
    currentIndex.value = (currentIndex.value + 1) % images.value.length;
    resetAutoplay();
}

function prev(): void {
    currentIndex.value =
        currentIndex.value === 0
            ? images.value.length - 1
            : currentIndex.value - 1;
    resetAutoplay();
}

function goTo(index: number): void {
    currentIndex.value = index;
    resetAutoplay();
}

function startAutoplay(): void {
    autoplayTimer = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % images.value.length;
    }, 5000); // 5 seconds
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

onMounted(() => {
    startAutoplay();
});

onUnmounted(() => {
    stopAutoplay();
});
</script>

<template>
    <div class="relative w-100 h-100 overflow-hidden slider-container">
        <div class="w-100 h-100 relative">
            <img
                v-for="(image, index) in images"
                :key="index"
                :src="`/assets/${image}`"
                :class="[
                    'slider-image absolute w-auto h-auto',
                    { active: index === currentIndex },
                ]"
                alt="Slide" />
        </div>

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

        <!-- Optional: Dots indicator -->
        <div class="slider-dots absolute flex z-10">
            <span
                v-for="(_, index) in images"
                :key="index"
                :class="['dot pointer', { active: index === currentIndex }]"
                @click="goTo(index)"></span>
        </div>
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
        bottom: 20px;
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
    }

}
</style>
