<script lang="ts" setup>
defineProps({
  buttonName: String,
});
</script>

<template>
  <button class="w-[16em] rounded-3xl border-none bg-[#21452A] p-[0.75em] text-white">
    {{ buttonName }}
  </button>
</template>
