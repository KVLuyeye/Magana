<script setup lang="ts">
import { RouterLink } from "vue-router";

import { useSidebarStore } from "@/stores/sidebar";
import CloseIcon from "@/assets/icons/CloseIcon.vue";
import MenuCard from "@/components/Cards/MenuCard.vue";
import ProfileIcon from "@/assets/icons/ProfileIcon.vue";
import ForwardIcon from "@/assets/icons/ForwardIcon.vue";
import LogoutIcon from "@/assets/icons/LogoutIcon.vue";
import SettingsIcon from "@/assets/icons/SettingsIcon.vue";
import { useProfile } from "@/stores/profile";
import { onMounted } from "vue";
let profile = useProfile();
let sidebar = useSidebarStore();

function closeSidebar() {
  sidebar.isOpen = false;
}

function Logout() {
  document.cookie =
    "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  console.log("Logged out");
}

onMounted(() => {
  profile.getUserInfo();
});
</script>

<template>
  <aside
    class="absolute left-0 top-0 z-40 grid min-h-screen w-full max-w-[820px] -translate-x-full transform grid-rows-[2.5em_4.5em_12.5em_1fr_4.5em] gap-14 bg-[#616161] duration-300 ease-in-out"
    :class="{
      'sidebar-open': sidebar.isOpen,
      'sidebar-closed': !sidebar.isOpen,
    }"
  >
    <div class="mr-2 mt-2 flex flex-col items-end">
      <button
        class="mt-2 text-2xl text-[#F9F9F9]"
        @click="sidebar.toggleSidebar"
      >
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
          {{ profile.userInfo.Firstname }}
          {{ profile.userInfo.Lastname }}
        </template>
        <template #text2>
          {{ profile.SCA_ID_short }}
        </template>

        <template #icon2> <ForwardIcon /> </template>
      </MenuCard>
    </RouterLink>

    <!-- SETTINGS-->
    <!-- <div class="ml-4 mr-4 rounded-lg border border-solid border-gray-600">
      <MenuCard
        class="rounded-none border-b-[1px] border-l-0 border-r-0 border-t-0 pb-5 pt-5 tracking-wider"
      >
        <template #icon>
          <SettingsIcon />
        </template>

        <template #text1> Settings</template>

        <template #icon2> <ForwardIcon /> </template>
      </MenuCard>

      <MenuCard
        class="rounded-none border-b-[1px] border-l-0 border-r-0 border-t-0 pb-5 pt-5"
      >
        <template #icon> </template>

        <template #text1> [X]</template>

        <template #icon2> <ForwardIcon /> </template>
      </MenuCard>
      <MenuCard class="rounded-none border-none pb-5 pt-5">
        <template #icon> </template>

        <template #text1> [Y]</template>

        <template #icon2> <ForwardIcon /> </template>
      </MenuCard>
    </div> -->

    <div>
      <!--Invisible Positioning DIV-->
    </div>
    <div>
      <!--Invisible Positioning DIV-->
    </div>

    <!-- LOGOUT-->

    <RouterLink to="/login" @click="Logout" class="ml-4 mr-4">
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
