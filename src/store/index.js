import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({

  state: {
    loadedItems: [{
        productName: "First Product",
        id: "sqdgshqjsdgh",
        description: 'Awesome product!',
        imgUrl: "https://i.imgur.com/W0c3BXA.png",
        price: "25"
      },
      {
        productName: "Second Product",
        id: "gdsfhjkqsdgqskdgq",
        description: 'Awesome product!',
        imgUrl: "https://i.imgur.com/os8Hvsa.png",
        price: "55"
      },
      {
        productName: "Third product",
        id: "qsdjkhqkjdhkjqsd",
        description: 'Awesome product!',
        imgUrl: "https://i.imgur.com/m1CGTNH.png",
        price: "75"
      },

    ]

  },

  mutations: {
    createItem(state, payload) {
        state.loadedItems.push(payload)
    }

  },

  actions: {
      createItem({commit}, payload){
          const newItem = {
              productName : payload.productName,
              description : payload.description,
              imgUrl : payload.imgUrl,
              price : payload.price,
              id : Math.floor(Math.random()*10000) 
          }
          commit('createItem', newItem)
      }

  },

  getters: {
    loadedItems(state) {
      return state.loadedItems.sort((itemA, itemB)=> {
          return itemA.price < itemB.price
      })

    }
  }
})
