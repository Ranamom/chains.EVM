<template>
  <div id="search-wrapper" class="mt-36 flex justify-center">
    <div
      id="search-bar"
      class="
        inline-flex
        items-center
        gap-x-2
        bg-default-white
        shadow-md
        dark:bg-background-gray
        dm-toggle-transition
        w-11/12
        md:w-3/5
        lg:w-2/5
        h-10
        rounded-full
      "
    >
      <div class="font-title font-semibold pl-4 flex-shrink-0">
        Search chain
      </div>
      <input
        type="text"
        placeholder="Ethereum, BNB, 137..."
        class="
          flex-grow
          font-body
          focus:outline-none
          dark:bg-background-gray
          dm-toggle-transition
        "
        v-model="query"
      />
      <div class="pr-4 h-6">
        <span class="material-icons"> &#xe8b6; </span>
      </div>
    </div>
  </div>
  <div
    class="
      grid grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      1.5xl:grid-cols-4
      gap-x-4 gap-y-8
      grid-flow-row
      justify-items-center
      px-12
      xl:px-28
      mt-20
      mb-16
      z-40
    "
  >
    <chainCard
      v-for="(chain, index) in filteredData"
      :key="index"
      :chain="chain"
    ></chainCard>
  </div>
</template>

<script>
import chainCard from "@/components/chainCard.vue";
import { computed, ref } from "@vue/runtime-core";

export default {
  name: "chainCardContainer",
  components: {
    chainCard,
  },
  data() {
    return {};
  },
  props: {
    chainData: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    // logic for search feature
    const query = ref(""); // reactive variable

    // this variables stores objects that matches the search criteria and passes them to child component
    const filteredData = computed(() => {
      return props.chainData.filter((chain) => {
        return (
          chain.name.toLowerCase().indexOf(query.value.toLowerCase()) != -1 ||
          chain.nativeCurrency.symbol
            .toLowerCase()
            .indexOf(query.value.toLowerCase()) != -1 ||
          String(chain.chainId).indexOf(query.value) != -1
        );
      });
    });
    return { filteredData, query };
  },
};
</script>
