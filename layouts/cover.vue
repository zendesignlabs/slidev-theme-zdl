<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  subtitle: { type: String, default: '' },
  author: { type: String, default: '' },
  date: { type: String, default: '' },
})
</script>

<template>
  <div class="slidev-layout zdl-slide zdl-cover">
    <div class="zdl-cover-content">
      <div class="zdl-divider-bar" />
      <div class="zdl-cover-body">
        <slot />
        <p v-if="subtitle" class="zdl-subtitle">{{ subtitle }}</p>
      </div>
    </div>
    <div class="zdl-meta">
      <span v-if="author">{{ author }}</span>
      <span v-if="date">{{ date }}</span>
    </div>
    <!-- Three-dot signature -->
    <div class="zdl-cover-dots">
      <span /><span /><span />
    </div>
  </div>
</template>

<style scoped>
.zdl-cover-content {
  display: flex;
  align-items: flex-start;
  gap: var(--zdl-space-8);
  flex: 1;
}

.zdl-divider-bar {
  width: var(--zdl-border-stamp);
  min-height: 80px;
  background: var(--zdl-color-aura);
  flex-shrink: 0;
  margin-top: 8px;
}

.zdl-cover-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
}

.zdl-cover-dots {
  position: absolute;
  top: var(--zdl-space-12);
  right: var(--zdl-space-16);
  display: flex;
  flex-direction: column;
  gap: var(--zdl-dot-gap);
}

.zdl-cover-dots span {
  display: block;
  width: var(--zdl-dot-size);
  height: var(--zdl-dot-size);
  border-radius: var(--zdl-radius-full);
}

.zdl-cover-dots span:nth-child(1) { background: var(--zdl-dot-1); }
.zdl-cover-dots span:nth-child(2) { background: var(--zdl-dot-2); }
.zdl-cover-dots span:nth-child(3) { background: var(--zdl-dot-3); }
</style>
