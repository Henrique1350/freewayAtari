//variáveis das imagens do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro1;
let imagemDoCarro2;
let imagemDoCarro3;
let imagemDoCarro4;
let imagemDoCarro5;
let imagemDoCarro6;
let imagemDoCarro7;
let imagemDoCarro8;
let imagemDoCarro9;
let imagemDoCarro10;

//variáveis dos sons do jogo

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage ("imagens/ator-1.png");
  imagemDoCarro1 = loadImage("imagens/carro1.png");
  imagemDoCarro2 = loadImage("imagens/carro2.png");
  imagemDoCarro3 = loadImage("imagens/carro3.png");
  imagemDoCarro4 = loadImage("imagens/carro4.png");
  imagemDoCarro5 = loadImage("imagens/carro5.png");
  imagemDoCarro6 = loadImage("imagens/carro1.png");
  imagemDoCarro7 = loadImage("imagens/carro2.png");
  imagemDoCarro8 = loadImage("imagens/carro4.png");
  imagemDoCarro9 = loadImage("imagens/carro4.png");
  imagemDoCarro10 = loadImage("imagens/carro5.png");
  imagemCarros = [imagemDoCarro1, imagemDoCarro2, imagemDoCarro3, imagemDoCarro4, imagemDoCarro5, imagemDoCarro6, imagemDoCarro7, imagemDoCarro8, imagemDoCarro9, imagemDoCarro10];
  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}












