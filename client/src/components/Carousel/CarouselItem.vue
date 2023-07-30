<script lang="ts" setup>
import { useCarouselStore } from "@/stores/carousel";

let carousel = useCarouselStore();
</script>

<template>
  <div class="border border-solid border-black p-2 text-center">
    <slot />
  </div>
</template>
