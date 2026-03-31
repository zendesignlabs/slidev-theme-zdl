<script setup lang="ts">
import { useSlideContext } from '@slidev/client'

const { $page } = useSlideContext()
</script>

<template>
  <div class="slidev-layout zdl-slide zdl-default">
    <div class="zdl-content">
      <slot />
    </div>
    <!-- Footer dots -->
    <div class="zdl-footer-dots">
      <span /><span /><span />
    </div>
    <div class="zdl-slide-number">{{ $page }}</div>
  </div>
</template>
