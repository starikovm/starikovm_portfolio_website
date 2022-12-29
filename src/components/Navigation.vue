<template>
    <div id="nav">
      <div id="nav-wrapper">
        <a v-scroll-to="'#about'">About</a>
        <a v-scroll-to="'#career'">Career</a>
        <a v-scroll-to="'#contact'">Contact</a>
      </div>
    </div>
</template>
<script>
export default {
  name: "Navigation"
};
</script>

<style>
#nav {
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  width: 100%;
  bottom: 40px;
}
#nav-wrapper {
  border-radius: 20px;
  padding: 20px;
  background-color: rgba(252, 245, 245, 0.15);
}
#nav-wrapper a {
  font-family: "Nexa";
  font-size: 15px;
  margin: 0 5px 5px 0;
}

@media only screen and (min-width: 600px) {
  #nav a {
    font-size: 22px;
  }
}
</style>
