<template>
  <vue-scroll-snap
    class="bg-background-gray dark:bg-background-dark dm-toggle-transition"
    :fullscreen="true"
    :horizontal="true"
  >
    <div id="x0" class="item"><Home></Home></div>
    <div id="x1" class="item"><Chains></Chains></div>
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
#x1 {
  overflow-y: scroll;
}
</style>
