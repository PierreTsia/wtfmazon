<template>
  
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-text>
          <v-container>
            <form @submit.prevent="onSignIn">
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                  name="email"
                  label="e-mail"
                  id="email"
                  v-model="email"
                  required
                  type="email"
                  ></v-text-field>
                </v-flex>
              </v-layout>
                <v-layout row>
                <v-flex xs12>
                  <v-text-field
                  name="password"
                  label="password"
                  id="password"
                  v-model="password"
                  required
                  type="password"
                  ></v-text-field>
                </v-flex>
              </v-layout>
               
              <v-layout row>
                <v-flex xs12>
                  <v-btn 
                  type="submit">
                  Sign in
                  <span slot="loader" class="custom-loader">
                  <v-icon light>cached</v-icon>
                  </span>
                  </v-btn>
                </v-flex>
              </v-layout>
            </form>
          </v-container>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password :"",
    }
  },
  computed:{
    user(){
      return this.$store.getters.getUser
    },
    error() {
      return this.$store.getters.error;
    },
  },
  watch: {
    user (value){
      if (value !=null && value != undefined) {
        return this.$router.push('/')
      }
    }
  },
  methods:{
    onSignIn() {
      this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
    },
  
  }
}
</script>