<script setup lang="ts">
import type { haircut_group } from "./Preise.vue";

const { selected_price_list, data, last_selected_list } = defineProps<{
  data: { name: string; preis: number }[];
  selected_price_list: haircut_group;
  last_selected_list?: haircut_group;
}>();

const animations = computed(() => {
  switch (selected_price_list) {
    case "Damen":
      return { in: "-translate-x-full", out: "translate-x-full" };
    case "Herren":
      if (last_selected_list === "Kinder") {
        return { in: "-translate-x-full", out: "translate-x-full" };
      }
      return { in: "translate-x-full", out: "-translate-x-full" };
    case "Kinder":
      return { in: "translate-x-full", out: "-translate-x-full" };
  }
});
</script>

<template>
  <div class="relative overflow-hidden">
    <Transition
      mode="out-in"
      enter-active-class="transition-transform duration-350 ease-in-out"
      :enter-from-class="animations.in"
      enter-to-class="translate-x-0"
      leave-from-class="translate-x-0"
      :leave-to-class="animations.out"
      leave-active-class="transition-transform duration-350 ease-in-out"
    >
      <ul
        class="bg-bg grid grid-cols-1 content-start items-start gap-8 rounded-md px-8 py-10 text-black md:grid-cols-2"
        :key="selected_price_list"
      >
        <li v-for="haircut in data" :key="haircut.name" class="self-start">
          <div class="flex justify-between gap-2">
            <p>{{ haircut.name }}</p>
            <p class="text-nowrap">{{ haircut.preis }} €</p>
          </div>
          <hr class="border-1 border-gray-400/50" />
        </li>
      </ul>
    </Transition>
  </div>
</template>
