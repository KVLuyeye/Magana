import { defineStore } from "pinia";
import { ref, reactive } from "vue";

export const useTransferData = defineStore("transferData", () => {
  let account = ref("");
  let amount = ref();
  let address = ref("");
  let isResponseOkay = ref();
  let displayStyle = "";

  async function sendTransferData() {
    try {
      const data = {
        account: account.value,
        amount: amount.value,
        address: address.value,
      };
      const response = await fetch("http://127.0.0.1:3000/transactions/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      isResponseOkay.value = response.ok;

      if (response.ok) {
        // Data sent successfully
        console.log("Transfer data sent successfully");
        console.log("Account: ", account.value);
        console.log("Address: ", address.value);
        console.log("Amount: ", amount.value);

        // Reset form values
        account.value = "";
        address.value = "";
        amount.value = 0;
      } else {
        // Error sending data
        console.error("Failed to send transfer data");
      }
    } catch (error) {
      console.error("Error sending transfer data:", error);
    }
  }

  return {
    amount,
    account,
    address,
    isResponseOkay,
    sendTransferData,
  };
});
