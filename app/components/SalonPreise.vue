<script setup lang="ts">
import data from "~/assets/data/leistungen.json";
import emblaCarouselVue from "embla-carousel-vue";
import AutoHeight from "embla-carousel-auto-height";
type haircut_group = "Damen" | "Herren" | "Kinder";

const [emblaRef, emblaApi] = emblaCarouselVue({}, [AutoHeight()]);
const categories = Object.keys(data.leistungen) as haircut_group[];
const selected_price_list = ref(0);

onMounted(() => {
  if (emblaApi.value)
    emblaApi.value.on("select", (emblaApi) =>
      selectPriceList(emblaApi.selectedScrollSnap()),
    );
});

function selectPriceList(index: number) {
  selected_price_list.value = index;
  emblaApi.value?.scrollTo(index, false);
}
</script>

<template>
  <PageSection id="preise" class="bg-[#993838] text-white">
    <div class="grid gap-3">
      <h2 class="font-nunito text-center text-4xl">Preisliste</h2>
      <menu class="mx-auto flex w-full max-w-60 justify-between">
        <li v-for="(category, index) in categories" :key="category">
          <button
            :aria-selected="selected_price_list === index"
            :aria-label="`Preise für ${selected_price_list === 0 ? 'Damen' : selected_price_list === 1 ? 'Herren' : 'Kinder'}`"
            :class="[
              selected_price_list === index && 'underline underline-offset-2',
            ]"
            @click="selectPriceList(index)"
          >
            {{ category }}
          </button>
        </li>
      </menu>
    </div>
    <div ref="emblaRef" class="overflow-hidden">
      <div class="flex items-start gap-3 transition-[height] duration-150">
        <ul
          v-for="(category, index) in data?.leistungen"
          :key="index"
          class="bg-bg grid h-full flex-[0_0_100%] grid-cols-1 content-start items-start gap-8 rounded-md px-8 py-10 text-black md:grid-cols-2"
        >
          <li
            v-for="haircut in category"
            :key="haircut.name"
            class="self-start"
          >
            <div class="flex justify-between gap-2">
              <p>{{ haircut.name }}</p>
              <p class="text-nowrap">{{ haircut.preis }} €</p>
            </div>
            <hr class="border-1 border-gray-400/50" />
          </li>
        </ul>
      </div>
    </div>
  </PageSection>
</template>
