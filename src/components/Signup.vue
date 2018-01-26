<template>
<v-container>
 <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-text>
          <v-container>
            <form @submit.prevent="onSignUp">
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
                  <v-text-field
                  name="confirmPassword"
                  label="Confirm Password"
                  id="confirmPassword"
                  v-model="confirmPassword"
                  type="password"
                  :rules="[comparePasswords]"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                <v-select
                autocomplete
                label="Role"
                placeholder="Select..."
                :items="roles"
                v-model="role"
                required
          ></v-select>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-btn type="submit">Sign up</v-btn>
                </v-flex>
              </v-layout>
            </form>
          </v-container>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  data(){
      return {
          email:'',
          password:'',
          confirmPassword:'',
          role:'',
          roles : ['user', 'admin']
      }
  },
   computed:{
    comparePasswords(){
       return this.password != this.confirmPassword ? 'Passwords do not match' : ''
     },
    user() {
      return this.$store.getters.getUser;
    },
   },
    watch: {
    user(value) {
      if (value != null && value != undefined) {
        return this.$router.push("/")
      }
    }
  },
   methods: {
       onSignUp(){
           console.log(this.user)
           this.$store.dispatch('onSignUserUp', {email: this.email, password:this.password, role: this.role} )
           console.log(this.user)
       }
   },
   
}
</script>
