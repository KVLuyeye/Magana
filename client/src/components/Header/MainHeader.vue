<script setup lang="ts">
import MenuBtnIcon from '@/assets/icons/MenuBtnIcon.vue';
import ProfileBtn from '../Buttons/ProfileBtn.vue';
import { useSidebarStore } from '@/stores/sidebar';

let sidebar = useSidebarStore();

defineProps({
  sectionName: String,
});
</script>

<template>
  <header
    class="border- flex h-[4em] items-center justify-between rounded-bl-xl rounded-br-xl border-b-2 border-[#136207] pl-4 pr-4 pt-4"
  >
    <button class="w-[2em] text-lg text-green-900 active:scale-95" @click="sidebar.toggleSidebar">
      <MenuBtnIcon />
    </button>

    <h1 class="w-[4em] text-center text-xl">{{ sectionName }}</h1>
    <span class="w-[2em]"> </span>
  </header>
</template>
