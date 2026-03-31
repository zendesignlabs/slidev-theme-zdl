<script setup lang="ts">
const props = defineProps({
  hover: { type: Boolean, default: true },
})
</script>

<template>
  <div class="zdl-stamp-card" :class="{ 'zdl-stamp-card--hover': hover }">
    <slot />
  </div>
</template>

<style scoped>
.zdl-stamp-card {
  border: var(--zdl-border-stamp) solid var(--zdl-text);
  box-shadow: var(--zdl-shadow-stamp);
  padding: var(--zdl-space-6);
  background: var(--zdl-bg);
  transition: box-shadow 0.15s;
}

.zdl-stamp-card--hover:hover {
  box-shadow: var(--zdl-shadow-stamp-accent);
}
</style>
