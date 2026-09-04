//Projeto Bolinha Final
//Movimento a bolinha no eixo x e y 

let xBolinha = 200;
let yBolinha = 200;

let xVelocidade = 3;
let yVelocidade = 5; 

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  mostrabolinha();
  movimentaBolinha();
  verificaColisaoX();
  verificaColisaoY();
}


//------------------Mostra Bolinha-----------------
function mostrabolinha(){
  circle(xBolinha, yBolinha, 15);
}


//-------------------Função movimenta Bolinha-------------
function movimentaBolinha(){
   xBolinha += xVelocidade;
   yBolinha += yVelocidade;
  
}

//----------------------Verifica colisao no eixo------------------
function verificaColisaoX(){
  if(xBolinha > width || xBolinha < 0){
    xVelocidade *= -1;
  }
}


//-----------------Verifica colisao no eixo y---------------
function verificaColisaoY(){
  if(yBolinha > height || yBolinha < 0){
    yVelocidade *= -1;
  }
}


//--------------Funçao click-----------------
function mousePressed(){
  xVelocidade *= -1;
  console.log('Mudando a velocidade', xVelocidade);
}








