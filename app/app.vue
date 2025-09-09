<script>
import "~/assets/css/main.css";

useSeoMeta({
  description:
    "Willkommen auf meiner Portfoliowebseite eines fiktionalen Friseursalons der CodePilots. So könnte Ihre, von mir erstellte, Webseite aussehen.",
});
</script>
<template>
  <NuxtRouteAnnouncer />
  <Header />
  <main>
    <Hero />
    <Salon />
    <Team />
    <Preise />
    <Galerie />
    <Anfahrt />
  </main>
  <Footer />
</template>
