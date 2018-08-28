<template>
  <div id="home">
    <HomepageAnimation/>  
    <div id="centeredContent">
      <!-- <img alt="Mikhail Starikov" src="../assets/ava.png"> -->
      <Heading/>
    </div>
  </div>
</template>

<script>
import Heading from "@/components/Heading.vue";
import HomepageAnimation from "@/components/HomepageAnimation.vue";

export default {
  name: "home",
  components: {
    Heading,
    HomepageAnimation
  }
};
</script>

<style>
#home {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
#centeredContent {
  position: absolute;
}
</style>
