<template>
<v-container>
   <v-layout row>
     <v-flex xs12 sm6 offset-sm3>
       <h2 class="primary--text">Add new Item</h2>
     </v-flex>
   </v-layout>
   <v-layout row>
     <v-flex xs12 sm6 offset-sm3>
       <form @submit.prevent="onCreateItem">
         <v-layout >
            <v-text-field
            name="productName"
            label="New Product Name"
            id="productName"
            v-model="productName"
            required
            ></v-text-field>
         </v-layout>
         <v-layout >
            <v-text-field
            name="description"
            label="New product description"
            id="description"
            v-model="description"
            required
            ></v-text-field>
         </v-layout>
           <v-layout >
            <v-text-field
            name="imgUrl"
            label="Image URL"
            id="imgUrl"
            v-model="imgUrl"
            required
            ></v-text-field>
         </v-layout>
            <v-layout >
            <v-text-field
            name="price"
            label="price"
            id="price"
            v-model="price"
            required
            ></v-text-field>
         </v-layout>
         <v-layout row  xs12 sm6 offset-sm3>
           <v-flex>
             <img :src="imgUrl" height="200">
           </v-flex>
         </v-layout>
         <v-layout row>
           <v-flex xs12>
             <v-btn type="submit" class="accent" :disabled="!formIsValid">Send to the shop</v-btn>
           </v-flex>
         </v-layout>
       </form>
     </v-flex>
   </v-layout>

 </v-container>
</template>


<script>
export default {
  data() {
    return {
      productName: "",
      description: "",
      imgUrl: "",
      price: ""
    };
  },
  computed: {
    formIsValid() {
      return (
        this.title != "" &&
        this.description != "" &&
        this.imgUrl != "" &&
        this.content != ""
      );
    }
  },
  methods: {
    onCreateItem() {
      if (!this.formIsValid) {
        return;
      }
      const newItem = {
        productName: this.productName,
        description: this.description,
        imgUrl: this.imgUrl,
        price: this.price
      };
      this.$store.dispatch("createItem", newItem);
      this.$router.push("/");
    }
  }
};
</script>