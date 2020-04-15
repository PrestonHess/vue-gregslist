<template>
  <div class="car border col-3" @click="selectCar()">
    <p>{{carData.make}}</p>
    <p>{{carData.model}}</p>
  </div>
</template>

<script>
export default {
  name: "car",
  props: ["carData"],
  data() {
    return {};
  },
  methods: {
    selectCar() {
      this.$store.commit("setActiveCar", {});
      this.$router.push({
        name: "CarDetails",
        params: { carId: this.carData._id }
      });
    }
  }
};
</script>

<style>
.cars {
  outline: 1px solid black;
}
</style>