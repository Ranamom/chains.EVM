module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Chains.EVM";
      return args;
    });
  },
};
