<script setup lang="ts">
import EmptyDivContainer from "@/components/Containers/EmptyDivContainer.vue";
import { useTransferData } from "@/stores/transactions";
import { ref } from "vue";
import { RouterView } from "vue-router";

let transferData = useTransferData();
</script>

<template>
  <form
    @submit.prevent
    @submit="transferData.sendTransferData"
    class="ml-2 mr-2 flex h-[40em] flex-col items-center justify-start p-3"
  >
    <EmptyDivContainer />

    <Transition name="slide-left">
      <RouterView />
    </Transition>

    <EmptyDivContainer />
  </form>
</template>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.5s;
}

.slide-left-enter,
.slide-left-leave-to {
  transform: translateX(-100%);
}
</style>
@/stores/transactions
