<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <section class="py-6 md:py-12 lg:py-24 flex justify-center">
    <div class="container px-4 md:px-6">
      <div class="flex flex-col items-center justify-center space-y-4 text-center">
        <div class="space-y-2">
          <h2 v-if="title" class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {{ title }}
          </h2>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <slot />
      </div>
      <div v-if="$slots.footer" class="card-footer">
        <slot name="footer" />
      </div>
    </div>
  </section>
</template>