<script setup lang="ts">
import BaseLayout from '@/Layouts/BaseLayout.vue';
import AccountCard from '@/components/Cards/AccountCard.vue';
import Header from '@/components/Header/MainHeader.vue';
import NavBar from '@/components/Nav/NavBar.vue';
import OperationsBtn from '@/components/Buttons/OperationsBtn.vue';
import SendIcon from '@/assets/icons/SendIcon.vue';
import DepositIcon from '@/assets/icons/DepositIcon.vue';
import EmptyDivContainer from '@/components/Containers/EmptyDivContainer.vue';
import MainBtn from '@/components/Buttons/MainBtn.vue';
import { useRoutingStore } from '@/stores/routing';
import { ref } from 'vue';
document.title = 'Accounts';

let router = useRoutingStore();

let dialog = ref(false);

//METHODS
</script>

<template>
  <BaseLayout>
    <template #header>
      <Header section-name="Accounts" />
    </template>

    <template #main>
      <section class="flex flex-col">
        <AccountCard />
      </section>
      <EmptyDivContainer />

      <span class="flex flex-col items-center justify-center" @click="dialog = true">
        <!-- <RouterLink to="/transfer/send/enterAmount" class="flex flex-col items-center justify-center"> -->
        <OperationsBtn description="Deposit">
          <DepositIcon class="text-xl" />
        </OperationsBtn>
        <!-- </RouterLink> -->
      </span>

      <q-dialog v-model="dialog" transition-show="slide-up" transition-hide="slide-down">
        <q-card class="mt-6 flex h-[35em] w-[95%] flex-col items-center justify-center rounded-lg p-4 text-center">
          <label class="text-sm text-gray-500"> Amount </label> <br />
          <input
            required
            step=".01"
            type="number"
            name="amount"
            class="mb-8 mt-4 w-[10em] rounded-lg rounded-b-none border-b-2 p-1 pl-2 pr-2 text-center text-2xl focus:outline-none active:outline-none"
          />
          <br />

          <MainBtn button-name="Deposit" @click="" />
        </q-card>
      </q-dialog>
      <EmptyDivContainer />
    </template>

    <template #footer>
      <NavBar />
    </template>
  </BaseLayout>
</template>
