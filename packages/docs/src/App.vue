<template>
  <div class="flex flex-col h-full">
    <!-- <Header /> -->
    <router-view class="flex-grow"></router-view>
  </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <hello-world msg="lol"></hello-world> -->
</template>

<script setup lang="ts">
import Header from '@docs/core/layouts/Header.vue';
</script>

<style></style>
