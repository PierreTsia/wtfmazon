import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({

  state: {
    loadedItems: [],
    user : null,

  },

  mutations: {
    createItem(state, payload) {
      state.loadedItems.push(payload)
    },
    setLoadedItems(state, payload) {
      state.loadedItems = payload
    },
    setUser(state, payload){
        state.user = payload
    }

  },

  actions: {
    onSignUserUp({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          const newUser = {
            id: user.uid,
            role: payload.role
          }
          commit('setUser', newUser )
        })
        .catch((error)=> {
            console.log(error)
        })
    },
    loadItems({
      commit
    }) {
      firebase.database().ref('items').once('value')
        .then((data) => {
          const items = []
          const obj = data.val()
          for (let key in obj) {
            items.push({
              id: key,
              productName: obj[key].productName,
              description: obj[key].description,
              price: obj[key].price,
              imgUrl: obj[key].imgUrl

            })
          }
          console.log(items)
          commit('setLoadedItems', items)

        })
        .catch((error) => {

          console.log(error)
        })

    },
    signUserIn({commit}, payload) {

      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    },
    createItem({
      commit
    }, payload) {
      const newItem = {
        productName: payload.productName,
        description: payload.description,
        imgUrl: payload.imgUrl,
        price: payload.price,
      }

      //commit('createItem', newItem)

      firebase.database().ref('items').push(newItem)
        .then((data) => {
          const key = data.key
          commit('createItem', {
            ...newItem,
            id: key
          })
        })
        .catch((error) => {
          console.log(error)
        })
    }


  },

  getters: {
    loadedItems(state) {
      return state.loadedItems.sort((itemA, itemB) => {
        return itemA.price < itemB.price
      })

    },
    getUser (state){
      return state.user
    }		      



  }
})
