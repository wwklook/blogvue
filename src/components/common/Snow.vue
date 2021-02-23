<template>
  <canvas
    id="canvas"
    ref="canvas"
    style="z-index: 100; position: fixed; top: 0; left: 0"
  >
    您的浏览器不支持 HTML5 canvas 标签。
  </canvas>
</template>
<script>
export default {
  name: "Snow",
  data() {
    return {
      //canvas init
      canvas: "",
      ctx: "",
      W: "",
      H: "",
      angle: 0,
      mp: 3000,
      particles: [],
      t: 0,
      isInfo: false,
    };
  },
  mounted() {
    this._initCavas();
  },
  methods: {
    showInfo() {
      this.isInfo = true;
    },
    _initCavas() {
      this.canvas = document.getElementById("canvas");
      this.ctx = this.canvas.getContext("2d");

      //canvas dimensions
      this.W = window.innerWidth - 30;
      this.H = window.innerHeight - 10;
      this.canvas.width = this.W;
      this.canvas.height = this.H;

      //snowflake particles
      this.mp = 3000;
      this.particles = [];
      for (var i = 0; i < this.mp; i++) {
        this.particles.push({
          x: Math.random() * this.W, //x-coordinate
          y: Math.random() * this.H, //y-coordinate
          r: Math.random() * 3 + 1, //radius
          d: Math.random() * this.mp, //density
        });
      }
      clearInterval(localStorage.getItem("interval"));
      localStorage.setItem("interval", setInterval(this.draw, 15));
    },
    draw() {
      this.ctx.clearRect(0, 0, this.W, this.H);

      this.ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      this.ctx.beginPath();
      for (var i = 0; i < this.mp; i++) {
        var p = this.particles[i];
        this.ctx.moveTo(p.x, p.y);
        this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
      }
      this.ctx.fill();
      this.update();
    },
    update() {
      this.angle += 0.01;
      for (var i = 0; i < this.mp; i++) {
        var p = this.particles[i];
        p.y += Math.cos(this.angle + p.d) + 1 + p.r / 2;
        p.x += Math.sin(this.angle) * 2;

        if (p.x > this.W || p.x < 0 || p.y > this.H) {
          if (i % 3 > 0) {
            this.particles[i] = {
              x: Math.random() * this.W,
              y: -10,
              r: p.r,
              d: p.d,
            };
          } else {
            if (Math.sin(this.angle) > 0) {
              //Enter fromth
              this.particles[i] = {
                x: -5,
                y: Math.random() * this.H,
                r: p.r,
                d: p.d,
              };
            } else {
              this.particles[i] = {
                x: this.W + 5,
                y: Math.random() * this.H,
                r: p.r,
                d: p.d,
              };
            }
          }
        }
      }
    },
  },
};
</script>

<style>
#my-info {
  width: 700px;
  height: 500px;
  border: 1px solid white;
  position: absolute;
  top: 40px;
  right: 60px;
  z-index: 101;
  border-radius: 10px;
  background-color: white;
  padding: 20px;
}

#headeImg {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 1px solid white;
  position: absolute;
  top: 30px;
  right: 50px;
  z-index: 200;
}

#headeImg:hover {
  cursor: pointer;
  border: 3px solid white;
}

#main {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  position: absolute;
  background-size: 100% 100%;
}
</style>