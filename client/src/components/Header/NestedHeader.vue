<script setup lang="ts">
import ArrowBackBtn from "../Buttons/ArrowBackBtn.vue";

defineProps({
  sectionName: String,
});
</script>

<template>
  <header class="flex h-[4em] items-center justify-between pl-4 pr-4 pt-4">
    <ArrowBackBtn />

    <h1 class="w-[4em] text-center text-xl">{{ sectionName }}</h1>
    <span class="w-[2em]"> </span>
  </header>
</template>
