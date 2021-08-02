<template>
  <div class="chains">
    <chainCardContainer :chainData="chainData"></chainCardContainer>
  </div>
</template>

<script>
import chainCardContainer from "@/components/chainCardContainer";

export default {
  name: "Chains",
  components: {
    chainCardContainer,
  },
  data() {
    return {
      chainData: [],
    };
  },
  methods: {
    // fetching data from source
    async getData() {
      await fetch("https://chainid.network/chains.json")
        .then((response) => response.json())
        .then((data) => (this.chainData = data))
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
