<script setup lang="ts">
import MenuBtnIcon from '@/assets/icons/MenuBtnIcon.vue';
import ProfileBtn from '../Buttons/ProfileBtn.vue';
import { useSidebarStore } from '@/stores/sidebar';
import BellIcon from '@/assets/icons/BellIcon.vue';

let sidebar = useSidebarStore();

defineProps({
  sectionName: String,
});
</script>

<template>
  <header
    class="flex h-[4em] items-center justify-between rounded-bl-xl rounded-br-xl border-b-2 border-[#136207] bg-[#072313] pl-4 pr-4 pt-4 text-[#FFFFF0]"
  >
    <button class="w-[2em] text-lg text-white active:scale-95" @click="sidebar.toggleSidebar">
      <MenuBtnIcon />
    </button>

    <h1 class="w-[4em] text-center text-xl">{{ sectionName }}</h1>
    <q-btn-dropdown dropdown-icon="notifications">
      <q-list class="w-[25em]">
        <q-item> </q-item>
      </q-list>
    </q-btn-dropdown>
  </header>
</template>
