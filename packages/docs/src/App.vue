<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <hello-world msg="lol"></hello-world>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style>
#app {
  padding: 60px;
}
</style>
