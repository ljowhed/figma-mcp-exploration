<script setup lang="ts">
const model = defineModel<number | null>({ default: null })

defineProps<{
  label: string
  required?: boolean
  placeholder: string
}>()

function onInput(event: Event) {
  const raw = (event.target as HTMLInputElement).value
  if (raw === '') {
    model.value = null
    return
  }
  const next = Number(raw)
  model.value = Number.isFinite(next) ? Math.max(0, Math.trunc(next)) : null
}

function decrease() {
  if (model.value === null || model.value <= 0) {
    model.value = null
    return
  }
  model.value -= 1
}

function increase() {
  model.value = (model.value ?? 0) + 1
}
</script>

<template>
  <div class="field">
    <FormLabel :text="label" :required="required" />
    <div class="control">
      <input
        :value="model ?? ''"
        type="text"
        inputmode="numeric"
        :placeholder="placeholder"
        :aria-label="label"
        @input="onInput"
      >
      <div class="stepper">
        <button class="step-btn minus" type="button" aria-label="Decrease quota" @click="decrease">
          <img src="/icons/icon-minus.svg" width="16" height="16" alt="">
        </button>
        <button class="step-btn plus" type="button" aria-label="Increase quota" @click="increase">
          <img src="/icons/icon-plus.svg" width="16" height="16" alt="">
        </button>
      </div>
    </div>
  </div>
</template>
