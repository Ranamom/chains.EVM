<template>
  <div>
    <button @click="connect">
      <span>Address: {{ getUser }}</span>
      <span>chain: {{ getChain }}</span>
    </button>
  </div>
</template>

<script>
import store from "../store.js";

export default {
  name: "Home",
  components: {},
  computed: {
    getUser() {
      return store.state.account;
    },
    getChain() {
      return store.state.chainId;
    },
  },
  methods: {
    async connect() {
      await store.tryWalletConnect();
    },
  },
};
</script>
