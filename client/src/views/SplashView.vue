<script setup lang="ts">
import LogoBanner from "@/components/Splash/LogoBanner.vue";
import { useRouter } from "vue-router";
document.title = "Splash";

const router = useRouter();

function leaveRoute() {
  router.push("/welcome");
}

setTimeout(() => {
  leaveRoute();
}, 4000);
</script>

<template>
  <LogoBanner />
</template>
