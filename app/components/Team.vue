<script setup lang="ts">
const MEMBERS = [
  {
    name: "Sabrina",
    title: "Friseurmeisterin",
    image_url: "img/team/sabrina.webp",
  },
  {
    name: "Eric",
    title: "Friseurmeister",
    image_url: "img/team/eric.webp",
  },
  {
    name: "Lena",
    title: "Friseurmeisterin",
    image_url: "img/team/lena.webp",
  },
];
</script>

<template>
  <section
    id="team"
    class="flex flex-col gap-3 px-6 py-10 md:grid md:grid-cols-[35%_1fr] lg:p-20"
  >
    <div>
      <h2 class="font-nunito text-4xl">Das Team</h2>
      <p>
        Vertraue deine Haare unserem Team von professionell ausgebildeten und
        kreativen Stylisten an.
      </p>
    </div>
    <div ref="gallery" class="overflow-auto py-1">
      <ul
        class="flex w-max gap-5 md:grid md:w-full md:grid-cols-[repeat(auto-fill,minmax(min(100%,250px),1fr))]"
      >
        <li v-for="member in MEMBERS">
          <UCard
            variant="solid"
            as="article"
            class="min-w-[250px]"
            :ui="{ body: 'p-0 sm:p-0' }"
          >
            <NuxtImg
              class="h-[310px] w-full object-cover"
              :src="member.image_url"
              :alt="`Picture of ${member.name}`"
            />
            <template #footer>
              <h3 class="text-2xl">{{ member.name }}</h3>
              <p class="opacity-60">{{ member.title }}</p>
            </template>
          </UCard>
        </li>
      </ul>
    </div>
  </section>
</template>
