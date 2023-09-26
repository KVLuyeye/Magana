<script setup lang="ts">
import LoginForm from '@/components/Forms/LoginForm.vue';
import SignUpForm from '@/components/Forms/SignUpForm.vue';
import MainBtn from '@/components/Buttons/MainBtn.vue';
import SubmitBtn from '@/components/Buttons/SubmitBtn.vue';
import { ref } from 'vue';
import { useAuthenticationStore } from '@/stores/authentication';
import { useRoutingStore } from '@/stores/routing';
import { useRouter } from 'vue-router';
import type ProfileIconVue from '@/assets/icons/ProfileIcon.vue';
import ProfileBtn from '@/components/Buttons/ProfileBtn.vue';
document.title = 'Welcome';
let router = useRouter();
const hasAccount = ref(true);

function toggleAccount() {
  hasAccount.value = !hasAccount.value;
}
</script>

<template>
  <section
    class="flex min-h-screen flex-col items-center justify-between bg-gradient-to-t from-[#21452a] from-5% to-[#e8e8e0] to-95%"
    id=""
  >
    <header class="w-full">
      <!-- <div class="ml-4 mt-4 flex w-full flex-row justify-start">
        <ProfileBtn />
      </div> -->
      <div class="mt-28 flex justify-center text-center font-serif text-xl tracking-wide text-[#21452A]" id="logo">
        M A G A N A
      </div>
    </header>

    <footer class="mb-12 flex w-full flex-col items-center justify-center text-xs" v-if="hasAccount">
      <MainBtn
        value="Login"
        class="mb-4 h-[1.25em] w-3/4 rounded-lg bg-[#1E1E1E] text-lg"
        @click="router.replace('login')"
      />

      <span>
        Don't have an account yet?
        <button @click="toggleAccount" class="pl-2 text-[#1E1E1E]">SignUp</button>
      </span>
    </footer>

    <footer class="mb-12 flex w-full flex-col items-center justify-center text-xs" v-else>
      <MainBtn
        value="Sign Up"
        class="mb-4 h-[1.25em] w-3/4 rounded-lg bg-[#1E1E1E] text-lg"
        @click="router.push('signup')"
      />

      <span>
        Already have an account yet?
        <button @click="toggleAccount" class="pl-2 text-[#1E1E1E]">Login</button>
      </span>
    </footer>

    <!-- <section
      class="flex min-h-screen flex-col items-center justify-around"
      v-if="hasAccount"
    >
      <LoginForm>
        <SubmitBtn value="Login" class="mt-8" @click="auth.login" />
      </LoginForm>

      <div class="text-center">
        Don't have an account yet?
        <button @click="toggleAccount" class="text-[#1E1E1E]">SignUp</button>
      </div>
    </section>

    <section
      class="flex min-h-screen flex-col items-center justify-around"
      v-else
    >
      <SignUpForm>
        <SubmitBtn value="Sign Up" class="mt-8" @click="auth.sendForm" />
      </SignUpForm>

      <div class="text-center">
        Already have an account?

        <button @click="toggleAccount" class="text-[#136207]">Login</button>
      </div>
    </section> -->
  </section>
</template>

<style scoped>
#logo {
  color: #21452a !important ;
}
</style>
