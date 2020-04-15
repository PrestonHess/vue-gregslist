<template>
  <div class="create-house col-12">
    <form @submit.prevent="createHouse()">
      <div class="form-group">
        <label for="bedrooms">Bedrooms</label>
        <input type="number" name="bedrooms" id="" class="form-control" placeholder="enter bedrooms..."
          aria-describedby="helpId" v-model="newHouse.bedrooms" required>
      </div>
      <div class="form-group">
        <label for="bathrooms">Bathrooms</label>
        <input type="number" name="bathrooms" id="" class="form-control" placeholder="enter bathrooms..."
          aria-describedby="helpId" v-model="newHouse.bathrooms" required>
      </div>
      <div class="form-group">
        <label for="levels">Floors</label>
        <input type="number" name="levels" id="" class="form-control" placeholder="enter levels..."
          aria-describedby="helpId" v-model="newHouse.levels" required>
      </div>
      <div class="form-group">
        <label for="year">Year</label>
        <input type="number" name="year" id="" class="form-control" placeholder="enter year..."
          aria-describedby="helpId" v-model="newHouse.year" required>
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input type="number" name="price" id="" class="form-control" placeholder="enter price..."
          aria-describedby="helpId" v-model="newHouse.price" required>
      </div>
      <div class="form-group">
        <label for="imgUrl">Image</label>
        <input type="text" name="imgUrl" id="" class="form-control" placeholder="enter img url..." aria-describedby="helpId"
          v-model="newHouse.imgUrl" required>
      </div>
      <button type="submit" class="btn btn-success">Create House</button>
    </form>
  </div>
</template>


<script>
export default {
  name: 'create-house',
  data(){
    return {
      newHouse : {

      }
    }
  },
  computed:{},
  methods:{ 
    createHouse() {
      this.$store.dispatch('createHouse', this.newHouse),
      this.newHouse = {}
    }
  },
  components:{}
}
</script>


<style scoped>

</style>