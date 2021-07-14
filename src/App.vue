<template>
  <div>
    <navbar></navbar>
    <scrollContainer></scrollContainer>
  </div>
</template>

<script>
import scrollContainer from "@/views/scrollContainer.vue";
import navbar from "@/components/navbar.vue";

export default {
  components: {
    navbar,
    scrollContainer,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1a1a1a;
} */
</style>
