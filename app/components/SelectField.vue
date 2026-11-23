<script setup lang="ts">
import type { Option } from '~/types/schedule'

const model = defineModel<string>({ default: '' })
const suffix = defineModel<string>('suffix', { default: '' })

defineProps<{
  label: string
  required?: boolean
  placeholder: string
  options: Option[]
  disabled?: boolean
  trailingIcon?: string
  suffixOptions?: Option[]
}>()
</script>

<template>
  <div class="field">
    <FormLabel :text="label" :required="required" :muted="disabled" />
    <div class="control" :class="{ disabled }">
      <select
        v-model="model"
        :disabled="disabled"
        :class="{ 'is-empty': !model }"
        :aria-label="label"
      >
        <option value="" disabled>
          {{ placeholder }}
        </option>
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
      <div v-if="suffixOptions?.length" class="control-icon">
        <img :src="trailingIcon || '/icons/icon-clock.svg'" width="20" height="20" alt="">
      </div>
      <div v-if="suffixOptions?.length" class="suffix">
        <select v-model="suffix" aria-label="Timezone">
          <option v-for="option in suffixOptions" :key="option.value" :value="option.value">
            {{ option.label }}
          </option>
        </select>
        <img src="/icons/icon-chevron-dark.svg" width="20" height="20" alt="">
      </div>
      <div v-else-if="!disabled" class="control-icon">
        <img src="/icons/icon-chevron.svg" width="20" height="20" alt="">
      </div>
    </div>
  </div>
</template>
