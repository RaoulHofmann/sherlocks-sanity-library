<script setup lang="ts">
import { PortableText } from '@portabletext/vue'
import { SanityCardGrid } from "@/components/sanity-card-grid";
import { h } from "vue";
import type { CardGridType } from "@/types/sanity";

defineProps({content: Object})

const components = {
  types: {
    cardGridComponent: ({value}: {value: CardGridType}) => h(SanityCardGrid, { cards: value?.cards, heading: value?.heading }),
  },
}
</script>
<template>
  <PortableText :value="content" :components="components" />
</template>