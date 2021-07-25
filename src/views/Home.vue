<template>
  <!-- <navbar></navbar> -->
  <div
    class="
      flex flex-col
      text-center
      h-screen
      space-y-3
      md:space-y-6
      place-content-center
    "
  >
    <div
      class="
        text-5xl
        md:text-6xl
        tracking-wide
        font-title font-bold
        text-black
        dark:text-default-white dark:text-opacity-87
        dm-toggle-transition
      "
    >
      Chains<span
        class="text-secondary-700 dark:text-secondary-300 dm-toggle-transition"
        >.EVM</span
      >
    </div>
    <div
      class="
        text-xl
        md:text-lg
        px-4
        md:px-0
        tracking-wider
        font-title font-light
        text-black
        dark:text-default-white dark:text-opacity-60
        dm-toggle-transition
      "
    >
      Browse and connect to EVM powered chain with click of a button!
    </div>
    <div
      class="
        w-3/4
        md:w-1/2
        lg:w-1/3
        place-self-center
        font-body font-normal
        text-black
        dark:text-default-white dark:text-opacity-87
        dm-toggle-transition
      "
    >
      <div class="text-lg md:text-xl">
        Chains<span
          class="
            text-secondary-700
            dark:text-secondary-300
            dm-toggle-transition
          "
          >.EVM</span
        >
        is a small project that strives to provide users with various EVM based
        chains to connect to. All from the click of a button. Forget about the
        days when you had to manually copy RPC Urls, block explorers and chainId
        and use Chains<span
          class="
            text-secondary-700
            dark:text-secondary-300
            dm-toggle-transition
          "
          >.EVM</span
        >
        today!
      </div>
      <div class="text-xs md:text-sm mt-4">
        Chains<span
          class="
            text-secondary-700
            dark:text-secondary-300
            dm-toggle-transition
          "
          >.EVM</span
        >
        uses and draws inspiration from
        <a
          href="https://eips.ethereum.org/EIPS/eip-3085"
          target="_blank"
          class="
            underline
            hover:no-underline hover:text-primary-700
            dark:hover:text-primary-300
          "
          >EIP-3085</a
        >
        and
        <a
          href="https://ethereum-magicians.org/t/eip-3326-wallet-switchethereumchain/5471"
          target="_blank"
          class="
            underline
            hover:no-underline hover:text-primary-700
            dark:hover:text-primary-300
          "
          >EIP-3326</a
        >. This project is a work in progress and I'll continue to add various
        features in the fututre.
      </div>
    </div>
    <div>
      <button
        id="scrollBtn"
        @click="scrollToChain"
        @mouseover="hoverOn"
        @mouseout="hoverOff"
        class="w-16 h-16 rounded-full"
      >
        <!-- <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512.171 512.171"
          style="enable-background: new 0 0 512.171 512.171"
          xml:space="preserve"
        >
          <path
            class="
              cls-1
              stroke-current stroke-4
              text-default-black
              dark:text-default-white dark:text-opacity-87
              dm-toggle-transition
            "
            d="M509.035,248.212l-213.504-212.8c-3.051-3.029-7.595-3.904-11.627-2.304c-3.989,1.664-6.571,5.547-6.571,9.856v117.333
			H10.667C4.779,160.298,0,165.076,0,170.964v170.667c0,5.888,4.779,10.667,10.667,10.667h266.667v116.885
			c0,4.309,2.603,8.192,6.592,9.856c1.323,0.555,2.709,0.811,4.075,0.811c2.773,0,5.504-1.088,7.552-3.115l213.504-213.419
			c2.005-2.005,3.115-4.715,3.115-7.552C512.171,252.927,511.04,250.218,509.035,248.212z"
          /> -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="
            stroke-current stroke-2/3
            text-default-black
            dark:text-default-white dark:text-opacity-87
            dm-toggle-transition
          "
        >
          <polyline
            points="12 16 16 12 12 8"
            fill="none"
            stroke-miterlimit="10"
          />
          <line
            x1="7"
            y1="12"
            x2="16"
            y2="12"
            fill="none"
            stroke-miterlimit="10"
          />
          <circle cx="12" cy="12" r="10" fill="none" />
        </svg>
      </button>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
// import store from "../store.js";
import Footer from "@/components/footer.vue";
import anime from "animejs/lib/anime.es.js";

export default {
  name: "Home",
  components: {
    Footer,
  },
  methods: {
    scrollToChain() {
      const el = document.getElementById("x1");
      el.scrollIntoView();
    },

    hoverOn() {
      anime({
        targets: ["line", "polyline"],
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 1000,
        delay: anime.stagger(1000),
        endDelay: 500,
        direction: "alternate",
        loop: true,
      });
    },

    hoverOff() {
      anime.remove(["line", "polyline"]);
    },
  },
};
</script>

<style scoped>
.cls-1 {
  fill: none;
  stroke-miterlimit: 10;
}
</style>
