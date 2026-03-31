<script setup lang="ts">
const props = defineProps({
  label: { type: String, default: '' },
})
</script>

<template>
  <div class="slidev-layout zdl-slide zdl-section">
    <div class="zdl-divider-bar" />
    <div v-if="label" class="zdl-section-label">{{ label }}</div>
    <slot />
    <!-- Three-dot signature -->
    <div class="zdl-section-dots">
      <span /><span /><span />
    </div>
  </div>
</template>

<style scoped>
.zdl-divider-bar {
  width: 48px;
  height: var(--zdl-border-stamp);
  background: var(--zdl-color-aura);
}

.zdl-section-dots {
  position: absolute;
  bottom: var(--zdl-space-12);
  right: var(--zdl-space-16);
  display: flex;
  flex-direction: column;
  gap: var(--zdl-dot-gap);
}

.zdl-section-dots span {
  display: block;
  width: var(--zdl-dot-size);
  height: var(--zdl-dot-size);
  border-radius: var(--zdl-radius-full);
}

.zdl-section-dots span:nth-child(1) { background: var(--zdl-dot-1); }
.zdl-section-dots span:nth-child(2) { background: var(--zdl-dot-2); }
.zdl-section-dots span:nth-child(3) { background: var(--zdl-dot-3); }
</style>
