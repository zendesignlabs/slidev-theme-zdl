<script setup lang="ts">
const props = defineProps({
  width: { type: String, default: '48px' },
  color: { type: String, default: '' },
})
</script>

<template>
  <div
    class="zdl-divider"
    :style="{
      width,
      background: color || undefined,
    }"
  />
</template>

<style scoped>
.zdl-divider {
  height: var(--zdl-border-stamp);
  background: var(--zdl-color-aura);
}
</style>
