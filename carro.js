//variáveis do carro

let xCarros = [560, 560, 560, 10, 10, 560, 560, 10, 10, 10];
let yCarros = [47, 77, 107, 230, 200, 137, 167, 320, 260, 290];

//velocidade dos carros

let velocidadeCarros = [2, 1.5, 2.8, 1.1, 5, 3.5, 5, 3.9, 1.7, 2.4];

let comprimentoCarro = 35;
let alturaCarro = 25

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  xCarros[0] -= velocidadeCarros[0];
  xCarros[1] -= velocidadeCarros[1];
  xCarros[2] -= velocidadeCarros[2];
  xCarros[5] -= velocidadeCarros[5];
  xCarros[6] -= velocidadeCarros[6];
  xCarros[3] += velocidadeCarros[3];
  xCarros[4] += velocidadeCarros[4];
  xCarros[7] += velocidadeCarros[7];
  xCarros[8] += velocidadeCarros[8];
  xCarros[9] += velocidadeCarros[9];
}

function voltaPosicaoInicialCarro(){
  if (xCarros[0] < -30){
    xCarros[0] = 600
  }
  if (xCarros[1] < -30){
    xCarros[1] = 600
  }
  if (xCarros[2] < -30){
    xCarros[2] = 600
  }
  if (xCarros[3] > 600){
    xCarros[3] = 0
  }
  if (xCarros[4] > 600){
    xCarros[4] = 0
  }
  if (xCarros[5] < -30){
    xCarros[5] = 600
  }
  if (xCarros[6] < -30){
    xCarros[6] = 600
  }
  if (xCarros[7] > 600){
    xCarros[7] = 0
  }
  if (xCarros[8] > 600){
    xCarros[8] = 0
  }
  if (xCarros[9] > 600){
    xCarros[9] = 0
  }
}













