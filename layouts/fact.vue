<script setup lang="ts">
const props = defineProps({
  number: { type: String, default: '' },
  label: { type: String, default: '' },
})
</script>

<template>
  <div class="slidev-layout zdl-slide zdl-fact">
    <div v-if="number" class="zdl-fact-number">{{ number }}</div>
    <div v-if="label" class="zdl-fact-label">{{ label }}</div>
    <div class="zdl-fact-desc">
      <slot />
    </div>
    <!-- Footer dots -->
    <div class="zdl-footer-dots">
      <span /><span /><span />
    </div>
  </div>
</template>
