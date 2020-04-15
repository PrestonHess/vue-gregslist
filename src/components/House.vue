<template>
  <div class="house border col-3">
    <img :src="houseData.imgUrl" class="img-fluid p-1" alt="">
    <h4>Price : {{houseData.price}}</h4>
    <p>Bedrooms : {{houseData.bedrooms}} | Bathrooms : {{houseData.bathrooms}}</p>
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
  methods:{},
  components:{}
}
</script>


<style scoped>
.houses {
  outline: 1px solid black;
}
</style>