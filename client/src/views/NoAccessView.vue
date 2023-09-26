<script lang="ts" setup>
import router from '@/router/routes';
import { useAuthenticationStore } from '@/stores/authentication';

let auth = useAuthenticationStore();
let alert = true;

setTimeout(() => {
  alert = false;
  router.replace('welcome').then(() => {
    window.location.reload();
  });
  console.log(auth.tokenHasExpired);
}, 3000);
</script>

<template>
  <q-dialog v-model="alert">
    <q-card class="p-6" v-if="auth.tokenHasExpired">You have been looged out, please login again.</q-card>
    <q-card class="p-6" v-else>Please login or sign up if you have not created an account yet.</q-card>
  </q-dialog>
</template>
