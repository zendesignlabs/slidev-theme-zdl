<script setup lang="ts">
const props = defineProps({
  color: { type: String, default: '' },
})
</script>

<template>
  <span class="zdl-stamp-label" :style="{ color: color || undefined }">
    <slot />
  </span>
</template>

<style scoped>
.zdl-stamp-label {
  text-transform: uppercase;
  letter-spacing: var(--zdl-tracking-stamp);
  font-weight: var(--zdl-weight-medium);
  font-size: var(--zdl-text-sm);
  color: var(--zdl-color-aura);
}
</style>
