<template>
  <div v-tw="'flex flex-col justify-center h-full'">
    <div v-tw="'flex flex-col items-center justify-center flex-grow'">
      <img
        v-tw="'w-40 mb-8'"
        alt="Groggy UI logo"
        src="../assets/groggy-ui-logo.png"
      />
      <p v-tw="'text-5xl mb-8 font-medium'">Groggy UI</p>
      <p v-tw="'text-md'">Vue 3 component library</p>
      <p>Styled with Tailwind, written in TypeScript</p>
      <div v-tw="'mt-8'">
        <g-button v-tw="'mr-4'" size="lg" @click="$router.push('docs')"
          >Get Started</g-button
        >
        <g-button size="lg" variant="outlined" @click="goToGithub"
          >Github</g-button
        >
      </div>
    </div>
    <!-- <div
      class="bg-gray-800 flex flex-row items-center justify-center flex-grow"
    >
      LOL
    </div> -->

    <!-- <ul class="mt-3">
      <li class="mb-2">
        <g-icon size="1.5rem"
          ><svg class="mx-auto block h-24 mb-3" viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><circle id="b" cx="40" cy="40" r="40"></circle><filter x="-8.8%" y="-6.2%" width="117.5%" height="117.5%" filterUnits="objectBoundingBox" id="a"><feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" in="shadowBlurOuter1"></feColorMatrix></filter><linearGradient x1="0%" y1="0%" y2="100%" id="c"><stop stop-color="#2383AE" offset="0%"></stop><stop stop-color="#6DD7B9" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><g transform="translate(5 5)"><use fill="#000" filter="url(#a)" xlink:href="#b"></use><use fill="#FFF" xlink:href="#b"></use></g><path d="M25.6 33.92C27.52 26.24 32.32 22.4 40 22.4c11.52 0 12.96 8.64 18.72 10.08 3.84.96 7.2-.48 10.08-4.32-1.92 7.68-6.72 11.52-14.4 11.52-11.52 0-12.96-8.64-18.72-10.08-3.84-.96-7.2.48-10.08 4.32zM11.2 51.2c1.92-7.68 6.72-11.52 14.4-11.52 11.52 0 12.96 8.64 18.72 10.08 3.84.96 7.2-.48 10.08-4.32-1.92 7.68-6.72 11.52-14.4 11.52-11.52 0-12.96-8.64-18.72-10.08-3.84-.96-7.2.48-10.08 4.32z" fill="url(#c)" transform="translate(5 5)"></path></g></svg></g-icon>
        <span class="ml-3">Styled with tailwind</span>
      </li>
      <li>
        <g-icon size="1.5rem"
          ><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<path style="fill:#0078CF;" d="M512,256c0,23.155-3.072,45.599-8.84,66.936c-13.479,49.894-41.66,93.748-79.621,126.631
	C378.64,488.469,320.073,512,256,512C114.615,512,0,397.385,0,256S114.615,0,256,0S512,114.615,512,256z"/>
<g>
	<path style="fill:#F2F2F2;" d="M503.16,322.936c-13.479,49.894-41.66,93.748-79.621,126.631c-3.709,0.199-7.586,0.293-11.609,0.293
		c-53.154,0-82.693-33.217-97.374-58.138l48.191-28.954c0,0,16.394,34.837,47.125,34.837c30.741,0,43.039-10.25,43.039-33.813
		c0-28.693-99.391-38.933-114.761-88.116c-15.37-49.183,5.12-118.868,76.852-113.737c44.826,3.197,70.04,25.213,82.651,41.273
		l-47.815,34.544c-10.25-29.706-52.255-29.706-60.458-5.12c-8.192,24.597,19.466,38.933,62.506,53.279
		C473.997,293.282,491.781,306.876,503.16,322.936z"/>
	<polygon style="fill:#F2F2F2;" points="300.943,169.786 83.106,169.786 83.106,221.202 162.935,221.202 162.935,444.45 
		221.115,444.45 221.115,221.202 300.943,221.202 	"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg></g-icon>
        <span class="ml-3">Created with TypeScript</span>
      </li>
    </ul> -->
  </div>
</template>

<script setup lang="ts">
import { GIcon, GButton } from '@groggy-ui/vue';
import { ref } from '@vue/reactivity';

const world = ref('world');
const goToGithub = () => {
  window.open('https://github.com/pchmn/groggy-ui-vue', '_blank');
};
</script>

<style scoped></style>
