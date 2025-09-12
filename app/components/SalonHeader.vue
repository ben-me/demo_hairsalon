<script setup lang="ts">
const LINKS = [
  { url: "/", label: "Home" },
  { url: "#team", label: "Team" },
  { url: "#preise", label: "Preise" },
  { url: "#galerie", label: "Galerie" },
  { url: "#anfahrt", label: "Anfahrt" },
];

const mobile_nav_active = ref(false);
const mobile_nav = useTemplateRef("mobile-nav");

watch(mobile_nav_active, (active) => {
  document.body.classList.toggle("overflow-hidden", active);

  const main = document.querySelector("main");
  if (main) {
    main.toggleAttribute("inert", active);
    main.toggleAttribute("aria-hidden", active);
  }
});

useTrapFocus(mobile_nav, () => (mobile_nav_active.value = false));
</script>

<template>
  <header
    class="absolute right-0 left-0 z-10 mx-auto mt-4 flex w-9/10 items-center justify-between rounded-md bg-[#8E8E8E]/25 px-4 py-2"
  >
    <h1 class="font-lobster text-2xl text-white">Demo Hair</h1>
    <nav
      aria-label="Header navigation"
      class="hidden font-semibold md:inline-block"
    >
      <ul class="flex gap-8">
        <li v-for="link of LINKS" :key="link.url">
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
    <UButton class="hidden font-bold text-white md:inline-block"
      >Termin buchen</UButton
    >
    <button
      class="flex items-center md:hidden"
      aria-label="Open mobile navigation"
      @click="mobile_nav_active = true"
    >
      <Icon name="quill:hamburger" class="size-10 text-white" />
    </button>

    <div
      v-if="mobile_nav_active"
      class="fixed inset-0 h-full w-full bg-black/20 md:hidden"
      @click="mobile_nav_active = false"
    />

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
        ref="mobile-nav"
        aria-modal="true"
        aria-label="Mobile Navigationsleiste"
        class="bg-secondary fixed top-0 right-0 h-full w-9/10 text-3xl font-semibold"
      >
        <ul class="flex w-full flex-col items-center gap-8">
          <li class="self-end px-8.5 pt-6">
            <button @click="mobile_nav_active = false">
              <Icon name="uil:times" class="size-10" />
            </button>
          </li>
          <li v-for="link of LINKS" :key="link.url">
            <a :href="link.url" @click="mobile_nav_active = false">
              {{ link.label }}
            </a>
          </li>
        </ul>
      </nav>
    </Transition>
  </header>
</template>
