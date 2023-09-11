<script setup lang="ts">
import BaseLayout from '@/Layouts/BaseLayout.vue';
import NestedHeader from '@/components/Header/NestedHeader.vue';
import ProfileIcon from '@/assets/icons/ProfileIcon.vue';
import EmptyDivContainer from '@/components/Containers/EmptyDivContainer.vue';
import { useProfile } from '@/stores/users';
import { RouterLink, useRoute } from 'vue-router';
import { ref, watchEffect, onBeforeMount } from 'vue';
//VARS
let contact = ref();

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
    <template #header>
      <NestedHeader section-name="Contact" />
    </template>

    <template #main v-if="contact">
      <q-card class="mb-2 ml-6 mr-6 flex h-full flex-col items-center justify-center p-2">
        <ProfileIcon size="xxx-large" />
        <span class="text-xl">{{ contact.Firstname }} {{ contact.Lastname }}</span>
      </q-card>
      <EmptyDivContainer />

      <q-card class="ml-6 mr-6 flex h-[25em] flex-col items-center justify-evenly p-2 text-center">
        <div class="w-full">
          <label class="block w-full text-left text-gray-500">SCA ID</label> <br />
          <span>{{ contact.SCA_ID }}</span>
        </div>

        <div class="w-full">
          <label class="block w-full text-left text-gray-500">Phone Number</label> <br />
          <span class="text-lg"> +{{ contact.Tel }}</span>
        </div>
      </q-card>
      <EmptyDivContainer />
    </template>
  </BaseLayout>
</template>
