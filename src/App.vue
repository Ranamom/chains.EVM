<template>
  <div>
    <navbar></navbar>
    <scrollContainer></scrollContainer>
  </div>
</template>

<script>
import scrollContainer from "@/views/scrollContainer.vue";
import navbar from "@/components/navbar.vue";

export default {
  components: {
    navbar,
    scrollContainer,
  },
};
</script>
