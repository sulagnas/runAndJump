const Charmender=function (leftDistance,topDistance) {
  this.left=leftDistance;
  this.top=topDistance;
};

Charmender.prototype={
  walk:function (distanceToWalk) {
    this.left-=distanceToWalk;
    return this.left;
  },
  jump:function (distanceToJump) {
    this.top-=distanceToJump;
    return this.top;
  },
  getBackToGround:function (distanceToCome) {
    this.top += distanceToCome;
    return this.top;
  }
};
