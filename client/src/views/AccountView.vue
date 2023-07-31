<script setup lang="ts">
import BaseLayout from "@/Layouts/BaseLayout.vue";
import AccountCard from "@/components/Cards/AccountCard.vue";
import BalanceCard from "@/components/Cards/BalanceCard.vue";
import Header from "@/components/Header/MainHeader.vue";
import NavBar from "@/components/Nav/NavBar.vue";
import BalanceDoughnut from "@/components/Graphs/BalanceDoughnut.vue";
import EmptyDivContainer from "@/components/Containers/EmptyDivContainer.vue";
import { useRoutingStore } from "@/stores/routing";
import { ref } from "vue";
document.title = "Accounts";

let router = useRoutingStore();

let debit = "accounts/debit";
let value1 = ref(1);
let value2 = ref(549);
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
      <EmptyDivContainer />
      <EmptyDivContainer />
      <EmptyDivContainer />
    </template>

    <template #footer>
      <NavBar />
    </template>
  </BaseLayout>
</template>
