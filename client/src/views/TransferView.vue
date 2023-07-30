<script setup lang="ts">
import BaseLayout from "@/Layouts/BaseLayout.vue";
import Header from "@/components/Header/MainHeader.vue";

import NavBar from "@/components/Nav/NavBar.vue";
import TransactionTable from "@/components/Graphs/TransactionTable.vue";
import OperationsCard from "@/components/Cards/OperationsCard.vue";
import OperationsBtn from "@/components/Buttons/OperationsBtn.vue";
import SendIcon from "@/assets/icons/SendIcon.vue";
import RequestIcon from "@/assets/icons/RequestIcon.vue";
document.title = "Transactions";
</script>

<template>
  <BaseLayout>
    <template #header>
      <Header section-name="Transfers" />
    </template>

    <template #main>
      <OperationsCard>
        <span></span>
        <RouterLink to="/transfer/send/selectAccount">
          <OperationsBtn description="Send">
            <SendIcon class="text-xl" />
          </OperationsBtn>
        </RouterLink>
        <OperationsBtn description="Request">
          <RequestIcon class="text-xl" />
        </OperationsBtn>
        <span></span>
      </OperationsCard>

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
