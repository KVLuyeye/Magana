import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

export const useRoutingStore = defineStore("routing", () => {
  let router = useRouter();

  function replaceRoute(to: string) {
    router.replace(to);
  }

  function goTo(to: string) {
    router.push(to);
  }

  return { router, replaceRoute, goTo };
});
