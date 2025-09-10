<script>
import "~/assets/css/main.css";
import { register } from "swiper/element/bundle";

register();
</script>
<template>
  <NuxtRouteAnnouncer />
  <Header />
  <main>
    <SalonHero />
    <SalonDetails />
    <SalonTeam />
    <SalonPreise />
    <SalonGalerie />
    <SalonAnfahrt />
  </main>
  <Footer />
</template>
