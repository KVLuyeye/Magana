import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';
import { useProfile } from '@/stores/users';

export const useTransfer = defineStore('transferData', () => {
  let amount = ref();
  let address = ref('');
  let isResponseOkay = ref();
  let user = useProfile();
  let error = ref('');

  async function send() {
    try {
      const data = {
        senderAddress: user.SCA_ID,
        recipientAddress: address.value,
        amount: amount.value,
      };
      const response = await fetch(' https://2fd6-134-21-131-126.ngrok-free.app/transactions/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      isResponseOkay.value = response.ok;

      if (response.ok) {
        // Data sent successfully
        console.log('Transfer data sent successfully');
        console.log('Address: ' + address.value, ' ', 'Amount ' + amount.value);

        // Reset form values
        address.value = '';
        amount.value = null;
      } else {
        const responseData = await response.json();
        error.value = responseData.error;
      }
    } catch (error) {
      console.error('Error sending transfer data:', error);
    }
  }

  //TODO: Retrieve the entire transaction history of an account
  async function getTransactionHistory() {
    try {
      const response = await fetch('', {
        body: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
      }
    } catch (error) {
      console.error(error);
    }
  }

  return {
    amount,
    address,
    isResponseOkay,
    send,
    error,
  };
});
