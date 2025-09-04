<template>
  <section class="relative mx-auto">
    <NuxtImg
      class="h-[525px] w-full object-cover md:h-auto md:max-h-[950px]"
      src="img/pablo_merchan_montes_o_sntavxbme_unsplash_2_1x.webp"
      preload
      height="2731"
      width="4096"
      alt=""
      loading="eager"
      sizes="xs:100vw, sm:100vw, md:100vw, lg:100vw, xl:100vw, 2xl:100vw"
      densities="1x 2x"
      fetchpriority="high"
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
      <div class="flex gap-3">
        <UButton size="xl" class="self-stretch font-bold text-white">
          Jetzt anrufen
        </UButton>
        <UButton
          to="#preise"
          size="xl"
          class="hover:bg-secondary/70 bg-secondary ring-secondary font-semibold text-black"
        >
          Unsere Preise
        </UButton>
      </div>
    </div>
  </section>
</template>
