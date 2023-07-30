<script setup lang="ts">
import { ref } from "vue";
import OrderBtn from "../Buttons/OrderBtn.vue";

let tab = ref("Today");
</script>

<template>
  <section class="mt-12 h-[25em] p-4">
    <h1 class="mb-4 text-2xl font-semibold">Recent Activity</h1>
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
  </section>
</template>
