<template>
  <div id="links">
    <a target="_blank" href="https://medium.com/@dev_starikov">
      <img src="../assets/medium.svg" width="40">
    </a>
    <a target="_blank" href="https://www.linkedin.com/in/mikhail-starikov-84635211a/">
      <img src="../assets/linkedin.svg" width="40">
    </a>
    <a href="mailto:michail.a.starikov@gmail.com">
      <img src="../assets/mail.svg" width="35" height="40">
    </a>
    <span>.</span>
    <span>.</span>
    <span>.</span>
    <span>.</span>
  </div>
</template>
<script>
export default {
  name: "Links"
};
</script>

<style>
#links {
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  bottom: 20px;
  left: 10px;
  width: 80px;
}

#links a {
  padding: 10px 0;
}
#links span {
  font-size: 60px;
  font-weight: bold;
}
</style>
