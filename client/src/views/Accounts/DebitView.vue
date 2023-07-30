<script setup lang="ts">
import BaseLayout from "@/Layouts/BaseLayout.vue";
import NestedHeader from "@/components/Header/NestedHeader.vue";
import TransactionTable from "@/components/Graphs/TransactionTable.vue";
import EmptyDivContainer from "@/components/Containers/EmptyDivContainer.vue";
import { ref } from "vue";

document.title = "Debit";
let tab = ref("Today");
</script>

<template>
  <BaseLayout>
    <template #header>
      <NestedHeader section-name="Debit" />
    </template>

    <template #main>
      <q-card class="ml-4 mr-4">
        <div class="text-h6 pl-[16px]">[SCA_ID]</div>
        <q-card-section> [BALANCE] </q-card-section>
      </q-card>
      <EmptyDivContainer />
      <div class="h-[10em]">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey overflow-x-scroll"
          active-color="primary"
          indicator-color="secondary"
          narrow-indicator
        >
          <q-tab name="Today" label="Today" />
          <q-tab name="This Week" label="This Week" />
          <q-tab name="This Month" label="This Month" />
        </q-tabs>

        <q-separator />

        <q-tab-panels animated v-model="tab" swipeable>
          <q-tab-panel name="Today">
            <div class="pb-4 text-sm">
              <h6>From [Account]</h6>
              <span>[DATE]</span>
              <span> [AMOUNT]</span>
            </div>

            <q-separator />
          </q-tab-panel>

          <q-tab-panel name="This Week">
            <div class="pb-4 text-sm">
              <h6>From [Account]</h6>
              <span>[DATE]</span>
              <span> [AMOUNT]</span>
            </div>
            <q-separator />
          </q-tab-panel>

          <q-tab-panel name="This Month">
            <div class="pb-4 text-sm">
              <h6>From [Account]</h6>
              <span>[DATE]</span>
              <span> [AMOUNT]</span>
            </div>
            <q-separator />
          </q-tab-panel>
        </q-tab-panels>
      </div>
      <EmptyDivContainer />
      <EmptyDivContainer />
      <EmptyDivContainer />
    </template>
  </BaseLayout>
</template>
