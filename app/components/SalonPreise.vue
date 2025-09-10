<script setup lang="ts">
import data from "~/assets/data/leistungen.json";
import emblaCarouselVue from "embla-carousel-vue";
type haircut_group = "Damen" | "Herren" | "Kinder";

const [emblaRef, emblaApi] = emblaCarouselVue();
const categories = Object.keys(data.leistungen) as haircut_group[];
const selected_price_list = ref<haircut_group>("Damen");

function selectPriceList(index: number, category: haircut_group) {
  selected_price_list.value = category;
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
            :class="[
              selected_price_list === category &&
                'underline underline-offset-2',
            ]"
            @click="selectPriceList(index, category)"
          >
            {{ category }}
          </button>
        </li>
      </menu>
    </div>
    <div ref="emblaRef" class="overflow-hidden">
      <div class="flex gap-3">
        <ul
          v-for="(category, index) in data?.leistungen"
          :key="index"
          class="bg-bg grid flex-[0_0_100%] grid-cols-1 content-start items-start gap-8 rounded-md px-8 py-10 text-black md:grid-cols-2"
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
