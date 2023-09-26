<script setup lang="ts">
import BaseLayout from '@/Layouts/BaseLayout.vue';
import NestedHeader from '@/components/Header/NestedHeader.vue';
import DotsIcon from '@/assets/icons/DotsIcon.vue';
import { RouterLink } from 'vue-router';
import { ref, onBeforeMount, computed } from 'vue';
import { useProfile } from '@/stores/users';
import ArrowBackBtn from '@/components/Buttons/ArrowBackBtn.vue';

//VARS
let search = ref('');
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
function removeUserIfMatch(list: string[], match: string): string[] {
  return list.filter((option) => option.SCA_ID !== match);
}

// COMPUTED PROPERTY for filtered users

const filteredUsers = computed(() => {
  if (!search.value) {
    // If the search input is empty, return the original list of users
    return removeUserIfMatch(users.list, users.current.SCA_ID);
  } else {
    // Filter the users based on the search text
    return users.list.filter((user) => {
      return (
        user.Firstname.toLowerCase().includes(search.value.toLowerCase()) ||
        user.Lastname.toLowerCase().includes(search.value.toLowerCase())
      );
    });
  }
});

const contactLength = computed(() => {
  if (filteredUsers.value.length === 1) {
    return filteredUsers.value.length + ' Contact';
  } else {
    return filteredUsers.value.length + ' Contacts';
  }
});

onBeforeMount(async () => {
  await users.findAllUsers();
});
</script>

<template>
  <BaseLayout>
    <template #header>
      <NestedHeader section-name="Contacts" />
    </template>

    <template #main>
      <q-input
        debounce="500"
        rounded
        outlined
        clearable
        label="Search"
        v-model="search"
        class="ml-4 mr-4 rounded-full bg-white p-0"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>

      <section class="mt-12">
        <div class="mb-2 ml-2 mr-2 flex w-full flex-col items-start justify-center p-2">
          <span class="text-black">{{ contactLength }} </span>
        </div>
        <q-scroll-area class="ml-4 mr-4 h-[35em] rounded-2xl border-2 bg-white p-4 shadow-2xl">
          <!-- Render the filtered users -->
          <div class="ml-6 mr-6 flex h-[7em] flex-col" v-for="listItem in filteredUsers">
            <RouterLink :to="{ path: `contacts/${listItem.SCA_ID}` }">
              <div class="flex flex-row items-end justify-between pb-4 text-sm active:scale-95">
                <div>
                  <span class="text-md">{{ listItem.Firstname }}</span> <br />
                  <span class="text-xs tracking-wider">{{ shortenString(listItem.SCA_ID) }}</span>
                  <br />
                </div>
                <span class="text-lg"><DotsIcon /></span>
              </div>
            </RouterLink>
            <q-separator />
          </div>
        </q-scroll-area>
      </section>
    </template>
  </BaseLayout>
</template>
