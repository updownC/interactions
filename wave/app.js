import { WaveGroup } from './wavegroup.js'

class App {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    this.WaveGroup = new WaveGroup();

    window.addEventListener('resize', this.resize.bind(this));
    this.resize()
    //animation 시작
    requestAnimationFrame(this.animate.bind(this));
  }

  resize(){
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;
    // for retina 
    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);

    this.WaveGroup.resize(this.stageWidth, this.stageHeight)
  }

  animate(){
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    
    this.WaveGroup.draw(this.ctx);

    requestAnimationFrame(this.animate.bind(this))
  }

}

window.onload = () => {
  new App();
}