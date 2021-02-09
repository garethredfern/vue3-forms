<template>
  <form class="p-5 border rounded md:max-w-sm bg-gray-50">
    <div class="mb-4">
      <BaseInput label="Title" type="text" name="title" v-model="title" />
    </div>
    <div class="mb-4">
      <BaseInput
        label="Counter"
        type="number"
        name="counter"
        v-model.number="counter"
      />
    </div>
    <div class="mb-4">
      <BaseSelect
        label="Categories"
        name="categories"
        :options="categories"
        v-model="category"
      />
    </div>
    <div class="mb-4">
      <BaseCheckbox name="sport" label="Likes Sport" v-model="sport" />
    </div>
    <div class="mb-4">
      <h3>Pets</h3>
      <BaseRadioGroup v-model="pets" name="pets" :options="radioOptions" />
    </div>
  </form>
  <transition name="fade">
    <div class="p-5">
      <h2 class="mb-5">Data:</h2>
      <code class="p-5 bg-gray-100 border">
        {{ title }}
        {{ twiceTheCounter }}
        {{ thriceTheCounter }}
        {{ testFunction("Gareth") }}
        {{ category }}
        {{ sport }}
        {{ pets }}
      </code>
    </div>
  </transition>
</template>

<script>
import { defineComponent } from "vue";
import useTestForm from "./features/testForm";
import BaseInput from "./components/BaseInput.vue";
import BaseSelect from "./components/BaseSelect.vue";
import BaseCheckbox from "./components/BaseCheckbox.vue";
import BaseRadioGroup from "./components/BaseRadioGroup.vue";

export default defineComponent({
  components: {
    BaseInput,
    BaseSelect,
    BaseCheckbox,
    BaseRadioGroup,
  },
  setup() {
    const testFormState = useTestForm();
    return {
      ...testFormState,
    };
  },
});
</script>

<style>
body {
  padding: 2rem;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
</style>
