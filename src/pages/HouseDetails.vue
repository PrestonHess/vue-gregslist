<template>
  <div class="houseDetails container-fluid">
    <div class="row">
      <div class="col-6 m-auto text-center">
        <button class="btn btn-secondary m-1" @click="$router.push({name:'Houses'})">Back</button>
        <button class="btn btn-danger" @click="deleteHouse()">Delete</button>
        <img :src="house.imgUrl" class="img-fluid" />
        <h4>Price : ${{house.price}}</h4>
        <p>Bedrooms : {{house.bedrooms}} | Bathrooms : {{house.bathrooms}}</p>
        <p>Levels: {{house.levels}} | Year Made : {{house.year}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "houseDetails",
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getHouse", this.$route.params.houseId);
  },
  computed: {
    house() {
      return this.$store.state.activeHouse;
    }
  },
  methods: {
    deleteHouse() {
      this.$store.dispatch("deleteHouse", this.house._id);
      this.$router.push({name: 'Houses'})
    }
  },
  components: {}
};
</script>


<style scoped>
</style>