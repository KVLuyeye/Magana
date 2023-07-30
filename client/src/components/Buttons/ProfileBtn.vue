<script setup lang="ts">
import ProfileIcon from "@/assets/icons/ProfileIcon.vue";
import { useSidebarStore } from "@/stores/sidebar";

let sidebar = useSidebarStore();
</script>

<template>
  <button class="w-[2em] text-lg" @click="sidebar.toggleSidebar">
    <ProfileIcon />
  </button>
</template>
