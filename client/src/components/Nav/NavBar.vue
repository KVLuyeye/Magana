<script lang="ts" setup>
import NavItem from "./NavItem.vue";
import HomeIcon from "@/assets/icons/HomeIcon.vue";
import ExchangeIcon from "@/assets/icons/ExchangeIcon.vue";
import AccountIcon from "@/assets/icons/AccountIcon.vue";
import TransactionIcon from "@/assets/icons/TransactionIcon.vue";
</script>

<template>
  <nav
    class="h-[4em] rounded-tl-lg rounded-tr-lg border border-b-0 border-l-0 border-r-0 border-solid border-black pl-4 pr-4"
  >
    <ul class="flex h-[100%] flex-row items-center justify-between text-sm">
      <!--Home Payments Wallets Loan Exchange -->
      <NavItem to="/home"> <HomeIcon /> </NavItem>
      <!-- Overview of all the important functionalities-->
      <NavItem to="/transfer"> <TransactionIcon /> </NavItem>
      <NavItem to="/accounts"> <AccountIcon /> </NavItem>

      <!---->
    </ul>
  </nav>
</template>
