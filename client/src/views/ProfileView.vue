<script setup lang="ts">
import BaseLayout from "@/Layouts/BaseLayout.vue";
import ProfileIcon from "@/assets/icons/ProfileIcon.vue";
import EmptyDivContainer from "@/components/Containers/EmptyDivContainer.vue";
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
      <q-card class="ml-12 mr-12 h-32">
        <q-card-section class="flex h-full justify-center">
          <ProfileIcon size="xxx-large" />
        </q-card-section>
      </q-card>
      <EmptyDivContainer />
      <EmptyDivContainer />
      <EmptyDivContainer />
      <EmptyDivContainer />
      <EmptyDivContainer />
    </template>
  </BaseLayout>
</template>
