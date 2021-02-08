<template>
  <div class="flex items-center">
    <input
      :id="name"
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
      class="border form-checkbox"
    />
    <label v-if="label" :for="name" class="ml-1">
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
