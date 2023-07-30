<script setup lang="ts">
import SubmitBtn from "@/components/Buttons/SubmitBtn.vue";
import SignUpForm from "@/components/Forms/SignUpForm.vue";
document.title = "Sign Up";
</script>

<template>
  <section class="flex min-h-screen flex-col justify-start bg-[#fdfffd]">
    <q-space />
    <SignUpForm>
      <SubmitBtn value="Sign Up" />
    </SignUpForm>
    <q-space />
    <q-space />
    <q-space />
  </section>
</template>
