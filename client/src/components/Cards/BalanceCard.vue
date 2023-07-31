<script setup lang="ts">
import { ref } from "vue";

let totalBalance = ref();
</script>
<template>
  <section
    class="-black ml-4 mr-4 flex h-24 flex-col rounded-xl p-4 text-center text-xl shadow-xl"
  >
    <div v-if="totalBalance" class="flex flex-col">
      <span class="text-sm text-gray-400"> Total Balance </span>
      <span> {{ totalBalance }} USDC </span>
    </div>

    <div v-else class="flex flex-col">
      <p class="ml-20 mr-20 h-[0.55em] animate-pulse rounded-lg bg-[#eee]"></p>
      <p
        class="ml-16 mr-16 mt-4 h-[0.85em] animate-pulse rounded-md bg-[#eee]"
      ></p>
    </div>
  </section>
</template>
