import { defineStore } from "pinia";
import { ref, reactive } from "vue";

export const useProfile = defineStore("profile", () => {
  let profileToken = ref("");

  return { profileToken };
});
