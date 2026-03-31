<script setup lang="ts">
const props = defineProps({
  author: { type: String, default: '' },
  title: { type: String, default: '' },
})
</script>

<template>
  <div class="slidev-layout zdl-slide zdl-quote">
    <div class="zdl-quote-box">
      <blockquote>
        <slot />
      </blockquote>
      <div v-if="author" class="zdl-attribution">
        <span>{{ author }}</span>
        <span v-if="title" class="zdl-attr-title"> — {{ title }}</span>
      </div>
    </div>
    <!-- Footer dots -->
    <div class="zdl-footer-dots">
      <span /><span /><span />
    </div>
  </div>
</template>

<style scoped>
.zdl-attr-title {
  color: var(--zdl-text-muted);
  font-style: italic;
  text-transform: none;
  letter-spacing: normal;
}
</style>
