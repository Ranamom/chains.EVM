<template>
  <button
    id="baseButton"
    class="
      w-60
      h-12
      border-gray-700 border-solid border
      rounded-full
      shadow-sm
      dark:bg-primary-400
    "
    @click="connect"
  >
    <span class="font-body text-black font-semibold">{{ currentUser }}</span>
  </button>
</template>

<script>
import store from "../store.js";

export default {
  name: "walletButton",
  methods: {
    async connect() {
      await store.tryWalletConnect();
    },
  },
  computed: {
    getUser() {
      return store.state.account;
    },
    getChain() {
      return store.state.chainId;
    },
    currentUser() {
      let userString;
      if (store.state.account) {
        let acc = store.state.account;
        userString =
          acc.substring(0, 6) +
          "..." +
          acc.substring(acc.length - 5, acc.length - 1);
      } else {
        userString = "Connect Wallet";
      }
      return userString;
    },
  },
};
</script>
