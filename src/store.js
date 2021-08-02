import { reactive, computed } from "vue";

// This is a basic c ode to be used as a global store instead of vuex.

const state = reactive({
  account: null,
  chainId: null,
  ethereum: null,
  theme: null,
});

// function to connect to wallet (currently metamask)
const tryWalletConnect = async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const chainID = await window.ethereum.request({ method: "eth_chainId" });
      state.chainId = chainID; // I have no clue why am I even getting this lol
      state.account = accounts[0];
      state.ethereum = window.ethereum;
    } catch (error) {
      console.log(error);
    }

    window.ethereum.on("accountsChanged", (accounts) => {
      state.account = accounts[0];
    });
  } else {
    console.warn("No browser wallet detected. Give metamask a try.");
  }
};

const getAccount = computed(() => state.account);

const getChain = computed(() => state.chainId);

const store = {
  tryWalletConnect,
  state,
  getAccount,
  getChain,
};

export default store;
