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
        hover:border hover:border-default-black
        dark:hover:border-0
        w-1/2
        h-10
        rounded-full
      "
    >
      <div class="font-body font-semibold pl-4">Search</div>
      <input
        type="text"
        placeholder="Ethereum, BNB..."
        class="flex-grow font-body focus:outline-none"
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
      mb-18
      z-40
    "
  >
    <chainCard
      v-for="(chain, index) in chainData"
      :key="index"
      :chain="chain"
    ></chainCard>
  </div>
</template>

<script>
import chainCard from "@/components/chainCard.vue";

export default {
  name: "chainCardContainer",
  components: {
    chainCard,
  },
  data() {
    return {
      filteredChains: [],
      query: "",
    };
  },
  props: {
    chainData: {
      type: Array,
      required: true,
    },
  },
};
</script>
