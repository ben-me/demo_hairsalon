<script setup lang="ts">
const MEMBERS = [
  {
    name: "Sabrina",
    title: "Friseurmeisterin",
    image_url: "/img/team/sabrina.webp",
    width: 3257,
    height: 4096,
  },
  {
    name: "Eric",
    title: "Friseurmeister",
    image_url: "/img/team/eric.webp",
    width: 3073,
    height: 4096,
  },
  {
    name: "Lena",
    title: "Friseurmeisterin",
    image_url: "/img/team/lena.webp",
    width: 3074,
    height: 4096,
  },
];
</script>

<template>
  <PageSection id="team" class="md:grid md:grid-cols-[35%_1fr]">
    <div>
      <h2 class="font-nunito mb-2.5 text-4xl">Das Team</h2>
      <p class="opacity-75">
        Vertraue deine Haare unserem Team von professionell ausgebildeten und
        kreativen Stylisten an.
      </p>
    </div>
    <div ref="gallery" class="overflow-auto py-1">
      <ul
        class="flex w-max gap-5 md:grid md:w-full md:grid-cols-[repeat(auto-fill,minmax(min(100%,250px),1fr))]"
      >
        <li v-for="member in MEMBERS" :key="member.image_url">
          <UCard
            variant="solid"
            as="article"
            class="min-w-[250px]"
            :ui="{ body: 'p-0 sm:p-0' }"
          >
            <NuxtImg
              :height="member.height"
              :width="member.width"
              sizes="xs:250px sm:250px md:250px lg:250px xl:250px 2xl:250px 3xl:250px 4xl:250px"
              class="h-[310px] w-full object-cover"
              :src="member.image_url"
              :alt="`Ein Foto von ${member.name}`"
            />
            <template #footer>
              <h3 class="text-2xl">{{ member.name }}</h3>
              <p class="opacity-60">{{ member.title }}</p>
            </template>
          </UCard>
        </li>
      </ul>
    </div>
  </PageSection>
</template>
