<script lang="ts" setup>
import { useTransfer } from '@/stores/transactions';
import { useRouter } from 'vue-router';
import MainBtn from '@/components/Buttons/MainBtn.vue';
import ForwardIcon from '@/assets/icons/ForwardIcon.vue';
import CheckIcon from '@/assets/icons/CheckIcon.vue';
import CloseIcon from '@/assets/icons/CloseIcon.vue';

let transfer = useTransfer();
let router = useRouter();

function replaceRoute() {
  if (transfer.amount === '') {
  } else {
    router.replace('enterAddress');
  }
}
</script>

<template>
  <q-card class="mt-6 flex h-[35em] w-[95%] flex-col items-center justify-center rounded-lg p-4 text-center shadow-lg">
    <label class="text-sm text-gray-500"> Amount </label> <br />
    <input
      v-model="transfer.amount"
      required
      step=".01"
      type="number"
      name="amount"
      class="mb-8 mt-4 w-[10em] rounded-lg rounded-b-none border-b-2 p-1 pl-2 pr-2 text-center text-2xl focus:outline-none active:outline-none"
    />
    <br />

    <MainBtn value="Continue" @click="replaceRoute" />
  </q-card>
</template>
@/stores/transactions
