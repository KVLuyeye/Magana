<script setup lang="ts">
import ArrowBackBtn from '../Buttons/ArrowBackBtn.vue';

defineProps({
  sectionName: String,
});
</script>

<template>
  <header class="flex h-[4em] items-center justify-between rounded-bl-xl rounded-br-xl bg-white pl-4 pr-4 pt-4">
    <ArrowBackBtn />

    <h1 class="w-[8em] text-center text-xl text-[#136207]">{{ sectionName }}</h1>
    <span class="w-[2em]"> </span>
  </header>
</template>
