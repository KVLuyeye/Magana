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
      <q-card
        class="ml-6 mr-6 flex h-full flex-col items-center justify-center pl-1 pr-1"
      >
        <ProfileIcon size="xxx-large" />
        <p class="text-lg">
          {{ profile.userInfo.Firstname }}
          {{ profile.userInfo.Lastname }}
        </p>
      </q-card>

      <label class="mb-2 ml-6 mr-6 mt-12 w-full text-gray-500">SCA ID</label>
      <q-card
        class="ml-6 mr-6 flex h-[5em] flex-col items-center justify-center pl-1 pr-1 text-center"
      >
        {{ profile.SCA_ID }}
      </q-card>

      <label class="mb-2 ml-6 mr-6 mt-12 w-full text-gray-500"
        >Phone Number</label
      >
      <q-card
        class="ml-6 mr-6 flex h-[5em] flex-col items-center justify-center pl-1 pr-1 text-center"
      >
        {{ profile.userInfo.Tel }}
      </q-card>
      <EmptyDivContainer />
      <EmptyDivContainer />
    </template>
  </BaseLayout>
</template>

<style scoped></style>
