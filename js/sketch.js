//cria as variáveis
let personagem
let star
let floor
let hand

let tamanho = 60

let andarX = 0
let andarY = 0

let velocidade = 60

//cria a tela
function setup() {
  createCanvas(480, 480);
  
//upload das imagens
  personagem = loadImage('people.png')
  star = loadImage('star.png')
  floor = loadImage('floor.png')
  hand = loadImage('hand.png')
}

//desenha o que aparecerá na tela
function draw() {

//restringe o caminho que se percorre na tela
  if(andarX < 0){
    andarX = 0
  }
  if(andarY < 0){
    andarY = 0
  }
  if(andarX > tamanho*7){
    andarX = tamanho*7
  }
  if(andarY > tamanho*7){
    andarY = tamanho*7
  }
  
//distribui e repete img de fundo na tela
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      image(floor, tamanho * i, tamanho * j, tamanho, tamanho)
    }
  }

//localiza os ícones - ponto de partida e ponto de chegada
  image(star, 424, 424, 45, 45)
  image(personagem, andarX, andarY, tamanho, tamanho)

//mensagem exibida - ponto de partida
if(andarX === 0 && andarY === 0){
  rect(100, 160, 280, 100, 20)
  textSize(30)
    text('Reach the Stars!', 126, 210)
  textSize(18)
  text('*Use Arrows*', 182, 240)
}
  
//mensagem exibida - ponto de chegada
  if(andarX === tamanho*7 && andarY === tamanho*7){
    rect(120, 160, 240, 160, 20)
    textSize(30)
    text('You Won!', 178, 230)
    textSize(28)
    text('Congratulations!', 144, 270)
    image(hand, 180, 280, 120, 120)

//cria um botão de resetar o game
    restart = createButton('Restart')
    restart.mousePressed(resetar)
    noLoop()
     }
}


//cria a função resetar
function resetar(){
  andarX = 0
  andarY = 0
  restart.remove()
  loop()
}

//dita a ação de quando uma tecla é pressionada
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
