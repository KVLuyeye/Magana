<script lang="ts" setup>
defineProps({
  value: String,
});
</script>

<template>
  <input
    type="submit"
    :value="value"
    class="w-[16em] rounded-3xl border-none bg-[#136207] p-[0.75em] text-white"
  />
</template>
