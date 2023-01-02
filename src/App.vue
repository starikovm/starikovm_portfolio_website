<template>
  <div id="app">
    <div class="page-wrapper">
      <router-view/>
      <Links/>
      <Navigation/>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Links from "@/components/Links.vue";

export default {
  name: "app",
  components: {
    Navigation,
    Links
  }
};
</script>

<style>
html {
  background-color: #36364b;
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

a {
  color: #e3e3e3;
  text-decoration: underline;
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}

h1 {
  margin: 8px 0;
  font-size: 54px;
  line-height: 48px;
}

h2 {
  padding-bottom: 20px;
}
h2,
h2 > span {
  margin: 8px 0;
  font-size: 44px;
  line-height: 38px;
}
h3 {
  margin: 8px 0;
  font-size: 34px;
  line-height: 28px;
}
p,
span,
li,
div,
a,
button {
  font-size: 22px;
  line-height: 30px;
}

@media only screen and (min-width: 600px) {
}

.yellow {
  background-color: rgb(226, 255, 102);
  background-color: rgba(226, 255, 102, 0.4);
}
.blue {
  background-color: rgb(102, 109, 255);
  background-color: rgba(102, 109, 255, 0.4);
}
.green {
  background-color: rgb(119, 255, 102);
  background-color: rgba(119, 255, 102, 0.4);
}
.orange {
  background-color: rgb(255, 143, 102);
  background-color: rgba(255, 143, 102, 0.4);
}

ul {
  overflow: hidden;
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  position: relative;
  padding-left: 20px;
  padding-top: 8px;
}

li::before {
  content: "▹";
  position: absolute;
  left: 0px;
  color: rgb(119, 255, 102);
  font-size: 22px;
  line-height: 30px;
}
button {
  cursor: pointer;
  border: 0px;
  border-radius: 0px;
  background-color: transparent;
  margin: 0 0 8px;
  padding: 8px 8px 9px 9px;
  color: #e3e3e3;
}

button:hover {
  border-bottom: 1px solid #e3e3e3;
  border-left: 1px solid #e3e3e3;
  padding: 8px 8px;
}
button.active {
  border-bottom: 1px solid #e3e3e3;
  border-left: 1px solid #e3e3e3;
  padding: 8px 8px;
}
</style>
