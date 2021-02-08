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
        {{ test("Gareth") }}
        {{ category }}
        {{ sport }}
        {{ pets }}
      </code>
    </div>
  </transition>
</template>

<script>
import { ref, computed } from "vue";
import BaseInput from "./components/BaseInput.vue";
import BaseSelect from "./components/BaseSelect.vue";
import BaseCheckbox from "./components/BaseCheckbox.vue";
import BaseRadioGroup from "./components/BaseRadioGroup.vue";

export default {
  components: {
    BaseInput,
    BaseSelect,
    BaseCheckbox,
    BaseRadioGroup,
  },
  setup() {
    // this works like the data object
    const title = ref("");
    const pets = ref(0);
    const sport = ref(false);
    const counter = ref(0);
    const category = ref("");
    const twiceTheCounter = computed(() => counter.value * 2);
    const thriceTheCounter = computed(() => counter.value * 3);
    function test(param) {
      return param + " smells";
    }
    const categories = ["One", "Two", "Three"];
    const radioOptions = [
      { label: "Yes", value: 1 },
      { label: "No", value: 0 },
    ];
    return {
      test,
      pets,
      title,
      sport,
      counter,
      category,
      categories,
      radioOptions,
      twiceTheCounter,
      thriceTheCounter,
    };
  },
};
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
