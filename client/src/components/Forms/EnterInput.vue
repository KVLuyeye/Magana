<script lang="ts" setup>
defineProps({
  label: String,
  inputType: String,
});
</script>

<template>
  <div class="mt-6 border border-solid border-black p-2 text-center">
    <label class="text-sm text-gray-500"> {{ label }} </label> <br />
    <input
      required
      :type="inputType"
      name="amount"
      class="mb-8 mt-4 w-[10em] rounded-lg rounded-b-none border-b-2 p-1 pl-2 pr-2 text-center text-2xl focus:outline-none active:outline-none"
    />
    <br />
    <slot />
  </div>
</template>
