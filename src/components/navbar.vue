<template>
  <header
    class="
      flex flex-row
      md:justify-between
      items-center
      relative
      py-px
      px-2
      md:px-6
      z-50
      bg-background-gray
      dark:bg-background-dark
      dm-toggle-transition
    "
  >
    <!-- <img src="../assets/logo.png" class="h-12" /> -->
    <svg
      id="logo"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      class="w-12 h-12 hidden md:block"
      @click="scrollToChain"
    >
      <defs></defs>
      <path
        class="
          cls-1
          stroke-current stroke-7/2
          text-default-black
          dark:text-default-white dark:text-opacity-87
          dm-toggle-transition
        "
        d="M98.12,195.81,40.9,114.87l57.22,33.5Zm0-59.31-57.6-33.74,57.6-25.23Zm0-63L42.37,97.89,98.12,4.22Zm3.72-69.28,56.53,94.05L101.84,73.47Zm0,191.62V148.37l57.21-33.5Zm0-59.3v-59l57.64,25.25Z"
      />
    </svg>
    <nav
      class="
        flex flex-row
        space-x-6
        md:space-x-12
        w-full
        justify-end
        md:w-auto
        p-2
        items-center
      "
    >
      <div>
        <darkModeToggle class="mt-2.5"></darkModeToggle>
      </div>
      <div>
        <walletButton></walletButton>
      </div>
    </nav>
  </header>
</template>

<script>
import walletButton from "@/components/walletButton.vue";
import darkModeToggle from "@/components/darkModeToggle.vue";
import anime from "animejs/lib/anime.es.js";
// import store from "../store.js";

export default {
  name: "navbar",
  components: {
    walletButton,
    darkModeToggle,
  },
  methods: {
    scrollToChain() {
      const el = document.getElementById("x0");
      el.scrollIntoView();
    },
  },
  mounted() {
    anime({
      targets: "#logo path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 20000,
      // delay: function (el, i) {
      //   return i * 3000;
      // },
      // direction: "alternate",
      loop: false,
    });
  },
};
</script>

<style>
.cls-1 {
  fill: none;
  /* stroke: #fff; */
  stroke-miterlimit: 10;
  /* stroke-width: 3.5px; */
  /* opacity: 0.87; */
}
</style>
