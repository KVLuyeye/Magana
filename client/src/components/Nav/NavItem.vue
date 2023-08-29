<script lang="ts" setup>
import { RouterLink, useRoute } from 'vue-router';
import { ref, computed, watch } from 'vue';
const { to } = defineProps(['to']);
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
  --tw-scale-x: 1.25;
  --tw-scale-y: 1.25;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
    skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
</style>
