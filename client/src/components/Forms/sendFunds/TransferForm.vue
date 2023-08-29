<script setup lang="ts">
import EmptyDivContainer from '@/components/Containers/EmptyDivContainer.vue';
import { useTransfer } from '@/stores/transactions';
import { ref } from 'vue';
import { RouterView } from 'vue-router';

let transfer = useTransfer();
</script>

<template>
  <section class="mb-28 ml-2 mr-2 flex h-[40em] flex-col items-center justify-start p-3">
    <Transition name="slide-left">
      <RouterView />
    </Transition>
  </section>
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

.flex {
  flex-wrap: nowrap !important;
}
</style>
@/stores/transactions
