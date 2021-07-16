<template>
  <div
    class="
      flex flex-col
      gap-y-2
      w-72
      h-44
      bg-background-light
      rounded-lg
      shadow-lg
      p-6
    "
  >
    <div
      class="text-2xl font-title font-semibold text-center whitespace-nowrap"
    >
      Ethereum mainnet
    </div>
    <div class="flex flex-row justify-between">
      <div class="">
        <div class="font-body font-light">chainID</div>
        <div class="text-right pr-1 font-semibold">1</div>
      </div>
      <div class="">
        <div class="font-body font-light">Currency</div>
        <div class="text-right pr-1 font-semibold">ETH</div>
      </div>
    </div>
    <div class="flex justify-center">
      <!-- <div class="border rounded-full w-32 h-8 text-center"> -->
      <button
        class="text-primary-700 border rounded-full text-center px-4 py-1"
      >
        Add to wallet
      </button>
      <!-- </div> -->
    </div>
  </div>
</template>
