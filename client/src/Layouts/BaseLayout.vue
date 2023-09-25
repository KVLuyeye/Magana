<script setup lang="ts">
import Header from '@/components/Header/MainHeader.vue';
import NavBar from '@/components/Nav/NavBar.vue';
import Sidebar from '@/components/Nav/Sidebar.vue';

import { ref, provide, inject } from 'vue';

function showSidebar() {}

provide('showSidebar', showSidebar);
</script>

<template>
  <body class="] grid content-between items-center">
    <header>
      <slot name="header"> </slot>
    </header>

    <main class="grid content-evenly">
      <Sidebar />
      <slot name="main"></slot>
    </main>

    <footer class="">
      <slot name="footer"></slot>
    </footer>
  </body>
</template>

<style>
body {
  grid-template-rows: max-content;
  max-width: 820px;
  min-height: 100vh;
  max-height: 100vh;
}

main {
  grid-template-rows: max-content 1fr; /* Adjusted to two rows, first one for Sidebar */
  min-height: 0; /* Allow main content to grow vertically */
}
/* Add a media query to adjust the layout for smaller screen heights */
@media (max-height: 688px) {
  body {
    grid-template-rows: 0.5fr 5fr 0.5fr; /* Adjust the grid rows for smaller screens */
    height: 100vh; /* Remove max-height for smaller screens to allow content to overflow */
  }

  header {
    margin-bottom: 5em;
  }
}
</style>
