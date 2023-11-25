<script setup lang="ts">
defineProps({
  description: String,
  click: String as any,
});
</script>
<template>
  <button class="m-2 rounded-2xl bg-[#072313] p-4 text-white shadow-lg active:scale-110" @click="click">
    <slot />
  </button>

  <span class="text-center text-xs text-gray-500"> {{ description }} </span>
</template>
