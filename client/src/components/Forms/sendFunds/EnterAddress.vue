<script lang="ts" setup>
import { useTransfer } from '@/stores/transactions';
import MainBtn from '@/components/Buttons/MainBtn.vue';

import { useRouter } from 'vue-router';

let transfer = useTransfer();

let router = useRouter();

function replaceRoute() {
  if (transfer.address === '') {
  } else {
    router.replace('confirm');
  }
}

setTimeout(() => {
  console.log(transfer.address);
}, 4000);
</script>

<template>
  <div class="mt-6 rounded-lg border border-solid p-4 text-center shadow-lg">
    <label class="text-sm text-gray-500"> Enter Address </label> <br />
    <input
      v-model="transfer.address"
      required
      type="text"
      name="amount"
      class="mb-8 mt-4 w-[10em] rounded-lg rounded-b-none border-b-2 p-1 pl-2 pr-2 text-center text-2xl focus:outline-none active:outline-none"
    />
    <br />
    <MainBtn value="Continue" @click="replaceRoute" />
  </div>
</template>
