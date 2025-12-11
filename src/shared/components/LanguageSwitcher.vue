<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const currentLocale = computed({
  get: () => locale.value,
  set: (val) => {
    locale.value = val;
  },
});
</script>
<template>
  <select v-model="$i18n.locale" class="f4 fw5 bn pointer">
    <option value="si">🇸🇮 SI</option>
    <option value="en">🇬🇧 EN</option>
  </select>
</template>
