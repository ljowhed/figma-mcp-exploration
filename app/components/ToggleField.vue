<script setup lang="ts">
const model = defineModel<boolean>({ default: true })

defineProps<{
  label: string
}>()
</script>

<template>
  <div class="toggle">
    <FormLabel :text="label" />
    <button class="toggle-row" type="button" :aria-pressed="model" @click="model = !model">
      <span class="switch" :class="{ off: !model }">
        <span class="knob" />
      </span>
      <span class="toggle-value">{{ model ? 'Active' : 'Inactive' }}</span>
    </button>
  </div>
</template>
