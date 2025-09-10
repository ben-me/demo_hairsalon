<script>
import "~/assets/css/main.css";
import { register } from "swiper/element/bundle";

register();
</script>
<template>
  <NuxtRouteAnnouncer />
  <SalonHeader />
  <main>
    <SalonHero />
    <SalonDetails />
    <SalonTeam />
    <SalonPreise />
    <SalonGalerie />
    <SalonAnfahrt />
  </main>
  <SalonFooter />
</template>
