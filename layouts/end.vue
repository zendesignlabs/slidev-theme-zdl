<script setup lang="ts">
const props = defineProps({
  website: { type: String, default: '' },
})
</script>

<template>
  <div class="slidev-layout zdl-slide zdl-end">
    <div class="zdl-end-body">
      <slot />
      <p v-if="website" class="zdl-end-sub">{{ website }}</p>
    </div>
    <div class="zdl-end-footer">
      <div class="zdl-end-dots">
        <span /><span /><span />
      </div>
    </div>
  </div>
</template>

<style scoped>
.zdl-end-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--zdl-space-4);
}

.zdl-end-dots {
  display: flex;
  flex-direction: row;
  gap: var(--zdl-dot-gap);
}

.zdl-end-dots span {
  display: block;
  width: var(--zdl-dot-size);
  height: var(--zdl-dot-size);
  border-radius: var(--zdl-radius-full);
}

.zdl-end-dots span:nth-child(1) { background: var(--zdl-dot-1); }
.zdl-end-dots span:nth-child(2) { background: var(--zdl-dot-2); }
.zdl-end-dots span:nth-child(3) { background: var(--zdl-dot-3); }
</style>
