import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import jwt_decode from "jwt-decode";

export const useProfile = defineStore("profile", () => {
  let decoded_token = jwt_decode(document.cookie);
  let SCA_ID = shortenString(decoded_token.SCA_ID);
  let Firstname = ref("");
  let Lastname = ref("");
  let Tel = ref("");

  function shortenString(str) {
    if (str.length <= 7) {
      // If the string is already short or has 7 or fewer characters, return it as it is
      return str;
    } else {
      // Shorten the string by taking the first two characters and the last five characters
      return str.slice(0, 2) + "..." + str.slice(-5);
    }
  }

  async function getUserInfo() {
    try {
      const data = {
        SCA_ID: SCA_ID,
      };
      const response = await fetch("http://127.0.0.1:3000/users/findUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        Firstname.value = response.user.FirstName;
        Lastname.value = response.user.LastName;
        Tel.value = response.user.Tel;
      }
    } catch (error) {
      console.error(error);
    }
  }

  getUserInfo();
  return { SCA_ID, shortenString, Firstname, Lastname, Tel };
});
