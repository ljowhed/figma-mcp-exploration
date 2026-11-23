<script setup lang="ts">
defineProps<{
  title: string
  icon: string
  iconWidth?: number
  iconHeight?: number
}>()
</script>

<template>
  <section class="card">
    <header class="card-head">
      <span class="card-icon">
        <img
          :src="icon"
          :width="iconWidth ?? 20"
          :height="iconHeight ?? 20"
          alt=""
        >
      </span>
      <h2>{{ title }}</h2>
    </header>
    <div class="card-body">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.card {
  width: 100%;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.card-head {
  display: flex;
  align-items: center;
  gap: 12px;
}

.card-icon {
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.card-head h2 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.12px;
  color: var(--heading);
}

@media (max-width: 560px) {
  .card {
    padding: 16px;
  }
}
</style>
