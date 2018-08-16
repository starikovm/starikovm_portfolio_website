<template>
    <canvas id="homepageAnimation" height="1000" width="2000"></canvas>
</template>

<script>
import { CanvasSpace, Create, Circle } from "pts";
var space;
function canvasAnimate() {
  space = new CanvasSpace("#homepageAnimation").setup({
    bgcolor: "#1c6d80"
  });
  var form = space.getForm();
  var pts = [];
  var colors = ["#ff2d5d", "#42dc8e", "#2e43eb", "#ffe359"];

  space.add({
    start: () => {
      pts = Create.distributeRandom(space.innerBound, 500);
    },
    animate: () => {
      let r =
        Math.abs(space.pointer.x - space.center.x) / space.center.x * 150 + 70;
      let range = Circle.fromCenter(space.pointer, r);

      // check if each point is within circle's range
      for (let i = 0, len = pts.length; i < len; i++) {
        if (Circle.withinBound(range, pts[i])) {
          // calculate circle size
          let dist = (r - pts[i].$subtract(space.pointer).magnitude()) / r;
          let p = pts[i]
            .$subtract(space.pointer)
            .scale(1 + dist)
            .add(space.pointer);
          form.fillOnly(colors[i % 4]).point(p, dist * 25, "circle");
        } else {
          form.fillOnly("#fff").point(pts[i], 0.5);
        }
      }
    }
  });
  if (space) {
    space.bindMouse();
    space.bindTouch();
    space.play();
  }
}

function restartCanvas() {
  space.removeAll();
  var canvas = document.getElementById("homepageAnimation");
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);

  canvasAnimate();
}

export default {
  name: "HomepageAnimation",
  mounted() {
    canvasAnimate();
    window.addEventListener("resize", restartCanvas());
  },
  beforeDestroy() {
    window.removeEventListener("resize", restartCanvas());
  }
};
</script>

<style>
#homepageAnimation {
  position: absolute;
}
</style>
