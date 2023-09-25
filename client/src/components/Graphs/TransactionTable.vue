<script setup lang="ts">
import EmptyDivContainer from '@/components/Containers/EmptyDivContainer.vue';
import { ref, computed } from 'vue';
import { useProfile } from '@/stores/users';
import { useAccountStore } from '@/stores/account';
document.title = 'Debit';

//VARS
let user = useProfile();
let account = useAccountStore();

//METHODS
account.getTransactionsHistory();
</script>

<template>
  <q-scroll-area class="ml-4 mr-4 h-[25em] rounded-lg bg-white p-4 shadow-2xl">
    <div
      class="ml-6 mr-6 flex h-[7em] flex-col"
      v-for="transaction in account.transactionHistory"
      :key="transaction.id"
    >
      <div class="flex flex-row items-end justify-between pb-4 text-sm">
        <div>
          <span class="text-md">{{ user.shortenString(transaction.To) }}</span> <br />
          <span class="text-xs tracking-wider">{{ new Date(transaction.executed).toLocaleDateString('en-GB') }}</span>
          <br />
        </div>
        <span class="text-lg text-red-600"> - {{ transaction.Amount }} ETH</span>
      </div>
      <q-separator />
    </div>
  </q-scroll-area>
</template>
@/stores/users
