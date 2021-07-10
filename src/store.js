import { reactive, computed } from "vue";

const state = reactive({
  account: null,
  chainId: null,
  ethereum: null,
});

const tryWalletConnect = async () => {
  if (window.ethereum) {
    try {
      await window.ethereum.enable();
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const chainID = await window.ethereum.request({ method: "eth_chainId" });
      state.chainId = chainID;
      state.account = accounts[0];
      state.ethereum = window.ethereum;
    } catch (error) {
      console.log(error);
    }

    window.ethereum.on("accountsChanged", (accounts) => {
      state.account = accounts[0];
    });

    window.ethereum.on("chainChanged", (chainId) => {
      state.chainId = chainId;
      window.location.reload();
    });
  } else {
    console.warn("No browser wallet detected. Give metamask a try.")
  }
};

const getAccount = computed(() => state.account);

const getChain = computed(() => state.chainId);

const store = {
  tryWalletConnect,
  getAccount,
  getChain,
};

export default store;
