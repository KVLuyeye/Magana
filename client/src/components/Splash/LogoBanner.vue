<script setup lang="ts">
import { ref, onMounted } from "vue";

const letters = ref(["M ", "A ", "G ", "A ", "N ", "A"]);
//const letters = ref(["L ", "U ", "Y ", "E ", "Y ", "E"]);

onMounted(() => {
  animateLetters();
});

function animateLetters() {
  const lettersContainer = ref("lettersContainer");
  const letterElements = lettersContainer.value;
}
</script>

<template>
  <section
    class="flex min-h-screen flex-col items-center justify-between bg-[#21452A] text-3xl text-[#FAF9F6]"
  >
    <div><!--Empty Positioning DIV --></div>

    <div ref="lettersContainer" class="letters-container">
      <div
        v-for="(letter, index) in letters"
        :key="index"
        class="letter"
        :style="{ animationDelay: `${index * 0.2}s` }"
      >
        {{ letter }}
      </div>
    </div>

    <div class="mb-4 text-xs">©2023 MAGANA Inc.</div>
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Coda+Caption:wght@800&family=Cormorant+Garamond:wght@300&family=Josefin+Sans:wght@700&family=Playfair+Display&display=swap");

section {
  font-family: serif;
}

.letters-container {
  display: flex;
}

.letter {
  letter-spacing: 0.25em;
  opacity: 0;
  animation: fade-in 0.3s ease-in-out forwards;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
