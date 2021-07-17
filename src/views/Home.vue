<template>
  <!-- <navbar></navbar> -->
  <div
    class="flex flex-col text-center h-screen space-y-6 place-content-center"
  >
    <div
      class="
        text-6xl
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
        text-lg
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
        w-1/3
        place-self-center
        font-body font-normal
        text-black
        dark:text-default-white dark:text-opacity-87
        dm-toggle-transition
      "
    >
      <div class="text-xl">
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
      <div class="text-sm mt-4">
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
  </div>
</template>

<script>
// import store from "../store.js";

export default {
  name: "Home",
  components: {},
};
</script>
