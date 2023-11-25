<script setup>
import MainBtn from '@/components/Buttons/MainBtn.vue';
import { ref } from 'vue';
import { useAccountStore } from '@/stores/account';
defineProps({
  buttonName: String,
  show: Boolean,
  amount: String,
});

let account = useAccountStore();
</script>

<template>
  <q-dialog v-model="show" transition-show="slide-up" transition-hide="slide-down">
    <q-card class="mt-6 flex h-[35em] w-[95%] flex-col items-center justify-center rounded-lg p-4 text-center">
      <h2>Please Enter the Amount you would like to Deposit</h2>
      <label class="text-sm text-gray-500"> Amount </label> <br />
      <input
        required
        @input="amount"
        step=".01"
        type="text"
        name="amount"
        class="mb-8 mt-4 w-[10em] rounded-lg rounded-b-none border-b-2 p-1 pl-2 pr-2 text-center text-2xl focus:outline-none active:outline-none"
      />
      <br />

      <MainBtn :buttonName="buttonName" @click="account.deposit(amount)" />
    </q-card>
  </q-dialog>
</template>
