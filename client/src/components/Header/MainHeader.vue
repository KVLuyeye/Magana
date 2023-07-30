<script setup lang="ts">
import MenuBtnIcon from "@/assets/icons/MenuBtnIcon.vue";
import ProfileBtn from "../Buttons/ProfileBtn.vue";
import { useSidebarStore } from "@/stores/sidebar";

let sidebar = useSidebarStore();

defineProps({
  sectionName: String,
});
</script>

<template>
  <header class="flex h-[4em] items-center justify-between pl-4 pr-4 pt-4">
    <button class="w-[2em] text-lg" @click="sidebar.toggleSidebar">
      <MenuBtnIcon />
    </button>

    <h1 class="w-[4em] text-center text-xl">{{ sectionName }}</h1>
    <span class="w-[2em]"> </span>
  </header>
</template>
