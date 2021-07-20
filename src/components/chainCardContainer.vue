<template>
  <div
    class="
      grid grid-cols-4
      gap-x-4 gap-y-8
      grid-flow-row
      justify-items-center
      px-28
      mt-36
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
  props: {
    chainData: {
      type: Array,
      required: true,
    },
  },
};
</script>
