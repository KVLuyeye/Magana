import { defineStore } from "pinia";
import { ref } from "vue";

export const useSidebarStore = defineStore("sideBar", () => {
  let isOpen = ref(false);

  function toggleSidebar() {
    isOpen.value = !isOpen.value;
  }

  return { toggleSidebar, isOpen };
});
