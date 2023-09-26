<script setup lang="ts">
import { ref, watch, onMounted, reactive } from 'vue';
import type { Ref } from 'vue';
import { useAuthenticationStore } from '@/stores/authentication';

let inputFirst: Ref<HTMLInputElement | null> = ref(null);
let inputSecond: Ref<HTMLInputElement | null> = ref(null);
let inputThird: Ref<HTMLInputElement | null> = ref(null);
let inputFourth: Ref<HTMLInputElement | null> = ref(null);
let inputFifth: Ref<HTMLInputElement | null> = ref(null);
let inputSixth: Ref<HTMLInputElement | null> = ref(null);

let auth = useAuthenticationStore();
let failed = auth.loginFailed;

//FUNCTIONS

/**
 * Forces an input to only accept one digit
 * Truncates the input value to a single digit.
 * @param {Event} event - The input event.
 */
function singleDigit(event: Event) {
  // Get the first character from the input value
  const inputValue = (event.target as HTMLInputElement).value.slice(0, 1);

  // Update the input value with the truncated value
  (event.target as HTMLInputElement).value = inputValue;
}

/**
 * Moves focus to the next input element if the current input has a value of length 1.
 * @param {Event} event - The event object.
 */
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

function previousInput(event: KeyboardEvent) {
  if (event.key === 'Backspace') {
    const currentInput = event.target as HTMLInputElement;
    const previousInput = currentInput.previousElementSibling as HTMLInputElement;
    if (previousInput) {
      previousInput.focus();
    }
  }
}

/**
 * Focuses on the first input element.
 */
function focusFirstInput() {
  inputFirst.value?.focus();
}

//TODO: Focus on the first input when the login has failed
//WATCHERS
watch(failed, (newValue) => {
  if (newValue) {
    focusFirstInput();
  }
});

onMounted(() => {
  focusFirstInput();
});
</script>
<template>
  <form @submit.prevent class="flex flex-row items-center justify-center p-4">
    <header class="mb-24 flex w-full flex-col text-center text-xl leading-relaxed tracking-wider text-[#21452A]">
      Log in
      <span class="mt-2 text-sm text-gray-500"><slot /></span>
    </header>

    <input
      class="hidden-password mr-4 w-[2em] rounded-none border border-l-0 border-r-0 border-t-0 border-solid border-black bg-inherit text-center transition-all focus:border-[#136207] focus:outline-none"
      type="tel"
      pattern="[0-9]*"
      @input="nextInput($event)"
      ref="inputFirst"
      required
      v-model="auth.loginPIN.first"
    />

    <input
      class="hidden-password mr-4 w-[2em] rounded-none border border-l-0 border-r-0 border-t-0 border-solid border-black bg-inherit text-center transition-all focus:border-[#136207] focus:outline-none"
      type="tel"
      inputmode="numeric"
      pattern="[0-9]*"
      @keydown="previousInput($event)"
      @input="nextInput($event)"
      ref="inputSecond"
      required
      v-model="auth.loginPIN.second"
    />
    <input
      class="hidden-password mr-4 w-[2em] rounded-none border border-l-0 border-r-0 border-t-0 border-solid border-black bg-inherit text-center transition-all focus:border-[#136207] focus:outline-none"
      type="tel"
      inputmode="numeric"
      pattern="[0-9]*"
      @keydown="previousInput($event)"
      @input="nextInput($event)"
      ref="inputThird"
      required
      v-model="auth.loginPIN.third"
    />
    <input
      class="hidden-password mr-4 w-[2em] rounded-none border border-l-0 border-r-0 border-t-0 border-solid border-black bg-inherit text-center transition-all focus:border-[#136207] focus:outline-none"
      type="tel"
      inputmode="numeric"
      pattern="[0-9]*"
      @input="nextInput($event)"
      @keydown="previousInput($event)"
      ref="inputFourth"
      required
      v-model="auth.loginPIN.fourth"
    />
    <input
      class="hidden-password mr-4 w-[2em] rounded-none border border-l-0 border-r-0 border-t-0 border-solid border-black bg-inherit text-center transition-all focus:border-[#136207] focus:outline-none"
      type="tel"
      inputmode="numeric"
      pattern="[0-9]*"
      @keydown="previousInput($event)"
      @input="nextInput($event)"
      ref="inputFifth"
      required
      v-model="auth.loginPIN.fifth"
    />
    <input
      class="hidden-password w-[2em] rounded-none border border-l-0 border-r-0 border-t-0 border-solid border-black bg-inherit text-center transition-all focus:border-[#136207] focus:outline-none"
      type="tel"
      inputmode="numeric"
      pattern="[0-9]*"
      @keydown="previousInput($event)"
      @input="nextInput($event), singleDigit($event), auth.login()"
      ref="inputSixth"
      required
      v-model="auth.loginPIN.sixth"
    />
  </form>
</template>

<style scoped>
.hidden-password {
  -webkit-text-security: disc;
  text-security: disc;
}
</style>
