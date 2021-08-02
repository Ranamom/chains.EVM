<template>
  <button
    id="baseButton"
    class="
      w-60
      h-12
      border-gray-700 border-solid border
      rounded-full
      shadow
      dark:bg-primary-400 dark:border-0 dark:disabled:bg-background-dp08
      disabled:opacity-38
      dm-toggle-transition
    "
    @click="connect"
  >
    <span id="bbText" class="font-body text-default-black font-semibold">{{
      currentUser
    }}</span>
  </button>
</template>

<script>
import store from "../store.js";

export default {
  name: "walletButton",
  methods: {
    // calls the connect methods and handles disabling for the button
    async connect() {
      if (!store.state.account) {
        const bbText = document.getElementById("bbText");
        if (document.firstElementChild.classList.contains("dark")) {
          bbText.classList.remove("text-default-black");
          bbText.classList.add("text-opacity-38");
          bbText.classList.add("text-default-white");
        } else {
          bbText.classList.add("text-opacity-38");
        }
        document.getElementById("baseButton").disabled = true;
        await store.tryWalletConnect(); // calls method from store that handles connecting wallet
        if (document.firstElementChild.classList.contains("dark")) {
          bbText.classList.add("text-default-black");
          bbText.classList.remove("text-opacity-38");
          bbText.classList.remove("text-default-white");
        } else {
          bbText.classList.remove("text-opacity-38");
        }
        document.getElementById("baseButton").disabled = false;
      }
    },
  },
  computed: {
    // handles setting the current user to the button
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
