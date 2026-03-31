<script setup lang="ts">
import { useSlideContext } from '@slidev/client'

const { $page } = useSlideContext()
</script>

<template>
  <div class="slidev-layout zdl-slide zdl-two-cols">
    <div class="zdl-cols">
      <div class="zdl-col zdl-col-left">
        <slot name="default" />
      </div>
      <div class="zdl-col zdl-col-right">
        <slot name="right" />
      </div>
    </div>
    <!-- Footer dots -->
    <div class="zdl-footer-dots">
      <span /><span /><span />
    </div>
    <div class="zdl-slide-number">{{ $page }}</div>
  </div>
</template>

<style scoped>
.zdl-col-left {
  padding-right: var(--zdl-space-6);
  border-right: var(--zdl-border-thin) solid var(--zdl-border);
}

.zdl-col-right {
  padding-left: var(--zdl-space-6);
}
</style>
