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
      <q-card class="ml-4 mr-4 flex h-[8em] flex-row items-center justify-between rounded-xl p-4 shadow-xl">
        <span></span>
        <RouterLink to="/transfer/send/enterAmount">
          <OperationsBtn description="Send">
            <SendIcon class="text-xl" />
          </OperationsBtn>
        </RouterLink>
        <OperationsBtn description="Request">
          <RequestIcon class="text-xl" />
        </OperationsBtn>
        <span></span>
      </q-card>

      <EmptyDivContainer />

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
