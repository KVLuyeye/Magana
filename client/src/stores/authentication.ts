import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useRoutingStore } from "@/stores/routing";

export const useAuthenticationStore = defineStore("authentication", () => {
  let SignUpFirstname = ref("");
  let SignUpLastname = ref("");
  let SignUpPIN = ref("");
  let SignUpTel = ref("");

  let loginPIN = reactive({
    first: null,
    second: null,
    third: null,
    fourth: null,
    fifth: null,
    sixth: null,
  });

  let isResponseOkay = ref();

  let router = useRoutingStore();

  async function signUp() {
    try {
      const data = {
        Firstname: SignUpFirstname.value,
        Lastname: SignUpLastname.value,
        PIN: SignUpPIN.value,
        Tel: SignUpTel.value,
      };

      const response = await fetch("http://127.0.0.1:3000/users/newUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      isResponseOkay.value = response.ok;

      if (response.ok) {
        // Data sent successfully
        console.log("Register Info sent successfully");
        console.log("FirstName: ", SignUpFirstname.value);
        console.log("LastName: ", SignUpLastname.value);
        console.log("PIN: ", SignUpPIN.value);
        console.log("Phone Number: ", SignUpTel.value);

        // Reset form values
        SignUpFirstname.value = "";
        SignUpLastname.value = "";
        SignUpPIN.value = "";
        SignUpTel.value = "";

        router.replaceRoute("home");
      } else {
        // Error sending data
        alert(
          "There has been an issue with your signup process. Please try again. "
        );
      }
    } catch (error) {
      console.error("Registration has failed", error);
    }
  }

  async function login() {
    try {
      const data = {
        SCA_ID: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
        PIN:
          loginPIN.first +
          loginPIN.second +
          loginPIN.third +
          loginPIN.fourth +
          loginPIN.fifth +
          loginPIN.sixth,
      };

      const response = await fetch("http://127.0.0.1:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Data sent successfully
        console.log("Logged in successfully");
        const responseData = await response.json();
        const accessToken = responseData.access_token;
        const expiryTimeInSeconds = 600;
        document.cookie = `access_token=${accessToken}; Secure; SameSite=Strict`;
        console.log(accessToken);

        // Reset form values
        (loginPIN.first = null),
          (loginPIN.second = null),
          (loginPIN.third = null),
          (loginPIN.fourth = null),
          (loginPIN.fifth = null),
          (loginPIN.sixth = null),
          router.replaceRoute("home");
      } else {
        // Reset form values
        (loginPIN.first = null),
          (loginPIN.second = null),
          (loginPIN.third = null),
          (loginPIN.fourth = null),
          (loginPIN.fifth = null),
          (loginPIN.sixth = null);
      }
    } catch (error) {
      console.error("Login has failed: ", error);
    }
  }

  return {
    SignUpFirstname,
    SignUpLastname,
    SignUpPIN,
    SignUpTel,
    signUp,
    login,
    loginPIN,
    isResponseOkay,
  };
});
