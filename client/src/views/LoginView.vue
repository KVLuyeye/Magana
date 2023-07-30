<script lang="ts" setup>
import LoginForm from "@/components/Forms/LoginForm.vue";
import MainBtn from "@/components/Buttons/MainBtn.vue";
import SubmitBtn from "@/components/Buttons/SubmitBtn.vue";
import { ref } from "vue";
import { useAuthenticationStore } from "@/stores/authentication";
import ProfileIcon from "@/assets/icons/ProfileIcon.vue";
import CloseIcon from "@/assets/icons/CloseIcon.vue";
import { reactive } from "vue";
document.title = "Log in";

let model = ref(null);
let dialog = ref(false);
let options = ["SCA_ID_1", "SCA_ID_2", "SCA_ID_3"];
</script>

<template>
  <header>
    <button class="ml-2 mt-2" @click="dialog = true">
      <ProfileIcon />
    </button>
  </header>
  <section
    class="flex min-h-screen flex-col items-center justify-start bg-[#fdfffd]"
  >
    <q-space />
    <LoginForm>
      {{ model }}
    </LoginForm>
    <q-space />
    <q-space />
    <q-space />
    <q-dialog
      v-model="dialog"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="text-[#1e1e1e]">
        <q-bar>
          <q-space />

          <q-btn dense flat v-close-popup>
            <CloseIcon size="large" />
          </q-btn>
        </q-bar>

        <q-card-section>
          <q-select
            label="Select Account"
            v-model="model"
            :options="options"
            style="width: 250px"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  </section>

  <section></section>
</template>
