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
    },
    setLoadedItems(state, payload){
        state.loadedItems = payload
      },


  },

  actions: {
    loadItems({commit}){
        firebase.database().ref('items').once('value')
          .then((data) =>{
            const items = []
            const obj = data.val()
            for (let key in obj){
              items.push({
                id: key,
                productName: obj[key].productName,
                description : obj[key].description,
                price : obj[key].price,
                imgUrl : obj[key].imgUrl
  
              })
            }
            console.log(items)
            commit('setLoadedItems', items)
           
          })
          .catch((error) => {
           
            console.log(error)
          }
        )
  
      },
      createItem({commit}, payload){
          const newItem = {
              productName : payload.productName,
              description : payload.description,
              imgUrl : payload.imgUrl,
              price : payload.price,
          }
          
          //commit('createItem', newItem)

          firebase.database().ref('items').push(newItem)
          .then((data) => {
              const key = data.key
              commit('createItem', {
                ...newPost,
                id : key
              })
            }
          )
          .catch((error) => {
              console.log(error)
            }
        )
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
