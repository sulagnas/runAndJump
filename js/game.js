const Game=function () {
  this.pikachu=new Pikachu(0,480);
  this.charmender=new Charmender(1000,480);
  this.score=0;
};

Game.prototype={
  isGameOver:function () {
    let pikachuPosition = this.pikachu.left+","+this.pikachu.top;
    let charmenderPosition = this.charmender.left+","+this.charmender.top;
    return pikachuPosition == charmenderPosition;
  },
  updateScore:function () {
    this.score+=10;
    return this.score;
  }
};
