import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';
import jwt_decode from 'jwt-decode';

export const useProfile = defineStore('profile', () => {
  let decoded_token = {};
  if (document.cookie.includes('access_token')) {
    try {
      decoded_token = jwt_decode(document.cookie.split('access_token=')[1]);
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  }
  let SCA_ID_short = shortenString(decoded_token.SCA_ID);
  let SCA_ID = decoded_token.SCA_ID;

  let current = reactive({
    Firstname: '',
    Lastname: '',
    Tel: '',
    Role: '',
    SCA_ID: SCA_ID,
  });

  let list = ref([]);

  function shortenString(str: string) {
    if (str.length <= 7) {
      // If the string is already short or has 7 or fewer characters, return it as it is
      return str;
    } else {
      // Shorten the string by taking the first two characters and the last five characters
      return str.slice(0, 2) + '...' + str.slice(-5);
    }
  }

  async function getCurrentUser() {
    try {
      const response = await fetch(`http://127.0.0.1:3000/users/findUser?SCA_ID=${SCA_ID}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const user = await response.json();

        current.Firstname = user.Firstname;
        current.Lastname = user.Lastname;
        current.Tel = user.Tel;
        current.Role = user.Role;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function findUser(id: string) {
    try {
      const response = await fetch(`http://127.0.0.1:3000/users/findUser?SCA_ID=${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const user = await response.json();
        return user;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function findAllUsers() {
    try {
      const response = await fetch('http://127.0.0.1:3000/users/all', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const users = await response.json();
        list.value = users;
      }
    } catch (error) {
      console.error(error);
    }
  }

  return { SCA_ID_short, shortenString, current, getCurrentUser, SCA_ID, findUser, findAllUsers, list };
});
