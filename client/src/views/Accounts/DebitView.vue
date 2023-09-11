<script setup lang="ts">
import BaseLayout from '@/Layouts/BaseLayout.vue';
import NestedHeader from '@/components/Header/NestedHeader.vue';
import EmptyDivContainer from '@/components/Containers/EmptyDivContainer.vue';
import { ref, computed } from 'vue';
import { useProfile } from '@/stores/users';
import { useAccountStore } from '@/stores/account';
document.title = 'Debit';

//VARS
let user = useProfile();
let account = useAccountStore();

//COMPUTED
let balance = computed(() => account.info.balance);

//METHODS
account.getTransactionsHistory();
</script>

<template>
  <BaseLayout>
    <template #header>
      <NestedHeader :section-name="user.SCA_ID_short" />
    </template>

    <template #main>
      <q-card class="ml-4 mr-4 h-24">
        <q-card-section class="text-2xl tracking-wider">
          <span class="text-xs text-gray-400">Account balance</span> <br />
          {{ balance }} ETH
        </q-card-section>
      </q-card>
      <EmptyDivContainer />

      <q-scroll-area class="ml-4 mr-4 h-[35em] rounded-lg bg-white p-4">
        <div
          class="ml-6 mr-6 flex h-[7em] flex-col"
          v-for="transaction in account.transactionHistory"
          :key="transaction.id"
        >
          <div class="flex flex-row items-end justify-between pb-4 text-sm">
            <div>
              <span class="text-md">{{ user.shortenString(transaction.To) }}</span> <br />
              <span class="text-xs tracking-wider">{{
                new Date(transaction.executed).toLocaleDateString('en-GB')
              }}</span>
              <br />
            </div>
            <span class="text-lg"> - {{ transaction.Amount }} ETH</span>
          </div>
          <q-separator />
        </div>
      </q-scroll-area>
    </template>
  </BaseLayout>
</template>
@/stores/users
