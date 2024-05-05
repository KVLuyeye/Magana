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
    const response = await fetch(`http://127.0.0.1:3000/account/balance?SCA_ID=${user.SCA_ID}`, {
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

  async function deposit(amount: string | undefined) {
    debugger;
    try {
      const response = await fetch(`http://127.0.0.1:3000/account/deposit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount,
        }),
      });

      if (response.ok) {
        console.log('Deposit successful');
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function getTransactionsHistory() {
    try {
      const response = await fetch(`http://127.0.0.1:3000/account/transactionHistory?SCA_ID=${user.SCA_ID}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        let transactions = await response.json();
        transactionHistory.value = transactions.reverse();
      }
    } catch (error) {
      console.error(error);
    }
  }
  return { getBalance, getTransactionsHistory, info, transactionHistory, deposit };
});
