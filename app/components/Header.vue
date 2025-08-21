<script setup lang="ts">
const LINKS = [
  { url: "#salon", label: "Team" },
  { url: "#preise", label: "Preise" },
  { url: "#galerie", label: "Galerie" },
  { url: "#anfahrt", label: "Anfahrt" },
];
</script>

<template>
  <header
    class="flex justify-between items-center mt-4 mx-2.5 bg-[#8E8E8E]/25 px-6 py-2 rounded-md"
  >
    <h1>Demo Hair</h1>
    <button class="flex items-center">
      <Icon name="quill:hamburger" class="size-10" />
    </button>
    <nav class="hidden">
      <ul>
        <li v-for="link of LINKS">
          <a :href="link.url">
            {{ link.label }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
