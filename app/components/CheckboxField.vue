<script setup lang="ts">
const model = defineModel<boolean>({ default: false })

defineProps<{
  label: string
  help: string
}>()
</script>

<template>
  <div class="check">
    <label class="check-row">
      <input v-model="model" type="checkbox">
      <img v-if="!model" src="/icons/checkbox.svg" width="20" height="20" alt="">
      <span v-else class="check-on" />
      <span class="check-label">{{ label }}</span>
    </label>
    <p class="check-help">
      {{ help }}
    </p>
  </div>
</template>
