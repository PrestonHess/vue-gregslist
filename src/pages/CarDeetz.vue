<template>
  <div class="car-details container-fluid">
    <div class="row">
      <div class="col-12 text-center">
        <img class="img-fluid" :src="car.imgUrl" alt srcset />
        <h5>{{car.make}}</h5>
        <h5>{{car.model}}</h5>
        <p>{{car.price}}</p>
        <p>{{car.year}}</p>
        <button class="btn btn-dark m-1" @click="$router.push({name:'Cars'})">Back</button>
        <button class="btn btn-danger" @click="deleteCar()">Delete</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "car-details",
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getCar", this.$route.params.carId);
  },
  computed: {
    car() {
      return this.$store.state.activeCar;
    }
  },
  methods: {
    deleteCar() {
      this.$router.push({ name: "Cars" });
      this.$store.dispatch("deleteCar", this.car._id);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>
