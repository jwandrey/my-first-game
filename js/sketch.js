//criar as variáveis
let personagem
let star
let floor
let hand

let tamanho = 60

let andarX = 0
let andarY = 0

let velocidade = 60

//criar a tela
//upload das imagens
function setup() {
  createCanvas(480, 480);
  personagem = loadImage('people.png')
  star = loadImage('star.png')
  floor = loadImage('floor.png')
  hand = loadImage('hand.png')
}

//desenhar o que aparecerá na tela
function draw() {
  if(andarX < 0){
    andarX = 0
  }
  
  if(andarY < 0){
    andarY = 0
  }
  
//restringir o caminho na tela
//vezes 7 -> 480 (tamanho * 8) - 60 (tamanho) 
//em vez de 8 vezes a imagem, terá só 7 vezes a imagem
//se eu der mais do que 7 cliques, a posição será tamanho*7
  if(andarX > tamanho*7){
    andarX = tamanho*7
  }
  if(andarY > tamanho*7){
    andarY = tamanho*7
  }
  
//distribuir o quadro da imagem de fundo na tela
//a imagem repetida (8x8) se torna o background
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      image(floor, tamanho * i, tamanho * j, tamanho, tamanho)
    }
  }

//localizar os ícones - ponto de partida e o ponto de chegada
  image(star, 424, 424, 45, 45)
  image(personagem, andarX, andarY, tamanho, tamanho)

if(andarX === 0 && andarY === 0){
  rect(100, 160, 280, 100, 20)
  textSize(30)
    text('Reach the Stars!', 126, 210)
  textSize(18)
  text('*Use Arrows*', 182, 240)
}
  
//criar uma mensagem quando o objetivo é atingido
//criar um botão de reiniciar o game
  if(andarX === tamanho*7 && andarY === tamanho*7){
    rect(120, 160, 240, 160, 20)
    textSize(30)
    text('You Won!', 178, 230)
    textSize(28)
    text('Congratulations!', 144, 270)
    image(hand, 180, 280, 120, 120)
    
    restart = createButton('Restart')
    restart.mousePressed(resetar)
    noLoop()
     }
}

function resetar(){
  andarX = 0
  andarY = 0
  restart.remove()
  loop()
  
}

//ditar o que acontecerá quando cada tecla for pressionada
function keyPressed() {
  if(keyIsDown(UP_ARROW)){
    andarY -= velocidade
  }
  
  if(keyIsDown(DOWN_ARROW)){
    andarY += velocidade
  }
  
  if(keyIsDown(LEFT_ARROW)){
    andarX -= velocidade
  }
  
  if(keyIsDown(RIGHT_ARROW)){
    andarX += velocidade
  }
}
