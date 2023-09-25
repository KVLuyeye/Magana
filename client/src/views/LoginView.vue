<script lang="ts" setup>
import LoginForm from '@/components/Forms/LoginForm.vue';
import MainBtn from '@/components/Buttons/MainBtn.vue';
import SubmitBtn from '@/components/Buttons/SubmitBtn.vue';
import { ref } from 'vue';
import { useAuthenticationStore } from '@/stores/authentication';
import ProfileIcon from '@/assets/icons/ProfileIcon.vue';
import CloseIcon from '@/assets/icons/CloseIcon.vue';
import { reactive, watch } from 'vue';
import ArrowBackBtn from '@/components/Buttons/ArrowBackBtn.vue';
document.title = 'Log in';

// VARIABLES
let auth = useAuthenticationStore();
let model = ref('');
let dialog = ref(false);

let addressToName = {
  '0x5FbDB2315678afecb367f032d93F642f64180aa3': 'Joshua',
  '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0': 'Sara',
  '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9': 'Kaicey',
  '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9': 'Joël',
  '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512': 'Jan',
  '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707': 'Taylor',
};

let options = Object.values(addressToName);

// WATCHERS
// Watch for changes in the model value and update auth.loginID
watch(
  () => model.value,
  (selectedName) => {
    const ethereumAddress = Object.keys(addressToName).find((key) => addressToName[key] === selectedName);
    auth.loginID = ethereumAddress;
  },
);
</script>

<template>
  <header class="mx-4 my-2 flex items-center justify-between">
    <ArrowBackBtn />
    <button class="text-[#21452A]" @click="dialog = true">
      <ProfileIcon />
    </button>
  </header>
  <section class="flex min-h-screen flex-col items-center justify-start">
    <q-space />
    <LoginForm>
      {{ 'Welcome ' + model }}
    </LoginForm>
    <q-space />
    <q-space />

    <!-- DIALOG -->
    <q-dialog v-model="dialog" transition-show="slide-up" transition-hide="slide-down" class="">
      <div class="flex h-[10em] flex-col items-end rounded-xl bg-white p-4 text-[#1e1e1e]">
        <q-bar class="bg-white">
          <q-btn dense flat v-close-popup>
            <CloseIcon size="large" />
          </q-btn>
        </q-bar>

        <q-card-section>
          <q-select label="Select Account" v-model="model" :options="options" style="width: 250px" />
        </q-card-section>
      </div>
    </q-dialog>
  </section>

  <section></section>
</template>
