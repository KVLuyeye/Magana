<script setup lang="ts">
import BaseLayout from "@/Layouts/BaseLayout.vue";
import NestedHeader from "@/components/Header/NestedHeader.vue";
import TransferForm from "@/components/Forms/sendFunds/TransferForm.vue";
import ConfirmationBanner from "@/components/Splash/ConfirmationBanner.vue";
document.title = "Send Funds";
</script>

<template>
  <BaseLayout>
    <template #header>
      <NestedHeader section-name="Send" />
    </template>

    <template #main>
      <TransferForm />
    </template>
  </BaseLayout>
</template>
@/stores/transactions
