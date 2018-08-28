<template>
    <canvas id="homepageAnimation" height="1000" width="2000"></canvas>
</template>

<script>
import { Num, Group, Pt, Const, Line, CanvasSpace } from "pts";
var space;
function canvasAnimate() {
  space = new CanvasSpace("#homepageAnimation").setup({
    bgcolor: "#36364b"
  });
  var form = space.getForm();
  (function() {
    var pairs = [];
    var leftDownCorner = new Pt(0, 0);
    space.add({
      start: () => {
        let firstSide = space.size.maxValue().value;
        let otherSide = space.size.minValue().value;
        for (let i = 0; i < 100; i++) {
          let ln = new Group(
            new Pt(
              Num.randomRange(
                firstSide,
                otherSide,
                Num.randomRange(0, firstSide)
              ),
              -Num.randomRange(
                firstSide,
                otherSide,
                Num.randomRange(0, firstSide)
              )
            ),
            new Pt(
              -Num.randomRange(
                firstSide,
                otherSide,
                Num.randomRange(0, firstSide)
              ),
              Num.randomRange(
                firstSide,
                otherSide,
                Num.randomRange(0, firstSide)
              )
            )
          );
          ln.moveBy(space.center).rotate2D(i * Math.PI / 50, space.center);
          pairs.push(ln);
        }
      },

      animate: () => {
        for (let i = 0, len = pairs.length; i < len; i++) {
          // rotate each line by 0.1 degree and check collinearity with pointer
          let ln = pairs[i];
          ln.rotate2D(Const.one_degree / 15, space.center);
          let side = Line.sideOfPt2D(ln, leftDownCorner);
          form
            .stroke(side < 0 ? "rgba(255,255,0,.1)" : "rgba(0,255,0,.1)")
            .line(ln);
        }
      }
    });

    //// ----

    space
      .bindMouse()
      .bindTouch()
      .play();
  })();
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
