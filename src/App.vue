<template>
  <v-app>

    <v-toolbar dark class="primary">
      <v-toolbar-side-icon class="hidden-sm-and-up" @click.stop="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link tag="span" style="cursor : pointer" to="/">WTFMazon</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="hidden-xs-only" v-for="item in menuItems" :key="item.title">
             <v-btn flat  :to="item.link">
            <v-icon left>{{item.icon}}</v-icon>
            {{item.title}}
            </v-btn>
         
          </span>
          <span v-if="userIsAuth">Logged In
            <v-btn @click="logOut" flat class="primary">
              Log Out
              <v-icon>exit_to_app</v-icon>
            </v-btn>
          </span>
    </v-toolbar>
    <v-navigation-drawer  fixed temporary dark v-model="sideNav" class="primary secondary--text hidden-sm-and-up">
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title">
          <v-btn :to="item.link" flat style="width:100%">
            <v-list-tile-action>
              <v-icon left>{{item.icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              {{item.title}}
            </v-list-tile-content>
          </v-btn>
        </v-list-tile>
      </v-list>
  
    </v-navigation-drawer>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>


<script>

export default {
  data() {
    return {
      sideNav: false,

    }
  },
  methods:{
    logOut(){
      firebase.auth().signOut().
      then(function() {
        this.router.push('/signin')
      })
      .catch(function(error) {
        console.log(error)
    });
    }
  },
  computed: {
    user(){
      return this.$store.getters.getUser
    },
    userIsAuth(){
        return this.$store.getters.getUser != null && this.$store.getters.getUser != undefined
     },
    menuItems() {
      let menuItems = [
        {
          icon: "face",
          title: "Sign Up",
          link: "/signup"
        },
        {
          icon: "lock_open",
          title: "Sign In",
          link: "/signin"
        } ]
        if (this.userIsAuth){
          menuItems = [
    
        {
          icon: "store",
          title: "View Products",
          link: "/"
        },
        {
          icon: "shopping_basket",
          title: "Account",
          link: "/user"
        },
         {
          icon: "add_shopping_cart",
          title: "Admin",
          link: "/admin"
        },
          ]
        }

      return menuItems;
    },
    /* userIsAuth() {
      return (
        this.$store.getters.getUser != null &&
        this.$store.getters.getUser != undefined
      );
    } */
  },
  name: "App"
};
</script>


<style scoped>

main {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
}


</style>
