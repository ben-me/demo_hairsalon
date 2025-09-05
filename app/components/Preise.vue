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
  <Section id="preise" class="bg-[#993838] text-white">
    <div class="grid gap-3">
      <h2 class="font-nunito text-center text-4xl">Preisliste</h2>
      <menu class="mx-auto flex w-full max-w-60 justify-between">
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
  </Section>
</template>
