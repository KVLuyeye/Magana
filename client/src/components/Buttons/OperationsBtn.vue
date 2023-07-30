<script setup lang="ts">
defineProps({
  description: String,
});
</script>
<template>
  <div class="flex h-full flex-col justify-center">
    <button class="m-2 rounded-full bg-[#1e1e1e] p-4 text-white shadow-lg">
      <slot />
    </button>
    <span class="text-center text-xs text-gray-500"> {{ description }} </span>
  </div>
</template>
