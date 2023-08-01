<script setup lang="ts">
import { useRouter } from "vue-router";
import { useTransferData } from "@/stores/transactions";
import CloseIcon from "@/assets/icons/CloseIcon.vue";
import ForwardIcon from "@/assets/icons/ForwardIcon.vue";
import CheckIcon from "@/assets/icons/CheckIcon.vue";

let transferData = useTransferData();
let router = useRouter();

async function replaceRoute() {
  await transferData.sendTransferData();

  if (transferData.isResponseOkay) {
    router.replace("success");
    setTimeout(() => {
      router.back();
    }, 2500);
  } else {
    alert("Transaction has failed");
    console.error("Transaction has failed");
  }
}
</script>

<template>
  <div class="w-3/4">
    <q-slide-item
      @left="replaceRoute"
      @right="router.back()"
      left-color="green"
      right-color="red"
      class="h-12 rounded-full"
    >
      <template v-slot:left>
        <span class="flex w-full items-center justify-center text-center">
          <CheckIcon class="text-lg" />
        </span>
      </template>
      <template v-slot:right>
        <span class="flex w-full items-center justify-center text-center">
          <CloseIcon class="text-lg" />
        </span>
      </template>

      <q-item
        class="h-2 rounded-l-none border-none bg-[#1E1E1E] p-[0.75em] text-white"
      >
        <q-item-section class="h-8 w-full">
          <span class="flex flex-row items-center justify-start text-center">
            <ForwardIcon class="ml-2 mr-8 rounded-full p-2 text-lg" />
            Slide to send
          </span>
        </q-item-section>
      </q-item>
    </q-slide-item>
  </div>
</template>
