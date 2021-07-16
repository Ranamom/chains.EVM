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
      Ethereum mainnet
    </div>
    <div class="flex flex-row justify-between">
      <div class="dark:text-background-light dm-toggle-transition">
        <div class="font-body font-light">chainID</div>
        <div class="text-right pr-1 font-semibold">1</div>
      </div>
      <div class="dark:text-background-light dm-toggle-transition">
        <div class="font-body font-light">Currency</div>
        <div class="text-right pr-1 font-semibold">ETH</div>
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
          hover:text-default-white
          hover:bg-primary-700
          dark:hover:border-primary-300
          dark:hover:bg-primary-300
          dark:hover:text-default-black
          dark:text-background-light
          dm-toggle-transition
        "
      >
        Add to wallet
      </button>
      <!-- </div> -->
    </div>
  </div>
</template>
