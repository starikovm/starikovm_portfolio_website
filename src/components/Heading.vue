<template>
  <div id="hello-heading">
    <span>Hi! My name is</span>
    <h1>Mikhail Starikov</h1>
    <h1 class="secondary-main-heading">I build web and lead teams</h1>
    <p class="heading-paragraph">
      I am professional <span class="green">fullstack web-developer</span> and <span class="orange">teamlead</span>,
      passionate about <span class="yellow">Javascript</span> and <span class="blue">User interfaces</span>.
      <br>
      Currently I am focused on human-centered product, working with amazing team in <a href="https://www.leapsome.com/">Leapsome</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: "Heading"
};
</script>

<style scoped>
#hello-heading {
  text-align: left;
}
.heading-paragraph {
  line-height: 30px;
}
.secondary-main-heading {
  color: #8892b0
}
</style>
