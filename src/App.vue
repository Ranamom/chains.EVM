<template>
  <navbar></navbar>
  <vue-scroll-snap :fullscreen="true" :horizontal="true">
    <div class="item"><Home></Home></div>
    <div class="item"><About></About></div>
  </vue-scroll-snap>
</template>

<script>
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import navbar from "@/components/navbar.vue";
import VueScrollSnap from "vue-scroll-snap";
export default {
  components: {
    navbar,
    Home,
    About,
    VueScrollSnap,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
