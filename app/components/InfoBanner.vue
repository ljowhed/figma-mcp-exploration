<script setup lang="ts">
defineProps<{
  count: number
  limit?: number
}>()
</script>

<template>
  <div class="banner" role="status">
    <div class="banner-copy">
      <img src="/icons/icon-info.svg" width="24" height="24" alt="">
      <p class="banner-text">
        Add up to <strong>{{ limit ?? 3 }}</strong> teacher/staff members based on the set limit.
      </p>
    </div>
    <span class="counter">
      <span class="counter-value">{{ count }}</span><span class="counter-limit">/{{ limit ?? 3 }}</span>
    </span>
  </div>
</template>
