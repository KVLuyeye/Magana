<script lang="ts" setup>
import NavItem from "./NavItem.vue";
import HomeIcon from "@/assets/icons/HomeIcon.vue";
import ExchangeIcon from "@/assets/icons/ExchangeIcon.vue";
import AccountIcon from "@/assets/icons/AccountIcon.vue";
import TransactionIcon from "@/assets/icons/TransactionIcon.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

// Function to check if the route is active
const isActive = (path: string) => {
  return route.path === path;
};
</script>

<template>
  <nav
    class="flex h-[4em] flex-row items-center justify-between rounded-tl-lg rounded-tr-lg border border-b-0 border-l-0 border-r-0 border-solid border-black pl-4 pr-4"
  >
    <NavItem to="/home" :active="isActive('/home')">
      <HomeIcon :class="{ 'active-icon': isActive('/home') }" />
    </NavItem>
    <NavItem to="/transfer" :active="isActive('/transfer')">
      <TransactionIcon :class="{ 'active-icon': isActive('/transfer') }" />
    </NavItem>
    <NavItem to="/accounts" :active="isActive('/accounts')">
      <AccountIcon :class="{ 'active-icon': isActive('/accounts') }" />
    </NavItem>
  </nav>
</template>
