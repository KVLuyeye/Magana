<script setup lang="ts"></script>

<template>
  <div
    class="flex flex-row items-center rounded-lg border border-solid bg-[#072313] p-1 pl-2 pr-2 text-[#F9F9F9] active:bg-[#f9f9f928]"
  >
    <!-- Show User Info like: Name, Number, Contract Address-->
    <span class="w-10 text-center">
      <slot name="icon" />
    </span>

    <span class="flex-grow">
      <slot name="text1" /> <br />

      <span class="text-xs">
        <slot name="text2" />
      </span>
    </span>

    <span class="w-6">
      <slot name="icon2" />
    </span>
  </div>
</template>
