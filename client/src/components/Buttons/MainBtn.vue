<script lang="ts" setup>
defineProps({
  value: String,
});
</script>

<template>
  <button
    class="w-[16em] rounded-3xl border-none bg-[#136207] p-[0.75em] text-white"
  >
    {{ value }}
  </button>
</template>
