const cnv = document.querySelector("canvas");
var ctx = cnv.getContext("2d");
window.addEventListener('keydown', keydownHandler, false);
window.addEventListener('keyup', keyupHandler, false);
var char = document.getElementById("pica");
var was = document.getElementById('was');
var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
var mvLeft = mvUp = mvRight = mvDown = false; 
var posX_Player = 0;
var posY_Player = 0;
var SIZE = 50;
var poits = 200;
var cursor = 0;
var energy = document.getElementById("energy")
var fruit = document.getElementById("fruit")
var fruitX = 0;
var fruitY = 0;
var pontos = 0;
var fruitSpeed = 10;
var POX = [
    75, 225, 375
]
var score = document.getElementById('score');
var index = 1;
var fruitIndex = Math.floor(Math.random() * (3 - 0));
function updateBlock(){  
    if (posY_Player <= (cnv.height / 2)){
        posY_Player =  (cnv.height / 2);
    }
    if (posX_Player == fruitX && posY_Player > fruitY && posY_Player < fruitY + 50){
        if (poits > 0){
            poits += 7
            fruit.style.opacity = 0.000001;
        } 
        if (poits >= 200){
            poits = 200;
        }
        console.log(poits)
    }
    
}
function update(){
    if (poits > 0){
        cursor += fruitSpeed;
    }
    
    char.style.left = posX_Player + 515 + "px";
    char.style.top = posY_Player - 100 + "px";
    fruitY = cursor;
    fruit.style.top = fruitY + "px"
    fruitX = POX[fruitIndex];
    fruit.style.left = 595 + fruitX + "px";
    if (cursor > cnv.height){
        cursor = 0;
        fruit.style.opacity = 1;
        fruitIndex = Math.floor(Math.random() * (3 - 0));
    }
}
function keyupHandler(e){
    switch(e.keyCode){
        case LEFT:
            mvLeft = false; 
            if (poits > 0){
                if (index == 0){
                    index = 0;
                } else {
                    index -= 1;
                }  
            }
        break;
        case UP:
            mvUp = false;
        break;
        case RIGHT:
            mvRight = false;
            if (poits > 0){
                if (index == 5){
                    index = 5;
                } else {
                    index += 1;
                }  
            }
            
        break;
        case DOWN:
            mvDown = false;
        break;
    }
}
function keydownHandler(e){
    switch(e.keyCode){
        case LEFT:
            mvLeft = true;
        break;
        case UP:
            mvUp = true;
        break;
        case RIGHT:
            mvRight = true;
        break;
        case DOWN:
            mvDown = true;
        break;
    }
}
function drawn(){
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.fillStyle = "rgba(0, 0, 0, 0)";
    ctx.fillRect(posX_Player, posY_Player, SIZE, SIZE);
    ctx.fillStyle = "rgba(0, 0, 0, 0)";
    ctx.fillRect(fruitX, fruitY, 25, 25);
}
function lose(){
    if (poits <= 0){
        setTimeout(() => {
            was.style.opacity = 1;
        }, 1000);
    }
}
function loop(){
    window.requestAnimationFrame(loop, cnv);
    if (poits > 0){
        poits -= 0.3;
        fruitSpeed += 0.009
    } 
    
    posX_Player = POX[index];
    updateBlock();
    update();
    drawn();
    lose();
    if(poits <= 0){
        char.src = 'pica.gif'
    }
    energy.style.width = poits + "px"
    score.innerHTML = `Score: ${pontos}`;
}
loop();
if (poits > 0){
    setInterval(() => {
        if (poits > 0){
            pontos++
        }
        
    }, 250);
}
