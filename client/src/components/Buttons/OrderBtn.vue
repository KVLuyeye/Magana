<script setup lang="ts">
defineProps({
  value: String,
});
</script>

<template>
  <button class="border-thin rounded-2xl border border-black p-[0.25em]">
    {{ value }}
  </button>
</template>
