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
      <div class="ml-4 mr-4 flex h-[8em] flex-row items-center justify-between rounded-xl bg-white p-4 shadow-2xl">
        <span></span>
        <RouterLink to="/transfer/send/enterAmount">
          <OperationsBtn description="Send">
            <SendIcon class="text-xl" />
          </OperationsBtn>
        </RouterLink>
        <!-- <OperationsBtn description="Request">
          <RequestIcon class="text-xl" />
        </OperationsBtn> -->
        <span></span>
      </div>

      <h6 class="mb-2 ml-4 mt-[3em] w-full">Recent transactions</h6>
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
</style>
