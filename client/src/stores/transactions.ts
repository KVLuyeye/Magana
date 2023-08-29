import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';
import { useProfile } from '@/stores/profile';

export const useTransfer = defineStore('transferData', () => {
  let amount = ref();
  let address = ref('');
  let isResponseOkay = ref();
  let profile = useProfile();

  async function send() {
    try {
      const data = {
        senderAddress: profile.SCA_ID,
        recipientAddress: address.value,
        amount: amount.value,
      };
      const response = await fetch('https://e70a-178-199-92-184.ngrok-free.app/transactions/send', {
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
        console.log('Address: ' + address.value, ' ', 'Amount' + amount.value);

        // Reset form values
        address.value = '';
        amount.value = null;
      } else {
        // Error sending data
        console.error('Failed to send transfer data');
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
  };
});
