<script setup lang="ts">
const { data } = await useFetch("/api/images");

const modal_open = ref(false);
const image_index = ref(0);

function openModal(index: number) {
  image_index.value = index;
  modal_open.value = true;
}

function nextImage() {
  if (data.value) {
    image_index.value = (image_index.value + 1) % data.value.length;
  }
}

function previousImage() {
  if (data.value) {
    image_index.value =
      (image_index.value - 1 + data.value.length) % data.value.length;
  }
}
</script>

<template>
  <Section id="galerie">
    <h2 class="font-nunito text-4xl">Galerie</h2>
    <ul
      class="grid grid-cols-2 gap-8 lg:grid-cols-[repeat(auto-fill,minmax(min(250px,100%),1fr))]"
    >
      <li v-for="(image, index) in data" class="w-full lg:max-w-[350px]">
        <NuxtImg
          class="aspect-square w-full rounded-md object-cover transition-all hover:scale-105"
          :src="image.url"
          :width="image.width"
          :height="image.height"
          alt=""
          @click="openModal(index)"
          sizes="xs:50vw sm:50vw md:50vw lg:100vw xl:100vw 2xl:100vw 3xl:100vw 4xl:100vw"
        />
      </li>
    </ul>

    <UModal
      v-model:open="modal_open"
      description="Stock picture of a haircut"
      title="Haircut example"
    >
      <template class="relative" #content>
        <button
          class="absolute top-1/2 left-0 flex -translate-y-1/2 items-center border-0 bg-black/30 px-1 py-2 text-white"
          @click="previousImage"
        >
          <Icon name="uil:angle-left-b" size="35" />
        </button>

        <NuxtImg
          :src="data?.[image_index]?.url"
          :width="data?.[image_index]?.width"
          :height="data?.[image_index]?.height"
          alt=""
          @click="modal_open = false"
          sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw 3xl:100vw 4xl:100vw"
        />

        <button
          class="absolute top-1/2 right-0 flex -translate-y-1/2 items-center border-0 bg-black/30 px-1 py-2 text-white"
          @click="nextImage"
        >
          <Icon name="uil:angle-right-b" size="35" />
        </button>
      </template>
    </UModal>
    <UButton class="self-center text-white" size="lg">
      Mehr Bilder laden
    </UButton>
  </Section>
</template>
