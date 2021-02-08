<template>
  <component
    v-for="option in options"
    :key="option.value"
    :is="vertical ? 'div' : 'span'"
    :class="vertical ? 'mb-2' : 'mr-4'"
  >
    <BaseRadio
      :label="option.label"
      :value="option.value"
      :modelValue="modelValue"
      :name="name"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </component>
</template>

<script>
import BaseRadio from "./BaseRadio.vue";

export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    BaseRadio,
  },
};
</script>
