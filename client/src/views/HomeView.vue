<script setup lang="ts">
import NavBar from '@/components/Nav/NavBar.vue';
import Header from '@/components/Header/MainHeader.vue';

import OperationsBtn from '@/components/Buttons/OperationsBtn.vue';

import { RouterLink, useRouter } from 'vue-router';
import BaseLayout from '@/Layouts/BaseLayout.vue';
import SendIcon from '@/assets/icons/SendIcon.vue';
import RequestIcon from '@/assets/icons/RequestIcon.vue';
import EmptyDivContainer from '@/components/Containers/EmptyDivContainer.vue';
import AccountCard from '@/components/Cards/AccountCard.vue';

document.title = 'Home';
</script>

<template>
  <BaseLayout>
    <template #header>
      <Header section-name="Home" />
    </template>

    <template #main>
      <AccountCard />
      <EmptyDivContainer />
      <!-- <div class="ml-4 mr-4 flex h-[6em] flex-row items-center justify-between rounded-xl bg-white p-4 shadow-2xl"> -->
      <span class="flex w-full flex-col items-center justify-center">
        <RouterLink to="/transfer/send/enterAmount" class="flex flex-col items-center justify-center">
          <OperationsBtn description="Send" class="shadow-2xl">
            <SendIcon class="text-xl" />
          </OperationsBtn>
        </RouterLink>
      </span>
      <!-- <OperationsBtn description="Request">
          <RequestIcon class="text-xl" />
        </OperationsBtn> -->
      <!-- </div> -->

      <EmptyDivContainer />
      <EmptyDivContainer />
    </template>

    <template #footer>
      <NavBar />
    </template>
  </BaseLayout>
</template>
