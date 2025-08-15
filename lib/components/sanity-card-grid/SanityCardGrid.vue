<script setup lang="ts">
import type { SimpleCardType, CardType} from '@/types/sanity';
import { CardGrid } from '@/components/card-grid';
import { Card } from '@/components/card';
import { CardTitle } from '@/components/card-title';

defineProps<{
  cards?: Array<SimpleCardType | CardType>
  heading?: string
}>()
</script>

<template>
  <div>
    <h2 v-if="heading">{{ heading }}</h2>
    <CardGrid>
      <Card v-for="card in cards" :key="card.title" :title="card?.title"
            class="flex justify-center text-center magnifying-glass-border">
        <CardTitle v-if="card.title" class="flex items-center justify-center gap-3 mb-3 card-title">
          {{ card.title }}
        </CardTitle>
        <CardContent v-if="card.description">
          {{ card.description }}
        </CardContent>
      </Card>
    </CardGrid>
  </div>
</template>

<style scoped>

</style>