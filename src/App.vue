<script setup>
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <header>
    <Navigation />
  </header>
  <h2 class="heading-02 red temp">You've landed on a site that isn't done! Come back later, like next Tuesday.</h2>
  <RouterView />
</template>

<style>
  @media (max-width: 639px) {
    .temp {
      margin-left: 30px;
    }
  }
</style>
