<script setup lang="ts">
defineProps<{
  text: string
  required?: boolean
  muted?: boolean
}>()
</script>

<template>
  <p class="label-row">
    <span class="label-text" :class="{ muted }">{{ text }}</span>
    <span v-if="required" class="req" aria-hidden="true">*</span>
  </p>
</template>
