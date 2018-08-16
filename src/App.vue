<template>
  <div id="app">
    <Navigation/>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Navigation.vue";

export default {
  name: "app",
  components: {
    Navigation
  }
};
</script>

<style>
html {
  background-color: #1c6d80;
}
body {
  margin: 0;
}
@font-face {
  font-family: "Nexa";
  src: url("assets/fonts/nexa_light.otf") format("opentype");
  font-weight: 300;
  font-style: normal;
}
#app {
  font-family: "Nexa", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e3e3e3;
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
}
</style>
