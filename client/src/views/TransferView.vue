<script setup lang="ts">
import BaseLayout from '@/Layouts/BaseLayout.vue';
import Header from '@/components/Header/MainHeader.vue';
import EmptyDivContainer from '@/components/Containers/EmptyDivContainer.vue';
import NavBar from '@/components/Nav/NavBar.vue';
import TransactionTable from '@/components/Graphs/TransactionTable.vue';
import OperationsBtn from '@/components/Buttons/OperationsBtn.vue';
import SendIcon from '@/assets/icons/SendIcon.vue';
import RequestIcon from '@/assets/icons/RequestIcon.vue';
document.title = 'Transactions';
</script>

<template>
  <BaseLayout>
    <template #header>
      <Header section-name="Transfers" />
    </template>

    <template #main>
      <!-- <div class="flex flex-row items-center justify-center"> -->
      <span class="flex flex-col items-center justify-center">
        <RouterLink to="/transfer/send/enterAmount" class="flex flex-col items-center justify-center">
          <OperationsBtn description="" class="shadow-2xl">
            <SendIcon class="text-xl" />
          </OperationsBtn>
        </RouterLink>
      </span>

      <!-- <span class="flex flex-col items-center justify-center">
        <RouterLink to="/transfer/send/enterAmount" class="flex flex-col items-center justify-center">
          <OperationsBtn description="" class="shadow-2xl">
            <SendIcon class="text-xl" />
          </OperationsBtn>
        </RouterLink>
      </span>

      <span class="flex flex-col items-center justify-center">
        <RouterLink to="/transfer/send/enterAmount" class="flex flex-col items-center justify-center">
          <OperationsBtn description="" class="shadow-2xl">
            <SendIcon class="text-xl" />
          </OperationsBtn>
        </RouterLink>
      </span> -->

      <q-separator class="mx-4" />

      <!-- </div> -->

      <h6 class="mb-2 ml-4 w-full">Recent transactions</h6>
      <TransactionTable />
    </template>

    <template #footer>
      <NavBar />
    </template>
  </BaseLayout>
</template>

<style scoped>
main {
  align-content: start !important;
}

.q-separator {
  margin-top: 3rem;
  margin-bottom: 3rem;
  margin-left: 1rem !important;
  margin-right: 1rem !important;
}
</style>
