<script setup lang="ts">
import ForwardIcon from "@/assets/icons/ForwardIcon.vue";
import { useProfile } from "@/stores/profile";
let profile = useProfile();
</script>

<template>
  <div class="mb-4 ml-4 mr-4 flex h-24 flex-col rounded-xl p-4 shadow-xl">
    <span class="mb-2 flex items-center justify-between text-xs text-gray-600">
      {{ profile.SCA_ID }}
      <ForwardIcon />
    </span>

    <span class="text-xl">
      <slot name="balance" />
    </span>
  </div>
</template>
