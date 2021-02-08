<template>
  <input
    :id="name"
    type="radio"
    :checked="modelValue === value"
    :value="value"
    :name="name"
    @change="$emit('update:modelValue', value)"
    class="border form-radio"
  />
  <label v-if="label" :for="name" class="ml-1">
    {{ label }}
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    value: {
      type: [String, Number],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
