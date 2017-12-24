let game=new Game();

const startGame=function () {
  let pikachu=document.getElementById('pikachu');
  let charmender=document.getElementById('charmender');
  let score=document.getElementById('score');
  updateCharmender();
};

const removePokeball=function () {
  let pokeball=document.getElementById('pokeball');
  pokeball.style.visibility='hidden';
}

const comeInPokeball=function () {
  let charmender=document.getElementById('charmender');
  let pokeball=document.getElementById('pokeball');
  let retry=document.getElementById('retry');
  charmender.style.visibility='hidden';
  pokeball.style.transform='rotate(-90deg)';
  pokeball.style.top='60px';
  pokeball.src='images/pokeballMoving.gif';
  setTimeout(removePokeball,1700);
  retry.style.visibility='visible';
};

const showGameOver=function () {
  let pokeball=document.getElementById('pokeball');
  pokeball.style.visibility='visible';
  clearInterval(goCharmender);
  setTimeout(comeInPokeball,1000);
};

const updateCharmender=function () {
  charmender.style.left=game.charmender.walk(10)+"px";
  if(game.isGameOver()){
    showGameOver();
  }
  else if (charmender.style.left=='0px') {
    score.innerHTML='your score is: '+game.updateScore();
    game.charmender.left=1000;
  }
};

const goCharmender=setInterval(updateCharmender,20);

const comeToGroundCharmender=function () {
  charmender.style.top=game.charmender.getBackToGround(150)+"px";
};

const jumpCharmender=function (event) {
  if(event.keyCode==38&&game.charmender.top==480){
    charmender.style.top=game.charmender.jump(150)+"px";
    setTimeout(comeToGroundCharmender,400);
  }
};

window.onload=startGame;
