<template>
  <section class="mx-auto relative">
    <NuxtImg
      class="h-[525px] object-cover md:h-auto md:max-h-[950px] w-full"
      src="img/pablo_merchan_montes_o_sntavxbme_unsplash_2_1x.webp"
    />
    <div
      class="p-6 flex md:max-w-100 md:gap-8 md:bg-black/60 md:text-white md:rounded-md flex-col gap-4 md:absolute md:top-1/2 md:left-15 md:-translate-y-1/2"
    >
      <h2 class="text-5xl font-nunito">
        Dein Style.<br />
        Unser Können.
      </h2>
      <p>
        Professionelle Haarschnitte und individuelle Beratung – für deinen
        perfekten Look jeden Tag.
      </p>
      <div class="flex gap-3">
        <UButton size="xl" class="text-white self-stretch font-bold">
          Jetzt anrufen
        </UButton>
        <UButton
          to="#preise"
          size="xl"
          class="text-black hover:bg-secondary/70 bg-secondary ring-secondary font-semibold"
        >
          Unsere Preise
        </UButton>
      </div>
    </div>
  </section>
</template>
