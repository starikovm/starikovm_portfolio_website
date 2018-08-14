<template>
  <div id="hello-heading">
    <h3>Hi! My name is Mikhail Starikov</h3>
    <p>I am <span class="green">fullstack web-developer</span>, passionate about <span class="yellow">Javascript</span> and <span class="blue">User interfaces</span></p>
  </div>
</template>

<script>
export default {
  name: "Heading"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#hello-heading {
  max-width: 350px;
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
h3 {
  margin: 40px 0 0;
  font-size: 22px;
  line-height: 30px;
}
p {
  font-size: 15px;
  line-height: 30px;
}

@media only screen and (min-width: 600px) {
  h3 {
    margin: 40px 0 0;
    font-size: 38px;
    line-height: 40px;
  }
  p {
    font-size: 22px;
    line-height: 40px;
  }
}
</style>
