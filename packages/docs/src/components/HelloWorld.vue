<template>
  <g-button variant="secondary" size="sm" outlined>Button</g-button>
  <g-button variant="primary" @click="onClick">Button</g-button>
  <g-button size="lg">Button</g-button>
  <g-button outlined variant="primary">Button</g-button>
  <g-button variant="success" outlined disabled>Button</g-button>
  <g-button round variant="error" type="submit" disabled @click="onClick"
    >Button</g-button
  >
  <g-checkbox v-model="checked" disabled>Petite checkbox</g-checkbox>
  <g-checkbox v-model="checked" variant="primary"
    >Petite checkbox primary</g-checkbox
  >

  <div class="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4 p-5">
    <g-card>test</g-card>
    <g-card outlined title="Title">Yo les amis</g-card>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorldLol',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0);
    const checked = ref(true);
    const onClick = (event: any) => console.log('click', event);
    return { onClick, checked };
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}

button {
  margin-left: 5px;
  margin-right: 5px;
}
</style>
