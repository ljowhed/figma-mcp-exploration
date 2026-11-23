<script setup lang="ts">
import type { Option } from '~/types/schedule'

const model = defineModel<string>({ required: true })

defineProps<{
  label: string
  required?: boolean
  name: string
  options: Option[]
}>()
</script>

<template>
  <fieldset class="field radio-field">
    <FormLabel :text="label" :required="required" />
    <div class="radio-row">
      <label
        v-for="option in options"
        :key="option.value"
        class="chip"
        :class="{ selected: model === option.value }"
      >
        <input
          v-model="model"
          type="radio"
          :name="name"
          :value="option.value"
        >
        <img
          :src="model === option.value ? '/icons/radio-checked.svg' : '/icons/radio-unchecked.svg'"
          width="20"
          height="20"
          alt=""
        >
        <span>{{ option.label }}</span>
      </label>
    </div>
  </fieldset>
</template>

<style scoped>
fieldset {
  border: 0;
  margin: 0;
  padding: 0;
  min-width: 0;
}
</style>
