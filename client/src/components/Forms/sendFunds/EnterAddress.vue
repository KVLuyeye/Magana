<script lang="ts" setup>
import { useTransfer } from '@/stores/transactions';
import MainBtn from '@/components/Buttons/MainBtn.vue';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useProfile } from '@/stores/users';
//HOOKS
let user = useProfile();
let transfer = useTransfer();
let router = useRouter();
//VARS
let selectedName = ref('');
let model = ref(null);
let addressToName = {
  '0x5fbdb2315678afecb367f032d93f642f64180aa3': 'Joshua',
  '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0': 'Sara',
  '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9': 'Kaicey',
  '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9': 'Joël',
  '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512': 'Jan',
  '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707': 'Taylor',
};

let options = Object.values(addressToName);
options = removeOptionIfMatch(options, user.current.Firstname);
//FUNCTIONS
function replaceRoute() {
  if (transfer.address === '') {
  } else {
    router.replace('confirm');
  }
}
function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

function removeOptionIfMatch(options: string[], match: string): string[] {
  return options.filter((option) => option !== match);
}

//WATCHERS
watch(selectedName, (newName) => {
  if (newName) {
    transfer.address = Object.keys(addressToName).find((key) => addressToName[key] === newName) || '';
  }
});
</script>

<template>
  <q-card class="mt-6 flex h-[35em] w-[95%] flex-col items-center justify-evenly rounded-lg p-4 text-center shadow-lg">
    <div class="flex w-full flex-col items-center">
      <div class="mb-12 flex w-full justify-center">
        <q-select v-model="selectedName" :dense="true" :options="options" label="Select a contact" class="mb-8 w-3/6" />
      </div>
      <label class="w-3/6 text-sm text-gray-500">
        To <span class="text-black">{{ selectedName }}</span>
      </label>
    </div>
    <br />

    <MainBtn button-name="Continue" @click="replaceRoute" />
  </q-card>
</template>
@/stores/users
