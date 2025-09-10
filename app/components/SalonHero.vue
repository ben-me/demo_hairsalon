<script setup lang="ts">
const cdn_transform_link = "https://codepilots.de/cdn-cgi/image/";
const breakpoints = [320, 640, 768, 1024, 1280, 1536, 1920, 2048];
</script>
<template>
  <section class="relative mx-auto">
    <img
      class="h-[525px] w-full object-cover md:h-auto md:max-h-[950px]"
      src="/img/pablo_merchan_montes_o_sntavxbme_unsplash_2_1x.webp"
      :srcset="
        breakpoints
          .map((breakpoint) => {
            return `${cdn_transform_link}width=${breakpoint},format=auto/https://demo-hair.codepilots.de/img/pablo_merchan_montes_o_sntavxbme_unsplash_2_1x.webp ${breakpoint}w, `;
          })
          .join()
      "
      height="2731"
      width="4096"
      sizes="(min-width: 2100px) 1980px, (min-width: 840px) calc(91.94vw + 68px), 770px"
      fetchpriority="high"
      alt=""
    />
    <div
      class="flex flex-col gap-5 px-8 py-10 md:absolute md:top-1/2 md:left-15 md:max-w-100 md:-translate-y-1/2 md:rounded-md md:bg-black/60 md:text-white"
    >
      <h2 class="font-nunito text-5xl">
        Dein Style.<br />
        Unser Können.
      </h2>
      <p>
        Professionelle Haarschnitte und individuelle Beratung – für deinen
        perfekten Look jeden Tag.
      </p>
      <div class="flex flex-wrap gap-3">
        <UButton
          size="xl"
          class="self-stretch font-bold text-nowrap text-white"
        >
          Jetzt anrufen
        </UButton>
        <UButton
          to="#preise"
          size="xl"
          class="hover:bg-secondary/70 bg-secondary ring-secondary font-semibold text-nowrap text-black"
        >
          Unsere Preise
        </UButton>
      </div>
    </div>
  </section>
</template>
