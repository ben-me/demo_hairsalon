<script setup lang="ts">
import { MglMap, MglNavigationControl } from "@indoorequal/vue-maplibre-gl";
import type { LngLatLike } from "maplibre-gl";

const opening_times = [
  { day: "Montag", timeframe: "09:00 - 17:00" },
  { day: "Dienstag", timeframe: "08:00 - 16:00" },
  { day: "Mittwoch", timeframe: "09:00 - 15:00" },
  { day: "Donnerstag", timeframe: "10:00 - 18:00" },
  { day: "Freitag", timeframe: "08:00 - 16:00" },
  { day: "Samstag", timeframe: "10:00 - 16:00" },
];

const saarbruecken = [6.99619, 49.23265] as LngLatLike;
</script>

<template>
  <Section class="bg-accent md:flex-row-reverse" id="anfahrt">
    <div class="flex grow flex-col gap-6">
      <h2 class="font-nunito text-4xl">Anfahrt | Öffnungszeiten</h2>
      <p>
        Wir sind von Montag bis Samstag für dich da und freuen uns auf deinen
        Besuch!
      </p>
      <table class="w-full">
        <thead>
          <tr>
            <th scope="col" class="sr-only">Tag</th>
            <th scope="col" class="sr-only">Öffnungszeiten</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="opening_time in opening_times"
            class="flex justify-between"
          >
            <th scope="row">{{ opening_time.day }}:</th>
            <td>{{ opening_time.timeframe }} Uhr</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="w-full md:w-1/2">
      <MglMap
        map-style="https://tiles.openfreemap.org/styles/liberty"
        :zoom="12"
        :center="saarbruecken"
        height="350px"
      >
        <mgl-navigation-control position="top-right" />
      </MglMap>
    </div>
  </Section>
</template>

<style>
@import "maplibre-gl/dist/maplibre-gl.css";
</style>
