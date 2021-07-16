<template>
  <vue-scroll-snap
    class="bg-background-gray dark:bg-background-dark"
    :fullscreen="true"
    :horizontal="true"
  >
    <div class="item"><Home></Home></div>
    <div class="item"><Chains></Chains></div>
  </vue-scroll-snap>
</template>

<script>
import Home from "@/views/Home.vue";
import Chains from "@/views/Chains.vue";
import VueScrollSnap from "vue-scroll-snap";

export default {
  name: "scrollContainer",
  components: {
    VueScrollSnap,
    Home,
    Chains,
  },
};
</script>

<style>
.scroll-snap-container.horizontal {
  /* overflow-y: scroll; */
  /* overflow-y: visible; */
}
</style>
