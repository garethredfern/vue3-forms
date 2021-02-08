<template>
  <label v-if="label" :for="name" class="block text-gray-700">
    {{ label }}
  </label>
  <input
    :id="name"
    v-bind="$attrs"
    :value="modelValue"
    :placeholder="label"
    @input="$emit('update:modelValue', $event.target.value)"
    class="block w-full mt-1 border form-input"
  />
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
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
