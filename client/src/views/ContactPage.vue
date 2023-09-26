<script setup lang="ts">
import BaseLayout from '@/Layouts/BaseLayout.vue';
import NestedHeader from '@/components/Header/NestedHeader.vue';
import ProfileIcon from '@/assets/icons/ProfileIcon.vue';
import CopyIcon from '@/assets/icons/CopyIcon.vue';

import EmptyDivContainer from '@/components/Containers/EmptyDivContainer.vue';
import { useProfile } from '@/stores/users';
import { RouterLink, useRoute } from 'vue-router';
import { ref, watchEffect, onBeforeMount } from 'vue';
//VARS
let contact = ref();

//METHODS
function shortenString(str: string) {
  if (str.length <= 7) {
    // If the string is already short or has 7 or fewer characters, return it as it is
    return str;
  } else {
    // Shorten the string by taking the first two characters and the last five characters
    return str.slice(0, 2) + '...' + str.slice(-5);
  }
}

function copy() {
  navigator.clipboard.writeText(user.current.SCA_ID);
}

//HOOKS
let user = useProfile();
let router = useRoute();

onBeforeMount(async () => {
  contact.value = await user.findUser(router.params.id);
  console.log(contact.value);
});
</script>

<template>
  <BaseLayout>
    <template #header v-if="contact">
      <NestedHeader :section-name="contact.Firstname" />
    </template>

    <template #main v-if="contact">
      <div class="mb-2 ml-6 mr-6 flex h-full flex-col items-center justify-center rounded-xl bg-white p-2 shadow-2xl">
        <label class="block w-full text-left text-[#136207]">Full Name</label> <br />
        <span class="text-xl">{{ contact.Firstname }} {{ contact.Lastname }}</span>
      </div>
      <EmptyDivContainer />

      <section
        class="ml-6 mr-6 flex h-[25em] flex-col items-center justify-evenly rounded-xl bg-white p-2 px-6 text-center shadow-2xl"
      >
        <div class="w-full border-b-2 border-gray-300 pb-12">
          <label class="block w-full text-left text-[#136207]">SCA ID</label> <br />
          <span class="flex flex-row items-center justify-center text-xl">
            {{ shortenString(contact.SCA_ID) }} <button @click="copy"><CopyIcon class="text-[#136207]" /></button>
          </span>
        </div>

        <div class="w-full">
          <label class="block w-full text-left text-[#136207]">Phone Number</label> <br />
          <span class="text-lg"> +{{ contact.Tel }}</span>
        </div>
      </section>
      <EmptyDivContainer />
    </template>
  </BaseLayout>
</template>
