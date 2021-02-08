<template>
  <label v-if="label" :for="name" class="block text-gray-700">
    {{ label }}
  </label>
  <select
    :id="name"
    v-bind="$attrs"
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
    class="block w-full mt-1 border form-select"
  >
    <option
      v-for="option in options"
      :selected="option === modelValue"
      :value="option"
      :key="option"
    >
      {{ option }}
    </option>
  </select>
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
    options: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
