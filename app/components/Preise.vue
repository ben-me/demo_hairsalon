<script setup lang="ts">
import data from "~/assets/data/leistungen.json";

export type haircut_group = "Damen" | "Herren" | "Kinder";

const categories = Object.keys(data.leistungen) as haircut_group[];
const selected_price_list = ref<haircut_group>("Damen");
let last_selected_list: haircut_group;

function switchHaircutList(new_list: haircut_group) {
  last_selected_list = selected_price_list.value;
  selected_price_list.value = new_list;
}
</script>

<template>
  <section
    id="preise"
    class="bg-[#993838] h-[800px] md:h-[530px] lg:h-[630px] text-white px-6 py-10 flex flex-col lg:py-15 lg:px-20 lg:gap-15 gap-8"
  >
    <div class="grid gap-3">
      <h2 class="text-4xl text-center font-nunito">Preisliste</h2>
      <menu class="flex w-max justify-between mx-auto gap-15">
        <li v-for="category in categories" :key="category">
          <button
            @click="switchHaircutList(category)"
            :class="[
              selected_price_list === category &&
                'underline underline-offset-2',
            ]"
          >
            {{ category }}
          </button>
        </li>
      </menu>
    </div>
    <PreisListe
      :selected_price_list
      :last_selected_list
      :data="data?.leistungen[selected_price_list]"
    />
  </section>
</template>
