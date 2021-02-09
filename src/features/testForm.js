import { reactive, computed, toRefs } from "vue";

const categories = ["One", "Two", "Three"];

const radioOptions = [
  { label: "Yes", value: 1 },
  { label: "No", value: 0 },
];

const state = reactive({
  title: "",
  pets: 0,
  sport: false,
  counter: 0,
  category: "",
  twiceTheCounter: computed(() => state.counter * 2),
  thriceTheCounter: computed(() => state.counter * 3),
});

function testFunction(param) {
  return param + " smells";
}

export default () => ({
  ...toRefs(state),
  categories,
  radioOptions,
  testFunction,
});
