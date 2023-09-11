import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';
import { useProfile } from './users';

export const useAccountStore = defineStore('account', () => {
  let info = reactive({
    balance: null,
  });

  let transactionHistory = ref([]);

  let user = useProfile();

  async function getBalance() {
    const response = await fetch(` http://127.0.0.1:3000/account/balance?SCA_ID=${user.SCA_ID}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const balance = await response.json();
      info.balance = balance;
    }
  }

  async function getTransactionsHistory() {
    try {
      const response = await fetch(` http://127.0.0.1:3000/account/transactionHistory?SCA_ID=${user.SCA_ID}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        transactionHistory.value = await response.json();
      }
    } catch (error) {
      console.error(error);
    }
  }
  return { getBalance, getTransactionsHistory, info, transactionHistory };
});
