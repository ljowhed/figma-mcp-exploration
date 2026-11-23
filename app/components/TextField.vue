<script setup lang="ts">
defineProps<{
  label: string
  placeholder: string
  modelValue?: string
}>()
</script>

<template>
  <div class="field">
    <FormLabel :text="label" muted />
    <div class="control disabled">
      <input
        :value="modelValue"
        :placeholder="placeholder"
        disabled
        :aria-label="label"
      >
    </div>
  </div>
</template>
