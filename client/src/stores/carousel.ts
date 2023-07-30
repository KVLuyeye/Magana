import { defineStore } from "pinia";
import { ref } from "vue";

export const useCarouselStore = defineStore("carousel", () => {
  let activeStepIndex = ref(0);

  function nextStep() {
    if (activeStepIndex.value < 2) {
      activeStepIndex.value++;
    }
  }

  return { activeStepIndex, nextStep };
});
