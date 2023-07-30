<script lang="ts" setup>
import { useCarouselStore } from "@/stores/carousel";

let carousel = useCarouselStore();
</script>

<template>
  <section class="flex flex-row border border-solid border-red-500">
    <slot />
  </section>
</template>
