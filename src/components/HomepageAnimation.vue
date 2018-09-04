<template>
    <canvas id="homepageAnimation"></canvas>
</template>

<script>
import { Circle, Num, Group, Pt, Const, Line, CanvasSpace } from "pts";
var space;
function canvasAnimate() {
  space = new CanvasSpace("#homepageAnimation").setup({
    bgcolor: "#36364b",
    resize: true,
    retina: true
  });
  var form = space.getForm();
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
            Num.randomRange(firstSide, otherSide, Num.randomRange(0, firstSide))
          )
        );
        ln.moveBy(space.center).rotate2D(i * Math.PI / 50, space.center);
        pairs.push(ln);
      }
    },

    animate: () => {
      // define a range from the pointer
      let range = Circle.fromCenter(space.center, 200);
      let middleRange = Circle.fromCenter(space.center, 400);
      let outerRange = Circle.fromCenter(space.center, 600);
      for (let i = 0, len = pairs.length; i < len; i++) {
        let ln = pairs[i];

        let inPath = Circle.intersectRay2D(range, ln);
        let inPath2 = Circle.intersectRay2D(middleRange, ln);
        let inPath3 = Circle.intersectRay2D(outerRange, ln);
        if (inPath.length > 1) {
          var intersectStrokeColor = "rgba(21,21,29,.4)";
          form
            .stroke(intersectStrokeColor)
            .line(new Group(inPath[0], inPath[1]));
          form
            .stroke(intersectStrokeColor)
            .line(new Group(inPath2[0], inPath2[1]));
          form
            .stroke(intersectStrokeColor)
            .line(new Group(inPath3[0], inPath3[1]));
        }
        var rotatingDegree = Const.one_degree * 0.0005 * (i + 15);
        ln.rotate2D(rotatingDegree, space.center);
        let side = Line.sideOfPt2D(ln, leftDownCorner);
        form
          .stroke(
            side < 0 ? "rgba(137, 168, 255,.2)" : "rgba(137, 255, 170,.2)"
          )
          .line(ln);
      }
    }
  });

  space.play();
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
