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
  background-color: rgba(76, 76, 94, 0.9);
}
#nav-wrapper a {
  font-family: "Nexa";
  font-size: 22px;
  margin: 0 5px 5px 0;
}
</style>
