<template>
  <div class="cars col-12">
    <!-- i will build a bunch of car components for each car -->
    <div class="row">
      <create-car></create-car>
      <car v-for="car in cars" :carData="car" :key="car._id"></car>
      <!-- car deetz go here -->
    </div>
  </div>
</template>

<script>
import Car from "../components/Car";
import CreateCar from "../components/CreateCar";
export default {
  name: "cars",
  data() {
    return {};
  },
  computed: {
    cars() {
      return this.$store.state.cars.sort(
        (a, b) => a.make.charCodeAt(0) - b.make.charCodeAt(0)
      );
    }
  },
  created() {
    this.$store.dispatch("getCars");
  },
  methods: {},
  components: {
    Car,
    CreateCar
  }
};
</script>

<style>
.cars {
  outline: 1px solid black;
}
</style>







