<script setup lang="ts">
import BackwardsIcon from '@/assets/icons/BackwardIcon.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const goBack = () => {
  router.back();
};
</script>

<template>
  <button @click="goBack" class="text-xl text-green-900">
    <BackwardsIcon class="active:scale-105" />
  </button>
</template>
