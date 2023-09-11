<script setup lang="ts">
import { RouterLink } from 'vue-router';

import { useSidebarStore } from '@/stores/sidebar';
import CloseIcon from '@/assets/icons/CloseIcon.vue';
import MenuCard from '@/components/Cards/MenuCard.vue';
import ProfileIcon from '@/assets/icons/ProfileIcon.vue';
import ForwardIcon from '@/assets/icons/ForwardIcon.vue';
import LogoutIcon from '@/assets/icons/LogoutIcon.vue';
import ContactsIcon from '@/assets/icons/ContactsIcon.vue';
import { useProfile } from '@/stores/users';
import { onMounted } from 'vue';
let user = useProfile();
let sidebar = useSidebarStore();

function closeSidebar() {
  sidebar.isOpen = false;
}

function Logout() {
  document.cookie = 'access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  console.log('Logged out');
}

onMounted(() => {
  user.getCurrentUser();
});
</script>

<template>
  <aside
    class="absolute left-0 top-0 z-40 grid min-h-screen w-full max-w-[820px] -translate-x-full transform grid-rows-[2.5em_4.5em_4.5em_1fr_6.5em] gap-14 bg-[#072313] duration-300 ease-in-out"
    :class="{
      'sidebar-open': sidebar.isOpen,
      'sidebar-closed': !sidebar.isOpen,
    }"
  >
    <div class="mr-2 mt-2 flex flex-col items-end">
      <button class="mt-2 text-2xl text-[#F9F9F9] active:scale-95" @click="sidebar.toggleSidebar">
        <CloseIcon />
      </button>
    </div>

    <!-- Profile -->
    <RouterLink to="/profile">
      <MenuCard @click="closeSidebar" class="ml-4 mr-4 tracking-wider">
        <template #icon>
          <ProfileIcon />
        </template>

        <template #text1>
          {{ user.current.Firstname }}
          {{ user.current.Lastname }}
        </template>
        <template #text2>
          {{ user.SCA_ID_short }}
        </template>

        <template #icon2> <ForwardIcon /> </template>
      </MenuCard>
    </RouterLink>

    <!-- SETTINGS-->

    <RouterLink to="/contacts">
      <MenuCard
        @click="closeSidebar"
        class="ml-4 mr-4 rounded-lg border border-b-[1px] border-solid border-white tracking-wider text-white"
      >
        <template #icon>
          <ContactsIcon />
        </template>

        <template #text1> Contacts </template>
      </MenuCard>
    </RouterLink>
    <div>
      <!--Invisible Positioning DIV-->
    </div>

    <!-- LOGOUT-->

    <RouterLink to="/welcome" @click="Logout" class="ml-4 mr-4">
      <MenuCard class="h-[3em] tracking-widest">
        <template #text1> Logout </template>

        <template #icon2>
          <LogoutIcon />
        </template>
      </MenuCard>
    </RouterLink>
  </aside>
</template>

<style scoped>
.sidebar-open {
  transform: translateX(0);
}

.sidebar-closed {
  transform: translateX(-100%);
}
</style>
@/stores/users
