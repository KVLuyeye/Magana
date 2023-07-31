import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import { useProfile } from "./profile";

export const useAccountStore = defineStore("account", () => {
  let info = reactive({
    balance: null,
  });

  let profile = useProfile();

  async function getBalance() {
    const response = await fetch(
      `http://127.0.0.1:3000/account/balance?SCA_ID=${profile.SCA_ID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const balance = await response.json();
      info.balance = balance;
    }
  }

  return { getBalance, info };
});
