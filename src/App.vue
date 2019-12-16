<template>
  <div id="app">
    
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <login @updateLogin='updateLogin' :loggedIn='loggedIn' />
    </div>

    <router-view />

  </div>
</template>

<script>
import Login from './components/Login.vue';

export default {
  name: 'app',
  data () {
    return {
      loggedIn: false,
    }
  },
  methods: {
    updateLogin: function(data) {
      this.loggedIn = data.loggedIn;
      if (data.loggedIn) {
        // plus save some info for filtering the graphQL in Home
      }
    }
  },
  components: {
    'login': Login
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
