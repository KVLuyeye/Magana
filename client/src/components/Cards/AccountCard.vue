<script setup lang="ts">
import ForwardIcon from '@/assets/icons/ForwardIcon.vue';
import { useAccountStore } from '@/stores/account';
import { useProfile } from '@/stores/users';
import { useRoutingStore } from '@/stores/routing';
import { watch } from 'vue';
import { computed, onMounted } from 'vue';

let user = useProfile();
let router = useRoutingStore();
let debit = 'accounts/debit';

let account = useAccountStore();

onMounted(() => {
  account.getBalance();
});

let balance = computed(() => account.info.balance);

watch(balance, (balance) => {
  account.getBalance();
});
</script>

<template>
  <div
    class="mb-4 ml-4 mr-4 flex h-24 flex-col rounded-xl bg-white p-4 shadow-2xl active:scale-95"
    @click="router.goTo(debit)"
  >
    <span class="mb-2 flex items-center justify-between text-xs text-green-900">
      {{ user.SCA_ID_short }}
      <ForwardIcon />
    </span>

    <span class="text-xl tracking-wider" v-if="balance"> {{ '$' + balance }} </span>
  </div>
</template>
@/stores/users
