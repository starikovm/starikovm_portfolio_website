<template>
  <div id="home">
    <div id="centeredContent">
      <img alt="Mikhail Starikov" src="../assets/ava.png">
      <Heading/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Heading from "@/components/Heading.vue";

export default {
  name: "home",
  components: {
    Heading
  }
};
</script>

<style>
#home {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
