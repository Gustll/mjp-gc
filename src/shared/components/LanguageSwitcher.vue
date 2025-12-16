<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import FlagSi from '~icons/circle-flags/si';
import FlagGb from '~icons/circle-flags/gb';

const { locale } = useI18n();

const languages = [
    { code: 'si', label: 'SI', icon: FlagSi },
    { code: 'en', label: 'EN', icon: FlagGb },
];

const currentLocale = computed({
    get: () => locale.value,
    set: (val) => {
        locale.value = val;
        localStorage.setItem('locale', val);
    },
});

function switchLanguage(code) {
    currentLocale.value = code;
}
</script>
<template>
    <div class="language-switcher flex">
        <button
            v-for="lang in languages"
            :key="lang.code"
            :class="['lang-btn', { active: currentLocale === lang.code }]"
            class="flex items-center br3 pointer"
            @click="switchLanguage(lang.code)">
            <component
                :is="lang.icon"
                class="flag-icon" />
            <span>{{ lang.label }}</span>
        </button>
    </div>
</template>

<style scoped lang="scss">
.language-switcher {
    gap: 8px;

    .lang-btn {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 8px 12px;
        border: 2px solid transparent;
        background: transparent;
        transition: all 0.2s;

        &:hover {
            background: hsl(0, 0%, 94%);
        }

        &.active {
            border: 2px solid var(--primary);
        }

        .flag-icon {
            width: 20px;
            height: 20px;
        }
    }
}
</style>
