<script setup lang="ts">
import { PortableText } from '@portabletext/vue'
import { SanityCardGrid } from "@/components/sanity-card-grid";
import { h } from "vue";
import type {CardGridType, TextImageType} from "@/types/sanity";
import { TextImage } from "@/components/text-image";

defineProps({content: Object})

const components = {
  reference: ({value}: { value: any }) => h('span', value?.title),
  types: {
    cardGridComponent: ({value}: { value: CardGridType }) => h(SanityCardGrid, {
      cards: value?.cards,
      heading: value?.heading
    }),
    textImage: ({value}: { value: TextImageType }) => h(TextImage, {
      img: value?.image?.asset?._ref, // Use .url instead of ._ref
      caption: value?.caption,
      content: value?.body
    })
  }
}
</script>
<template>
  <PortableText :value="content" :components="components" />
</template>