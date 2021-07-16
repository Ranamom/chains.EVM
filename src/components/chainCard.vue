<template>
  <div
    class="
      flex flex-col
      gap-y-2
      w-76
      h-44
      bg-background-light
      dark:bg-background-dp04
      dm-toggle-transition
      rounded-lg
      shadow-lg
      p-6
    "
  >
    <div
      class="
        text-xl
        font-title font-semibold
        text-center
        dark:text-background-light
        dm-toggle-transition
        whitespace-nowrap
      "
    >
      {{ chain.name }}
    </div>
    <div class="flex flex-row justify-between">
      <div class="dark:text-background-light dm-toggle-transition">
        <div class="font-body font-light">chainID</div>
        <div class="text-right pr-1 font-semibold">{{ chain.chainId }}</div>
      </div>
      <div class="dark:text-background-light dm-toggle-transition">
        <div class="font-body font-light">Currency</div>
        <div class="text-right pr-1 font-semibold">
          {{ chain.nativeCurrency.symbol }}
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <!-- <div class="border rounded-full w-32 h-8 text-center"> -->
      <button
        class="
          text-primary-700
          border
          rounded-full
          text-center
          px-4
          py-1
          hover:text-default-white hover:bg-primary-700
          dark:hover:border-primary-300
          dark:hover:bg-primary-300
          dark:hover:text-default-black
          dark:text-background-light
          dm-toggle-transition
        "
        @click="addChainToWallet"
      >
        Add to wallet
      </button>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import store from "../store.js";

export default {
  props: {
    chain: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async addChainToWallet() {
      if (!store.state.account) {
        await store.tryWalletConnect();
        return;
      }

      const toHex = (num) => {
        return "0x" + num.toString(16);
      };

      let params = {
        chainId: toHex(this.chain.chainId),
        chainName: this.chain.name,
        nativeCurrency: {
          name: this.chain.nativeCurrency.name,
          symbol: this.chain.nativeCurrency.symbol,
          decimals: this.chain.nativeCurrency.decimals,
        },
        rpcUrls: [this.chain.rpc[0]],
        blockExplorerUrls: [
          // eslint-disable-next-line prettier/prettier
          this.chain.explorers &&
          this.chain.explorers.length > 0 &&
          this.chain.explorers[0].url
            ? this.chain.explorers[0]
            : this.chain.infoURL,
        ],
      };

      console.log([this.chain.rpc[0]]);

      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: params.chainId }],
        });
      } catch (switchError) {
        console.log(switchError);
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
          try {
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [params],
            });
          } catch (addError) {
            console.log(addError);
          }
        }
      }
    },
  },
};
</script>
