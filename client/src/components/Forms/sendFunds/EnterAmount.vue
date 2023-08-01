<script lang="ts" setup>
import { useTransferData } from "@/stores/transactions";
import { useRouter } from "vue-router";
import MainBtn from "@/components/Buttons/MainBtn.vue";
import ForwardIcon from "@/assets/icons/ForwardIcon.vue";
import CheckIcon from "@/assets/icons/CheckIcon.vue";
import CloseIcon from "@/assets/icons/CloseIcon.vue";

let transferData = useTransferData();
let router = useRouter();

function replaceRoute() {
  if (transferData.amount === "") {
  } else {
    router.replace("enterAddress");
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

    <MainBtn value="Continue" @click="replaceRoute" />
  </div>
</template>
@/stores/transactions
