<script setup lang="ts">
const props = defineProps({
  horizontal: { type: Boolean, default: false },
  size: { type: String, default: '10px' },
})
</script>

<template>
  <div
    class="zdl-dot-sig"
    :class="{ 'zdl-dot-sig--horizontal': horizontal }"
    :style="{ '--dot-size': size }"
  >
    <span class="zdl-dot zdl-dot--ember" />
    <span class="zdl-dot zdl-dot--spark" />
    <span class="zdl-dot zdl-dot--aura" />
  </div>
</template>

<style scoped>
.zdl-dot-sig {
  display: flex;
  flex-direction: column;
  gap: var(--zdl-dot-gap);
}

.zdl-dot-sig--horizontal {
  flex-direction: row;
}

.zdl-dot {
  display: block;
  width: var(--dot-size, var(--zdl-dot-size));
  height: var(--dot-size, var(--zdl-dot-size));
  border-radius: var(--zdl-radius-full);
}

.zdl-dot--ember { background: var(--zdl-dot-1); }
.zdl-dot--spark { background: var(--zdl-dot-2); }
.zdl-dot--aura { background: var(--zdl-dot-3); }
</style>
