<template>
  <vue-scroll-snap :fullscreen="true" :horizontal="true">
    <div class="item"><Home></Home></div>
    <div class="item"><About></About></div>
  </vue-scroll-snap>
</template>

<script>
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import VueScrollSnap from "vue-scroll-snap";

export default {
  name: "scrollContainer",
  components: {
    VueScrollSnap,
    Home,
    About,
  },
};
</script>
