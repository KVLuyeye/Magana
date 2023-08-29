<script setup lang="ts">
import { ref } from 'vue';
import { useAuthenticationStore } from '@/stores/authentication';
import { reactive } from 'vue';
import { onMounted } from 'vue';
let inputFirst = ref(null);
let inputSecond = ref(null);
let inputThird = ref(null);
let inputFourth = ref(null);
let inputFifth = ref(null);
let inputSixth = ref(null);

let auth = useAuthenticationStore();

//FUNCTIONS

/** Forces an input to only accept one digit*/
function singleDigit(event: Event) {
  // Get the first character from the input value
  const inputValue = (event.target as HTMLInputElement).value.slice(0, 1);

  // Update the input value with the truncated value
  (event.target as HTMLInputElement).value = inputValue;
}

/** Function that automatically moves to the next input*/
function nextInput(event: Event) {
  // Get the input element that triggered the event
  const currentInput = event.target as HTMLInputElement;

  // Get the value entered in the current input
  let inputValue = currentInput.value;

  // Move focus to the next input if the current input has a value
  if (inputValue.length === 1) {
    inputValue = (event.target as HTMLInputElement).value.slice(0, 1);
    const nextInput = currentInput.nextElementSibling as HTMLInputElement;
    if (nextInput) {
      nextInput.focus();
    }
  }
}

onMounted(() => {
  inputFirst.value.focus();
});
</script>
<template>
  <!--
    Save every input into an array, take the values and send it to the server for authentication
  -->

  <form @submit.prevent class="flex flex-row items-center justify-center p-4">
    <header class="mb-24 flex w-full flex-col text-center text-xl leading-relaxed tracking-wider text-[#21452A]">
      Log in
      <span class="text-sm text-gray-500"> SCA ID: <slot /> </span>
    </header>

    <input
      class="hidden-password mr-4 w-[2em] border border-l-0 border-r-0 border-t-0 border-solid border-black text-center transition-all focus:border-[#136207] focus:outline-none"
      type="tel"
      pattern="[0-9]*"
      @input="nextInput($event)"
      ref="inputFirst"
      required
      v-model="auth.loginPIN.first"
    />

    <input
      class="hidden-password mr-4 w-[2em] border border-l-0 border-r-0 border-t-0 border-solid border-black text-center transition-all focus:border-[#136207] focus:outline-none"
      type="tel"
      inputmode="numeric"
      pattern="[0-9]*"
      @input="nextInput($event)"
      ref="inputSecond"
      required
      v-model="auth.loginPIN.second"
    />
    <input
      class="hidden-password mr-4 w-[2em] border border-l-0 border-r-0 border-t-0 border-solid border-black text-center transition-all focus:border-[#136207] focus:outline-none"
      type="tel"
      inputmode="numeric"
      pattern="[0-9]*"
      @input="nextInput($event)"
      ref="inputThird"
      required
      v-model="auth.loginPIN.third"
    />
    <input
      class="hidden-password mr-4 w-[2em] border border-l-0 border-r-0 border-t-0 border-solid border-black text-center transition-all focus:border-[#136207] focus:outline-none"
      type="tel"
      inputmode="numeric"
      pattern="[0-9]*"
      @input="nextInput($event)"
      ref="inputFourth"
      required
      v-model="auth.loginPIN.fourth"
    />
    <input
      class="hidden-password mr-4 w-[2em] border border-l-0 border-r-0 border-t-0 border-solid border-black text-center transition-all focus:border-[#136207] focus:outline-none"
      type="tel"
      inputmode="numeric"
      pattern="[0-9]*"
      @input="nextInput($event)"
      ref="inputFifth"
      required
      v-model="auth.loginPIN.fifth"
    />
    <input
      class="hidden-password w-[2em] border border-l-0 border-r-0 border-t-0 border-solid border-black text-center transition-all focus:border-[#136207] focus:outline-none"
      type="tel"
      inputmode="numeric"
      pattern="[0-9]*"
      @input="nextInput($event), singleDigit($event), auth.login()"
      ref="inputSixth"
      required
      v-model="auth.loginPIN.sixth"
    />
  </form>

  <q-btn class="mt-8" @click="auth.login"> Login </q-btn>
</template>

<style scoped>
.hidden-password {
  -webkit-text-security: disc;
  text-security: disc;
}
</style>
