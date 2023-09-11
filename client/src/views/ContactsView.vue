<script setup lang="ts">
import BaseLayout from '@/Layouts/BaseLayout.vue';
import NestedHeader from '@/components/Header/NestedHeader.vue';
import DotsIcon from '@/assets/icons/DotsIcon.vue';
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { useProfile } from '@/stores/users';
import { onBeforeMount } from 'vue';

//VARS
let searchText = ref('');
let users = useProfile();

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

onBeforeMount(() => {
  users.findAllUsers();
});
</script>

<template>
  <BaseLayout>
    <template #header>
      <NestedHeader section-name="My Contacts" />
    </template>

    <template #main>
      <q-input rounded outlined clearable label="Search by number or name" v-model="searchText" class="ml-4 mr-4" />

      <section class="mt-12">
        <q-scroll-area class="ml-4 mr-4 h-[35em] rounded-lg bg-white p-4">
          <div class="ml-6 mr-6 flex h-[7em] flex-col" v-for="listItem in users.list">
            <div class="flex flex-row items-end justify-between pb-4 text-sm">
              <div>
                <span class="text-md">{{ listItem.Firstname }} {{ listItem.Lastname }}</span> <br />
                <span class="text-xs tracking-wider">{{ shortenString(listItem.SCA_ID) }}</span>
                <br />
              </div>
              <RouterLink :to="{ path: `contacts/${listItem.SCA_ID}` }">
                <span class="text-lg"><DotsIcon /></span>
              </RouterLink>
            </div>
            <q-separator />
          </div>
        </q-scroll-area>
      </section>
    </template>
  </BaseLayout>
</template>
