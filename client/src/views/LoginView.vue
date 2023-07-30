<script lang="ts" setup>
import LoginForm from "@/components/Forms/LoginForm.vue";
import MainBtn from "@/components/Buttons/MainBtn.vue";
import SubmitBtn from "@/components/Buttons/SubmitBtn.vue";
import { ref } from "vue";
import { useAuthenticationStore } from "@/stores/authentication";
document.title = "Log in";

function LoginError() {
  if (auth.isResponseOkay.value !== true) {
    return "border: red";
  }
}

let auth = useAuthenticationStore();
</script>

<template>
  <section
    class="flex min-h-screen flex-col items-center justify-start bg-[#fdfffd]"
  >
    <q-space />
    <LoginForm />
    <q-space />
    <q-space />
    <q-space />
  </section>
</template>
