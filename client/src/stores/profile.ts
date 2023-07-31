import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import jwt_decode from "jwt-decode";

export const useProfile = defineStore("profile", () => {
  let decoded_token = jwt_decode(document.cookie);
  let SCA_ID_short = shortenString(decoded_token.SCA_ID);
  let SCA_ID = decoded_token.SCA_ID;

  let userInfo = reactive({
    Firstname: "",
    Lastname: "",
    Tel: "",
    Role: "",
  });

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
      const response = await fetch(
        `http://127.0.0.1:3000/users/findUser?SCA_ID=${SCA_ID}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const user = await response.json();

        userInfo.Firstname = user.Firstname;
        userInfo.Lastname = user.Lastname;
        userInfo.Tel = user.Tel;
        userInfo.Role = user.Role;
      }
    } catch (error) {
      console.error(error);
    }
  }

  return { SCA_ID_short, shortenString, userInfo, getUserInfo, SCA_ID };
});
