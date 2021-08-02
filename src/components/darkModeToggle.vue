<template>
  <!-- <span class="material-icons">&#xE51C;&#xE518;</span> -->
  <input
    @click="darkClassToggle"
    id="toggle"
    class="toggle opacity-87"
    type="checkbox"
  />
</template>

<script>
import store from "../store.js";

export default {
  name: "darkModeToggle",
  methods: {
    // toggles the dark class on html tag on button click
    darkClassToggle() {
      const toggle = document.querySelector(".toggle");
      const html = document.firstElementChild;

      store.state.theme = null;
      // HACK: to inverse icon where moon shows on dark background, exchange '!' on toggle.checked in if-else-if and invert localstorage.theme (dark -> white and vice verse)
      if (toggle.checked) {
        html.classList.add("dark");
        localStorage.theme = "light";
      } else if (!toggle.checked) {
        html.classList.remove("dark");
        localStorage.theme = "dark";
      }
    },

    // checks to see if the theme is in local storage and sets it to global store
    initTheme() {
      const cacheTheme = localStorage.theme ? localStorage.theme : false;
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      if (cacheTheme) {
        store.state.theme = cacheTheme;
      } else if (prefersDark) {
        store.state.theme = "dark";
      } else {
        store.state.theme = "light";
      }
    },
  },
  mounted() {
    // toggles the button for initial state
    const toggle = document.querySelector(".toggle");
    if (store.state.theme === "dark") {
      toggle.checked = false;
    } else if (store.state.theme === "light") {
      toggle.checked = true;
    }
    this.darkClassToggle();
  },
  beforeMount() {
    this.initTheme();
  },
};
</script>

<style>
/* Some magic */
/* also this is not mine lol */
.toggle {
  --size: 2rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  cursor: pointer;
  width: var(--size);
  height: var(--size);
  box-shadow: inset calc(var(--size) * 0.33) calc(var(--size) * -0.25) 0;
  border-radius: 999px;
  color: #000;
  /* opacity: 87%; */
  transition: all 500ms;
}
.toggle:checked {
  --ray-size: calc(var(--size) * -0.4);
  --offset-orthogonal: calc(var(--size) * 0.65);
  --offset-diagonal: calc(var(--size) * 0.45);
  transform: scale(0.75);
  color: #f3f3f3;
  /* opacity: 87%; */
  box-shadow: inset 0 0 0 var(--size),
    calc(var(--offset-orthogonal) * -1) 0 0 var(--ray-size),
    var(--offset-orthogonal) 0 0 var(--ray-size),
    0 calc(var(--offset-orthogonal) * -1) 0 var(--ray-size),
    0 var(--offset-orthogonal) 0 var(--ray-size),
    calc(var(--offset-diagonal) * -1) calc(var(--offset-diagonal) * -1) 0
      var(--ray-size),
    var(--offset-diagonal) var(--offset-diagonal) 0 var(--ray-size),
    calc(var(--offset-diagonal) * -1) var(--offset-diagonal) 0 var(--ray-size),
    var(--offset-diagonal) calc(var(--offset-diagonal) * -1) 0 var(--ray-size);
}
</style>
