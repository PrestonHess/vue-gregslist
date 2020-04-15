<template>
  <div class="houses container-fluid">
    <div class="row">
    <create-house></create-house>
    <house v-for="house in houses" :houseData="house" :key="house._id"></house>
    </div>
  </div>
</template>


<script>
import CreateHouse from '../components/CreateHouse.vue'
import House from "../components/House.vue"
export default {
  name: 'houses',
  data(){
    return {}
  },
  computed:{
    houses() {
      return this.$store.state.houses
    }
  },
  created() {
    this.$store.dispatch('getHouses')
  },
  methods:{},
  components:{ House, CreateHouse }
}
</script>


<style scoped>

</style>