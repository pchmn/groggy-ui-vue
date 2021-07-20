<template>
  <div v-tw="'inline-flex items-center'">
    <g-button color="secondary" size="sm" variant="outlined" loading
      >Button</g-button
    >
    <g-button color="primary" @click="onClick"
      ><template #left-icon><adjustments /></template>Button</g-button
    >
    <g-button :color="variant" loading @click="onClick">Button</g-button>
    <g-button size="lg" loading variant="flat"
      ><template #right-icon><adjustments /></template>Button</g-button
    >
    <g-button variant="outlined" color="neutral">
      <template #right-icon><adjustments /></template>Button</g-button
    >
    <g-button color="success" outlined disabled
      ><template #left-icon><adjustments /></template>Button</g-button
    >
    <g-button
      round
      variant="error"
      type="submit"
      disabled
      loading
      @click="onClick"
      >Button</g-button
    >

    <g-button @click="switchTheme">{{
      theme?.type === 'dark' ? 'Light' : 'Dark'
    }}</g-button>
    <!-- <g-checkbox
      v-model="checked"
      value="Checkbox sm"
      size="sm"
      disabled
    ></g-checkbox>
    <g-checkbox v-model="checked" value="Checkbox sm" size="md"></g-checkbox>
    <div v-tw="'inline-flex items-center'">
      <g-checkbox v-model="checkboxGroup" value="Checkbox sm" size="sm"
        >Checkbox sm</g-checkbox
      >
      <g-checkbox
        v-model="checkboxGroup"
        value="Checkbox md"
        variant="primary"
        size="md"
        >Checkbox md</g-checkbox
      >
      <g-checkbox
        id="lol"
        v-model="checkboxGroup"
        value="Checkbox lg"
        variant="secondary"
        size="lg"
        >Checkbox lg</g-checkbox
      >
      {{ checkboxGroup }}
    </div>

    <div v-tw="'inline-flex items-center'">
      <g-radio name="radio" variant="primary">Radio 1</g-radio>
      <g-radio variant="secondary" name="radio" checked>Radio 2</g-radio>
      <g-radio variant="warning" name="radio">Radio 3</g-radio>
      <g-radio name="radio">Radio 4</g-radio>
    </div>

    <g-spinner size="3rem" variant="primary"></g-spinner>

    <g-icon size="0.75rem"><adjustments /></g-icon>
    <g-icon variant="primary" size="1rem"><adjustments /></g-icon>
    <g-icon><adjustments /></g-icon>
    <g-icon color="red-500" size="2rem"><adjustments /></g-icon>
    <g-icon variant="secondary" size="40px"><adjustments /></g-icon> -->
  </div>

  <br />
  <div v-tw="'inline-flex items-center'">
    <g-radio name="radio" variant="primary">Radio 1</g-radio>
    <g-radio variant="secondary" name="radio" checked>Radio 2</g-radio>
    <g-radio variant="warning" name="radio">Radio 3</g-radio>
    <g-radio name="radio">Radio 4</g-radio>
  </div>
  <br />
  <div v-tw="'inline-flex items-center'">
    <g-checkbox v-model="checkboxGroup" value="Checkbox sm" size="sm"
      >Checkbox sm</g-checkbox
    >
    <g-checkbox
      v-model="checkboxGroup"
      value="Checkbox md"
      color="primary"
      size="md"
      >Checkbox md</g-checkbox
    >
    <g-checkbox
      id="lol"
      v-model="checkboxGroup"
      value="Checkbox lg"
      color="secondary"
      size="lg"
      >Checkbox lg</g-checkbox
    >
    <g-switch
      v-model="checkboxGroup"
      value="Switch sm"
      size="sm"
      color="secondary"
      >Switch dm</g-switch
    >
    <g-switch v-model="checkboxGroup" value="Switch md">Switch md</g-switch>
    <g-switch v-model="checkboxGroup" value="Switch lg" size="lg" disabled
      >Switch lg</g-switch
    >
    {{ checkboxGroup }}
  </div>

  <div class="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4 p-5">
    <g-card>
      <g-input :variant="variant" placeholder="Placeholder"
        ><template #suffix-icon><user /></template>
        <template #prefix>http://</template></g-input
      >
      <g-checkbox></g-checkbox>
      <g-switch></g-switch>
      theme: {{ theme?.type }}
    </g-card>
    <g-card outlined title="Title">
      <div v-tw="'inline-flex items-baseline'">
        <g-input color="primary" placeholder="Small" size="sm"
          ><template #suffix-icon><user /></template
        ></g-input>
        <g-input
          color="secondary"
          placeholder="Medium"
          status="error"
          helper-text="Warning message"
          variant="outlined"
          ><template #prefix-icon><lock /></template
        ></g-input>
        <g-input placeholder="Default" variant="outlined"
          ><template #prefix>http://</template
          ><template #suffix>.com</template></g-input
        >
        <g-input color="primary" placeholder="Large" size="lg"
          ><template #suffix-icon><user /></template
        ></g-input>
      </div>
      <div v-tw="'inline-flex items-baseline'"></div>
    </g-card>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { Adjustments, User, Lock } from '@vicons/carbon';
import { useTheme } from '@groggy-ui/vue';

export default defineComponent({
  name: 'HelloWorldLol',
  components: {
    Adjustments,
    User,
    Lock,
  },
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const { theme, switchThemeTo } = useTheme();
    const checked = ref(false);
    const checkboxGroup = ref(['Checkbox lg', 'Switch md']);
    const variant = ref('primary');
    const onClick = (event: any) => {
      console.log('click', event);
      variant.value = variant.value === 'primary' ? 'secondary' : 'primary';
    };
    const switchTheme = () => {
      switchThemeTo(theme?.type === 'dark' ? 'light' : 'dark');
    };
    return { onClick, checked, checkboxGroup, theme, switchTheme, variant };
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
