<script setup lang="ts">
import type { haircut_group } from "./Preise.vue";

const { selected_price_list, data, last_selected_list } = defineProps<{
  data: { name: string; preis: number }[];
  selected_price_list: haircut_group;
  last_selected_list: haircut_group;
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
      enter-active-class="transition-transform duration-200 ease-in"
      :enter-from-class="animations.in"
      enter-to-class="translate-x-0"
      leave-from-class="translate-x-0"
      :leave-to-class="animations.out"
      leave-active-class="transition-transform duration-200 ease-out"
    >
      <ul
        class="rounded-md bg-bg py-10 px-8 items-start content-start text-black grid grid-cols-1 md:grid-cols-2 gap-8"
        :key="selected_price_list"
      >
        <li v-for="haircut in data" :key="haircut.name" class="self-start">
          <div class="flex justify-between">
            <p>{{ haircut.name }}</p>
            <p class="text-nowrap">{{ haircut.preis }} €</p>
          </div>
          <hr class="border-gray-400/50 border-1" />
        </li>
      </ul>
    </Transition>
  </div>
</template>
