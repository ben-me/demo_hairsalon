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
    name: "Sabrina",
    title: "Friseurmeisterin",
    image_url: "img/team/lena.webp",
  },
];

const gallery = ref();
const gallery_list = ref();

onMounted(() => {
  update_widths();
  window.addEventListener("resize", update_widths);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", update_widths);
});

let finger_start_x = 0;
let gallery_position_at_start = ref(0);
let current_gallery_position = ref(0);

let gallery_list_width = ref(0);
let gallery_width = ref(0);

function update_widths() {
  gallery_width.value = gallery.value.offsetWidth || 0;
  gallery_list_width.value = gallery_list.value.offsetWidth || 0;
}

function start_finger_down(event: PointerEvent) {
  finger_start_x = event.clientX;
  gallery_position_at_start.value = current_gallery_position.value;
}

function horizontal_gallery_scroll(event: PointerEvent) {
  const finger_move_x = event.clientX - finger_start_x;
  let proposed_position = gallery_position_at_start.value + finger_move_x;

  const max_scroll_right = 0;
  const max_scroll_left = gallery_width.value - gallery_list_width.value;

  if (proposed_position > max_scroll_right) {
    proposed_position = max_scroll_right;
  }
  if (proposed_position < max_scroll_left) {
    proposed_position = max_scroll_left;
  }

  current_gallery_position.value = proposed_position;
}
</script>

<template>
  <section
    class="px-6 py-10 flex flex-col lg:py-20 md:grid md:grid-cols-[35%_65%] gap-8"
  >
    <div>
      <h2 class="font-nunito text-4xl">Das Team</h2>
      <p>
        Vertraue deine Haare unserem Team von professionell ausgebildeten und
        kreativen Stylisten an.
      </p>
    </div>
    <div
      ref="gallery"
      class="overflow-hidden touch-pan-y"
      @pointerdown.prevent="start_finger_down"
      @pointermove="horizontal_gallery_scroll"
    >
      <ul
        ref="gallery_list"
        class="flex gap-5 translate-x-[var(--translate-x)] w-max transition-none"
        :style="{ '--translate-x': current_gallery_position + 'px' }"
      >
        <li v-for="member in MEMBERS">
          <UCard
            variant="solid"
            as="article"
            class="min-w-[250px]"
            :ui="{ body: 'p-0 sm:p-0' }"
          >
            <NuxtImg
              class="w-[250px] h-[310px] object-cover"
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
