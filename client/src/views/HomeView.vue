<script setup lang="ts">
import NavBar from '@/components/Nav/NavBar.vue';
import Header from '@/components/Header/MainHeader.vue';

import OperationsBtn from '@/components/Buttons/OperationsBtn.vue';

import { RouterLink, useRouter } from 'vue-router';
import BaseLayout from '@/Layouts/BaseLayout.vue';
import SendIcon from '@/assets/icons/SendIcon.vue';
import DepositIcon from '@/assets/icons/DepositIcon.vue';
import MainBtn from '@/components/Buttons/MainBtn.vue';
import RequestIcon from '@/assets/icons/RequestIcon.vue';
import EmptyDivContainer from '@/components/Containers/EmptyDivContainer.vue';
import AccountCard from '@/components/Cards/AccountCard.vue';
import DepositDialog from '@/components/dialogs/DepositDialog.vue';
import { ref } from 'vue';
import { useAccountStore } from '@/stores/account';

document.title = 'Home';
let dialog = ref(false);
let amount = ref('');

//HOOKS
let account = useAccountStore();

// setInterval(() => {
//   console.log(amount.value);
// }, 2000);
</script>

<template>
  <BaseLayout>
    <template #header>
      <Header section-name="Home" />
    </template>

    <template #main>
      <AccountCard />
      <EmptyDivContainer />
      <div class="flex h-[6em] flex-col items-center justify-center rounded-xl p-4">
        <span class="flex flex-col items-center justify-center">
          <RouterLink to="/transfer/send/enterAmount" class="flex flex-col items-center justify-center">
            <OperationsBtn description="Send" class="shadow-2xl">
              <SendIcon class="text-xl" />
            </OperationsBtn>
          </RouterLink>
        </span>

        <span class="flex flex-col items-center justify-center" @click="dialog = true">
          <!-- <RouterLink to="/transfer/send/enterAmount" class="flex flex-col items-center justify-center"> -->
          <OperationsBtn description="Deposit">
            <DepositIcon class="text-xl" />
          </OperationsBtn>
          <!-- </RouterLink> -->
        </span>

        <!-- <OperationsBtn description="Request">
          <RequestIcon class="text-xl" />
        </OperationsBtn> -->
      </div>
      <q-dialog v-model="dialog" transition-show="slide-up" transition-hide="slide-down">
        <q-card class="mt-6 flex h-[35em] w-[95%] flex-col items-center justify-center rounded-lg p-4 text-center">
          <label class="text-sm text-gray-500"> Amount </label> <br />
          <input
            required
            v-model="amount"
            step=".01"
            type="number"
            name="amount"
            class="mb-8 mt-4 w-[10em] rounded-lg rounded-b-none border-b-2 p-1 pl-2 pr-2 text-center text-2xl focus:outline-none active:outline-none"
          />
          <br />

          <MainBtn button-name="Deposit" @click="account.deposit(amount.toString())" />
        </q-card>
      </q-dialog>

      <EmptyDivContainer />
      <EmptyDivContainer />
    </template>

    <template #footer>
      <NavBar />
    </template>
  </BaseLayout>
</template>
