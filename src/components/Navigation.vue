<template>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/resume">Resume</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
</template>
<script>
export default {
  name: "Navigation"
};
</script>

<style>
#nav {
  position: absolute;
  z-index: 1;
  padding-top: 30px;
  right: 0;
}
#nav a {
  font-family: "Nexa";
  font-size: 15px;
  margin: 0 5px 5px 0;
  color: #e3e3e3;
}
#nav a:hover {
  text-decoration: none;
}

@media only screen and (min-width: 600px) {
  #nav {
    margin-right: 30px;
    margin-left: auto;
  }

  #nav a {
    font-size: 22px;
    margin: 0 10px 10px 0;
  }
}
</style>
