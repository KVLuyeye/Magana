<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useTransfer } from '@/stores/transactions';
import { useProfile } from '@/stores/users';
import CloseIcon from '@/assets/icons/CloseIcon.vue';
import ForwardIcon from '@/assets/icons/ForwardIcon.vue';
import CheckIcon from '@/assets/icons/CheckIcon.vue';
import { ref } from 'vue';

//VARS
let transfer = useTransfer();
let isTransactionInProgress = ref(false);
let router = useRouter();
let user = useProfile();
let failed = ref(false);

//METHODS
async function transferFunds() {
  isTransactionInProgress.value = true;
  await transfer.send();

  if (transfer.isResponseOkay) {
    router.replace('success');
    setTimeout(() => {
      router.back();
    }, 2500);
    isTransactionInProgress.value = false;
  } else {
    isTransactionInProgress.value = false;
    failed.value = true;
    transfer.address = '';
    transfer.amount = '';
    const reason = transfer.error.match(/reason="(.*?)"/);
    if (reason) {
      console.log(reason[1]);
    }
    if (reason[1] == 'Insufficient balance') {
      transfer.error =
        'The transaction has failed due to insufficient balance. Please try again with a lower amount or add more funds to your account.';
    }
  }
}
</script>

<template>
  <q-card class="mb-8 mt-2 flex h-[25em] w-full flex-col justify-center p-2 text-center">
    <q-card-section class="flex h-full flex-col justify-around">
      <span class="text-xl">
        <h6 class="text-left text-sm text-gray-400">Amount:</h6>
        {{ transfer.amount }}
      </span>

      <q-separator />
      <span class="text-xl">
        <h6 class="text-left text-sm text-gray-400">Address:</h6>
        {{ user.shortenString(transfer.address) }}
      </span>
    </q-card-section>
  </q-card>

  <!-- Slider -->
  <div class="w-3/4">
    <q-slide-item
      @left="transferFunds"
      @right="router.back()"
      left-color="green"
      right-color="red"
      class="h-12 rounded-full"
    >
      <template v-slot:left>
        <span class="flex w-full items-center justify-center text-center">
          <CheckIcon class="text-lg" />
        </span>
      </template>
      <template v-slot:right>
        <span class="flex w-full items-center justify-center text-center">
          <CloseIcon class="text-lg" />
        </span>
      </template>

      <q-item class="h-2 rounded-l-none border-none bg-[#1E1E1E] p-[0.75em] text-white">
        <q-item-section class="h-8 w-full">
          <span class="flex flex-row items-center justify-start text-center">
            <ForwardIcon class="ml-2 mr-8 rounded-full p-2 text-lg" />
            Slide to send
          </span>
        </q-item-section>
      </q-item>
    </q-slide-item>
  </div>

  <q-dialog v-model="failed">
    <q-card class="w-[25em]">
      <q-card-section>
        <div class="text-h6 text-red-600">The transaction has failed</div>
      </q-card-section>

      <q-card-section>
        <p>
          {{ transfer.error }}
        </p>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup @click="router.back()" />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <section
    class="absolute top-0 flex h-full w-full items-center justify-center bg-slate-300 opacity-70"
    v-if="isTransactionInProgress"
  >
    <q-circular-progress indeterminate rounded size="50px" color="black" class="q-ma-md" />
  </section>
</template>
