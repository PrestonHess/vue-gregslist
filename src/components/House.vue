<template>
  <div class="house border col-3" @click="selectHouse()">
    <img :src="houseData.imgUrl" class="img-fluid p-1" alt="">
    <h4>Price : ${{houseData.price}}</h4>
  </div>
</template>


<script>
export default {
  name: 'house',
  props: ["houseData"],
  data(){
    return {}
  },
  computed:{},
  methods:{
    selectHouse() {
      this.$store.commit('setActiveHouse', {})
      this.$router.push({
        name: 'HouseDetails',
        params: { houseId: this.houseData._id }
      })
    }
  },
  components:{}
}
</script>


<style scoped>
.houses {
  outline: 1px solid black;
}
</style>