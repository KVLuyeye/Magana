<script setup lang="ts">
import CheckCircleIcon from "@/assets/icons/CheckCircleIcon.vue";
</script>

<template>
  <section
    class="absolute top-0 flex min-h-screen w-screen flex-col items-center justify-between bg-[#21452A] text-3xl text-white transition-opacity ease-linear"
  >
    <div><!--Empty Positioning DIV --></div>

    <div class="l w-full text-center text-7xl">
      <span class="text-center">
        <button><CheckCircleIcon /></button
      ></span>
      <br />
      <span class="text-lg"> Transfer Confirmed </span>
    </div>

    <div class="mb-4 text-xs"></div>
  </section>
</template>
