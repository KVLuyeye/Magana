<script lang="ts" setup>
import { RouterLink, useRoute } from "vue-router";
import { ref, computed } from "vue";
</script>

<template>
  <RouterLink
    to=""
    class="border border-b-2 border-l-0 border-r-0 border-t-0 border-solid focus:border-b-[#21452A] active:border-b-[#21452A]"
  >
    <slot />
  </RouterLink>
</template>

<style></style>
