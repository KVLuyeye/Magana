<script lang="ts" setup>
import MainBtn from "../Buttons/MainBtn.vue";
import { useTransferData } from "@/stores/transactions";
import { useRouter } from "vue-router";

let router = useRouter();

function replaceRoute() {
  if (transferData.account === "") {
  } else {
    router.replace("enterAddress");
  }
}

let transferData = useTransferData();
</script>

<template>
  <div
    class="mt-6 h-[164px] rounded-lg border border-solid pl-2 pr-2 text-center shadow-lg"
  >
    <label class="text-center text-sm text-gray-500"> Select Account </label>
    <br />

    <select
      v-model="transferData.account"
      required
      aria-required="true"
      autocomplete="off"
      name="Choose Account"
      class="mb-4 mt-4 h-[3em] w-[20em] appearance-none rounded-lg border border-solid border-[#1e1e1e60] p-2 text-center focus:outline-none active:outline-none"
    >
      <option value="Debit" placeholder="Select Account" aria-required="true">
        Debit
      </option>
      <option value="Savings" aria-required="true">Savings</option>
    </select>
    <br />

    <MainBtn value="Continue" @click="replaceRoute" />
  </div>
</template>
@/stores/transactions
