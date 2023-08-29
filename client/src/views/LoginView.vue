<script lang="ts" setup>
import LoginForm from '@/components/Forms/LoginForm.vue';
import MainBtn from '@/components/Buttons/MainBtn.vue';
import SubmitBtn from '@/components/Buttons/SubmitBtn.vue';
import { ref } from 'vue';
import { useAuthenticationStore } from '@/stores/authentication';
import ProfileIcon from '@/assets/icons/ProfileIcon.vue';
import CloseIcon from '@/assets/icons/CloseIcon.vue';
import { reactive, watch } from 'vue';
document.title = 'Log in';

// VARIABLES
let auth = useAuthenticationStore();
let model = ref('');
let dialog = ref(false);
let options = ['0x5fbdb2315678afecb367f032d93f642f64180aa3', '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0'];

// WATCHERS
// Watch for changes in the model value and update auth.loginID
watch(
  () => model.value,
  (newValue) => {
    auth.loginID = newValue;
  },
);
</script>

<template>
  <header>
    <button class="ml-2 mt-2 text-[#21452A]" @click="dialog = true">
      <ProfileIcon />
    </button>
  </header>
  <section class="flex min-h-screen flex-col items-center justify-start">
    <q-space />
    <LoginForm>
      {{ model }}
    </LoginForm>
    <q-space />
    <q-space />

    <!-- DIALOG -->
    <q-dialog v-model="dialog" transition-show="slide-up" transition-hide="slide-down">
      <q-card class="text-[#1e1e1e]">
        <q-bar>
          <q-space />

          <q-btn dense flat v-close-popup>
            <CloseIcon size="large" />
          </q-btn>
        </q-bar>

        <q-card-section>
          <q-select label="Select Account" v-model="model" :options="options" style="width: 250px" />
        </q-card-section>
      </q-card>
    </q-dialog>
  </section>

  <section></section>
</template>
