<script setup lang="ts">
const LINKS = [
  { url: "/", label: "Home" },
  { url: "#salon", label: "Team" },
  { url: "#preise", label: "Preise" },
  { url: "#galerie", label: "Galerie" },
  { url: "#anfahrt", label: "Anfahrt" },
];

let mobile_nav_active = ref(false);
</script>

<template>
  <header
    class="flex w-9/10 left-0 right-0 mx-auto z-10 fixed justify-between items-center mt-4 bg-[#8E8E8E]/25 px-4 py-2 rounded-md"
  >
    <h1 class="text-white font-lobster text-2xl">Demo Hair</h1>
    <nav class="hidden md:inline-block font-semibold">
      <ul class="flex gap-8">
        <li v-for="link of LINKS">
          <ULink
            class="text-white"
            :to="link.url"
            @click="mobile_nav_active = false"
          >
            {{ link.label }}
          </ULink>
        </li>
      </ul>
    </nav>
    <UButton class="hidden md:inline-block text-white font-bold"
      >Termin buchen</UButton
    >
    <button
      class="flex items-center md:hidden"
      @click="mobile_nav_active = true"
      aria-label="Open mobile navigation"
    >
      <Icon name="quill:hamburger" class="size-10 text-white" />
    </button>

    <div
      v-if="mobile_nav_active"
      @click="mobile_nav_active = false"
      class="fixed bg-black/20 md:hidden inset-0 w-full h-full"
    ></div>

    <Transition
      enter-active-class="transition-[translate] duration-200 absolute ease-in"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
      leave-active-class="transition-[translate] duration-200 absolute"
    >
      <nav
        v-if="mobile_nav_active"
        class="fixed bg-secondary h-full w-9/10 top-0 right-0 font-semibold text-3xl"
      >
        <ul class="flex flex-col gap-8 items-center w-full">
          <li class="self-end pt-6 px-8.5">
            <button @click="mobile_nav_active = false">
              <Icon name="uil:times" class="size-10" />
            </button>
          </li>
          <li v-for="link of LINKS">
            <a :href="link.url" @click="mobile_nav_active = false">
              {{ link.label }}
            </a>
          </li>
        </ul>
      </nav>
    </Transition>
  </header>
</template>
