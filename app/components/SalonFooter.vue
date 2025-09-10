<script setup lang="ts">
const LINKS = [
  { url: "/", label: "Home" },
  { url: "#team", label: "Team" },
  { url: "#preise", label: "Preise" },
  { url: "#galerie", label: "Galerie" },
  { url: "#anfahrt", label: "Anfahrt" },
];
</script>
<template>
  <footer class="bg-text text-white">
    <Section class="sm:flex-row sm:justify-between">
      <div class="flex flex-col gap-2 sm:gap-6">
        <h2 class="font-lobster text-4xl">Demo Hair</h2>
        <UButton
          class="inline-block self-start text-nowrap text-white"
          href="tel:+491234567890"
        >
          Jetzt anrufen
        </UButton>
      </div>
      <div class="flex flex-col gap-2 sm:gap-6">
        <div>
          <h3 class="underline">Unsere Adresse:</h3>
          <address class="text-white/80">
            Demo Hair <br />
            78910 Musterstadt <br />
            Musterstraße 123
          </address>
        </div>
        <div>
          <h3 class="underline">E-Mail:</h3>
          <a class="text-blue-400 underline" href="mailto:testmail@demohair.de">
            testmail@demohair.de
          </a>
        </div>
        <div>
          <h3 class="mb-3 underline">Telefon:</h3>
          <a class="text-blue-400 underline" href="+49123456789012">
            +49 1234 567 890 12
          </a>
        </div>
      </div>
      <nav aria-label="Footer navigation links">
        <ul class="flex flex-col gap-1 sm:gap-6">
          <li v-for="link in LINKS" :key="link.url">
            <a :href="link.url">
              {{ link.label }}
            </a>
          </li>
        </ul>
      </nav>

      <div class="gap flex flex-col gap-1 sm:justify-between">
        <div class="flex flex-col">
          <a href="/">Impressum</a>
          <a href="/">Datenschutzerklärung</a>
        </div>
        <div class="flex gap-6 text-2xl text-white/60">
          <Icon name="uil:twitter-alt" />
          <Icon name="uil:linkedin-alt" />
          <Icon name="uil:facebook" />
          <Icon name="uil:instagram" />
        </div>
      </div>
    </Section>
  </footer>
</template>
