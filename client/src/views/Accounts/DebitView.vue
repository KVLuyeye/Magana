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
      <div class="ml-4 mr-4 h-24 rounded-xl bg-white shadow-2xl">
        <q-card-section class="text-2xl tracking-widest">
          <span class="text-xs text-gray-400">Balance</span> <br />
          ${{ balance }}
        </q-card-section>
      </div>
      <EmptyDivContainer />

      <q-scroll-area class="h-[35em] rounded-xl bg-white p-4 tracking-widest shadow-2xl">
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
            <span class="text-lg"> - ${{ transaction.Amount }}</span>
          </div>
          <q-separator />
        </div>
      </q-scroll-area>
    </template>
  </BaseLayout>
</template>
@/stores/users
