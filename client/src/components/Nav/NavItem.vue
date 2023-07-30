<script lang="ts" setup>
import { RouterLink, useRoute } from "vue-router";
import { ref, computed, watch } from "vue";
const { to } = defineProps(["to"]);
const route = useRoute();
const activeProp = computed(() => route.path === to);
</script>

<template>
  <RouterLink :to="to">
    <slot :active="activeProp" />
  </RouterLink>
</template>

<style>
.active-icon {
  color: #21452a; /* Set your desired active color */
  border-bottom: #21452a solid thin;
}
</style>
