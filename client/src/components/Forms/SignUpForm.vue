<script setup lang="ts">
import { useAuthenticationStore } from "@/stores/authentication";

let auth = useAuthenticationStore();
</script>

<template>
  <div>
    <header class="mb-4 w-full pl-4 text-left text-2xl">SignUp</header>
    <form
      @submit.prevent
      class="m-6 flex flex-col rounded-lg border border-solid border-gray-300 p-12"
    >
      <label for="name" value="name" class="mb-2">First Name</label>
      <input
        v-model="auth.SignUpFirstname"
        placeholder="Firstname"
        class="mb-6 border border-l-0 border-r-0 border-t-0 border-solid transition-all focus:border-[#136207] focus:outline-none"
        type="text"
        required
      />

      <label for="name" value="name" class="mb-2">Last Name</label>
      <input
        v-model="auth.SignUpLastname"
        placeholder="Lastname"
        class="mb-6 border border-l-0 border-r-0 border-t-0 border-solid transition-all focus:border-[#136207] focus:outline-none"
        type="text"
        required
      />

      <label for="passoword" class="mb-2"> PIN</label>
      <input
        v-model="auth.SignUpPW"
        placeholder="PIN"
        class="mb-6 border border-l-0 border-r-0 border-t-0 border-solid transition-all focus:border-[#136207] focus:outline-none"
        type="password"
        required
      />

      <label for="phone" class="mb-2">Tel</label>
      <input
        v-model="auth.SignUpTel"
        placeholder="Tel"
        class="mb-6 border border-l-0 border-r-0 border-t-0 border-solid transition-all focus:border-[#136207] focus:outline-none"
        type="tel"
        required
      />

      <slot />
    </form>
  </div>
</template>
