<script setup lang="ts">
import NavBar from "@/components/Nav/NavBar.vue";
import Header from "@/components/Header/MainHeader.vue";

import BalanceCard from "@/components/Cards/BalanceCard.vue";
import OperationsCard from "@/components/Cards/OperationsCard.vue";
import OperationsBtn from "@/components/Buttons/OperationsBtn.vue";

import { RouterLink, useRouter } from "vue-router";
import BaseLayout from "@/Layouts/BaseLayout.vue";
import { onMounted, ref } from "vue";
import SendIcon from "@/assets/icons/SendIcon.vue";
import RequestIcon from "@/assets/icons/RequestIcon.vue";

document.title = "Home";

const isContentLoaded = ref(false);

onMounted(() => {
  /**  window.onload = () => {
    // DOM content is loaded, switch to BaseLayout
    isContentLoaded.value = true;
  }; */

  addEventListener("DOMContentLoaded", () => {
    isContentLoaded.value = true;
  });
});
</script>

<template>
  <BaseLayout>
    <template #header>
      <Header section-name="Home" />
    </template>

    <template #main>
      <BalanceCard />

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

      <section class="h-[15em]"></section>
    </template>

    <template #footer>
      <NavBar />
    </template>
  </BaseLayout>
</template>
