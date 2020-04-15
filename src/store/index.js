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
    houses: [],
    activeCar: {},
    activeHouse: {}
  },
  mutations: {
    setCars(state, cars) {
      state.cars = cars
    },
    setActiveCar(state, car) {
      state.activeCar = car
    },
    setHouses(state, houses) {
      state.houses = houses
    },
    setActiveHouse(state, house) {
      state.activeHouse = house
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
    async getHouses({ commit, dispatch }) {
      try {
        let res = await _api.get('houses')
        commit('setHouses', res.data.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getHouse({ commit, dispatch }, houseId) {
      try {
        let res = await _api.get(`houses/${houseId}`)
        commit('setActiveHouse', res.data.data)
      } catch (error) {
        console.error(error)
      }
    },
    async deleteHouse({commit, dispatch}, houseId) {
      try {
        let res = await _api.delete(`houses/${houseId}`)
        dispatch('getHouses')
      } catch (error) {
        console.error(error)
      }
    },
    async createHouse({commit, dispatch}, newHouse ) {
      try {
        let res = await _api.post('houses', newHouse)
        dispatch('getHouses')
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {
  }
})
