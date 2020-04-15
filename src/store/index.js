import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let _api = axios.create({
  baseURL: '//bcw-sandbox.herokuapp.com/api',
  timeout: 10000
})

export default new Vuex.Store({
  state: {
    cars: [],
    activeCar: {}
  },
  mutations: {
    setCars(state, cars) {
      state.cars = cars
    },
    setActiveCar(state, car) {
      state.activeCar = car
    }
  },
  actions: {
    async getCars({ commit, dispatch }) {
      try {
        let res = await _api.get('cars')
        console.log(res.data.data)
        commit('setCars', res.data.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getCar({ commit, dispatch }, carId) {
      try {
        let res = await _api.get(`cars/${carId}`)
        console.log(res.data.data)
        commit('setActiveCar', res.data.data)
      } catch (error) {
        console.error(error)
      }
    },
    async deleteCar({ commit, dispatch }, carId) {
      try {
        await _api.delete('cars/' + carId)
        dispatch('getCars')
      } catch (error) {
        console.error(error)
      }
    },
    async createCar({ commit, dispatch }, newCar) {
      try {
        let res = await _api.post('cars', newCar)
        dispatch('getCars')
      } catch (error) {
        console.error(error)
      }
    },
    getHouses({ commit, dispatch }) {

    }
  },
  modules: {
  }
})
