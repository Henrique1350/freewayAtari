//variável do ator
let xAtor = 288;
let yAtor = 360;
let colisao = false;
let meusPontos = 0;


function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 25, 20);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -=3;
  }
   if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
     yAtor +=3;
    }
  }
}

function verificaColisao(){
  for (i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 10);
    if (colisao){
      voltaAtorParaPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 360;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(18);
  fill(color(255, 255, 0));
  text(meusPontos, 300, 18);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}

function podeSeMover(){
  return yAtor < 360;
}















