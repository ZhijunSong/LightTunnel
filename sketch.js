
let sketch5 = function(p) {
  let ledStr = [];
  let spacer = 16;
  let rows;
  let spaceY;
  let y = [];
  let t = [];
  let changeState = false;
  ////bg
  let bg = ["#7B90D2", "#EB7A77", "#FFB11B", "#86C166", "#33A6B8", "#D05A6E"];
  let n = 0;
  ///
  let texts;
  class Led {
    constructor(y, spacer) {
      this.c = 0;
      this.y = y;
      this.num = 16;
      this.spacer = spacer;
    }

    show(t) {
      for (let i = 0; i < this.num; i++) {
        this.c = p.color(255, 128 + 128 * p.tan(t / 30 + i / 4));
        //this.c = p.color(203,64,66, 128 + 128 * p.cos(t / 10 + i / 4));
        p.rectMode(p.CENTER);
        p.fill(this.c);
        p.noStroke();
        p.rect(i * this.spacer + this.spacer / 2, this.y, this.spacer, this.spacer);
      }

    }

  }
  p.setup = function() {
    p.createCanvas(200, 378);
    spaceY = p.height / 30;
    rows = p.width / spacer;
    for (let j = 0; j < 30; j++) {
      y[j] = j * spaceY;
      ledStr[j] = new Led(y[j] + spaceY / 2, rows);
      // t[j] = j;
      //t[j]= 0;
      t[j] = 20 * p.cos(p.millis() / 1000 + j);

    }
  }

  p.draw = function() {
    p.background(bg[n]);
    if (p.frameCount % 360 === 0) {
      n++;
      if (n === 6) {
        n = 0;
      }
    }
    for (let j = 0; j < 30; j++) {
      if (j % 2 === 0) {
        t[j]++;
      } else {
        t[j]--;
      }
      ledStr[j].show(t[j]);
    }

  }
  p.mousePressed = function() {
    changeState = !changeState;
    n = n + 1;
    if (n === 6) {
      n = 0;
    }
    console.log(changeState);
  }
}

let canvas5 = new p5(sketch5, "c5");