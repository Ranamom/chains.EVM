<template>
  <!-- <span class="material-icons">&#xE51C;&#xE518;</span> -->
  <input @click="darkClassToggle" id="toggle" class="toggle" type="checkbox" />
</template>

<script>
export default {
  name: "darkModeToggle",
  methods: {
    darkClassToggle() {
      const toggle = document.querySelector(".toggle");
      const html = document.firstElementChild;
      if (toggle.checked) {
        html.classList.remove("dark");
      } else {
        html.classList.add("dark");
      }
    },
  },
};
</script>

<style>
.material-icons-outlined {
  fill: white;
}
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
  color: #e6e6ff;
  transition: all 500ms;
}
.toggle:checked {
  --ray-size: calc(var(--size) * -0.4);
  --offset-orthogonal: calc(var(--size) * 0.65);
  --offset-diagonal: calc(var(--size) * 0.45);
  transform: scale(0.75);
  color: #000;
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
