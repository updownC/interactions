class App {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize()

    requestAnimationFrame(this.animate.bind(this));
  }
  // get screen size
  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;
    // double canvas size for retina display
    this.canvas.width = this.stageWidth * 2 ;
    this.canvas.heigth = this.stageHeight * 2;
    this.ctx.scale(2, 2);
  }

  animate(t){
    requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
  }
}

window.onload = () => {
  new App();
}