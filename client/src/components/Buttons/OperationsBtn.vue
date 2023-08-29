<script setup lang="ts">
defineProps({
  description: String,
});
</script>
<template>
  <div class="flex h-full flex-col justify-center">
    <button class="m-2 rounded-2xl bg-[#072313] p-4 text-white shadow-lg active:scale-110">
      <slot />
    </button>
    <span class="text-center text-xs text-gray-500"> {{ description }} </span>
  </div>
</template>
