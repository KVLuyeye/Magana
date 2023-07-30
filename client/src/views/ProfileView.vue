<script setup lang="ts">
import BaseLayout from "@/Layouts/BaseLayout.vue";
import NestedHeader from "@/components/Header/NestedHeader.vue";
import { useProfile } from "@/stores/profile";
document.title = "Profile";

let profile = useProfile();
</script>

<template>
  <BaseLayout>
    <template #header>
      <NestedHeader section-name="Profile" />
    </template>

    <template #main>
      <p class=""></p>
    </template>
  </BaseLayout>
</template>
