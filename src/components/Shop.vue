<template>
  <v-container>
      <v-layout row wrap>
          <v-flex xs12 sm4 v-for="item in items" :key="item.id">
              <v-card class="ml-2 mb-2">
                <v-card-media :src="item.imgUrl" height="200px" contain>
                </v-card-media>
                <v-card-title primary-title>
                    <v-flex xs12 class="text-xs-center">
                        <h3>{{item.productName}}</h3>
                        <span class="secondary--text">{{item.description}}</span>
                    </v-flex>
                    <v-flex xs12 class="text-xs-center">
                         Price : 
                            {{item.price}}
                            € 
                    </v-flex>
                </v-card-title>
                <v-card-actions>
                    <v-flex xs12 class="text-xs-center">
                        <v-btn class="primary">
                        <v-icon>shopping-cart</v-icon>
                        Buy
                    </v-btn>
                    </v-flex>
                    
                </v-card-actions>
              </v-card>
          </v-flex>
      </v-layout>
      
  
  </v-container>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.getters.loadedItems;
    }
  }
};
</script>
