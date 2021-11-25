<template>
  <g-drawer-layout>
    <template #mobile-header>
      <img
        v-tw="'w-8 mr-3'"
        alt="Groggy UI logo"
        src="../assets/groggy-ui-logo.png"
      />
      <span v-tw="'font-medium'">Groggy UI</span>
    </template>
    <template #drawer>
      <g-drawer>
        <template #header>
          <div
            v-tw="'inline-flex items-center cursor-pointer'"
            @click="$router.push('/')"
          >
            <img
              v-tw="'w-12 mr-4'"
              alt="Groggy UI logo"
              src="../assets/groggy-ui-logo.png"
            />
            <span v-tw="'text-xl'">Groggy UI</span>
          </div>
        </template>
        <g-drawer-group title="Getting Started">
          <g-drawer-item>Introduction</g-drawer-item>
          <g-drawer-item>Installation</g-drawer-item>
        </g-drawer-group>
        <g-drawer-group title="components">
          <drawer-item-link to="/docs/button">Button</drawer-item-link>
          <drawer-item-link to="/docs/card">Card</drawer-item-link>
          <g-drawer-item>Checkbox</g-drawer-item>
          <g-drawer-item>Icon</g-drawer-item>
          <g-drawer-item>Input</g-drawer-item>
        </g-drawer-group>
      </g-drawer>
    </template>
    <template #container>
      <router-view></router-view>
    </template>
  </g-drawer-layout>
</template>

<script lang="ts" setup>
import {
  GDrawerLayout,
  GDrawer,
  GDrawerItem,
  GDrawerGroup,
  useMediaQuery,
  GButton,
} from '@groggy-ui/vue';
import DrawerItemLink from '@docs/components/DrawerItemLink.vue';

const { matches, width } = useMediaQuery('lg', 'up');
console.log('useMediaQuery', width);
</script>

<style scoped></style>
