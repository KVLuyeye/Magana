<script lang="ts" setup>
import { useTransferData } from "@/stores/transactions";
import SubmitBtn from "../Buttons/SubmitBtn.vue";
import { useRouter } from "vue-router";
import ForwardIcon from "@/assets/icons/ForwardIcon.vue";
import CheckIcon from "@/assets/icons/CheckIcon.vue";
import CloseIcon from "@/assets/icons/CloseIcon.vue";

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
  <div class="mt-6 rounded-lg border border-solid p-4 text-center shadow-lg">
    <label class="text-sm text-gray-500"> Enter Amount </label> <br />
    <input
      v-model="transferData.amount"
      required
      step=".01"
      type="number"
      name="amount"
      class="mb-8 mt-4 w-[10em] rounded-lg rounded-b-none border-b-2 p-1 pl-2 pr-2 text-center text-2xl focus:outline-none active:outline-none"
    />
    <br />
    <!-- <SubmitBtn value="Send" @click="replaceRoute" /> -->

    <q-slide-item
      @left="replaceRoute"
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
        <q-item-section class="h-8">
          <span class="flex flex-row items-center justify-start">
            <ForwardIcon class="ml-2 rounded-full p-2 text-lg" />
          </span>
        </q-item-section>
      </q-item>
    </q-slide-item>
  </div>
</template>
@/stores/transactions
