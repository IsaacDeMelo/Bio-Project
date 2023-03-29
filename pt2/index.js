import { player } from "./player.js";

const cnv = document.getElementById("mycanvas");
const ctx = cnv.getContext("2d"); 
const img = new Image()
img.src = "Runner.png";
let frameE = 0; 
let player1 = new player(0, 0, 50, 50)
function drawn(){
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.drawImage(
        img, frameE, 0, 80, 80, 
        player1.posX, player1.posY, 80, 80);
        

}
function loop() {
    window.requestAnimationFrame(loop, cnv);
    if (mvLeft == true){
        player1.posX -= 5;
        
    } 
    if (mvRight == true){
        player1.posX += 5; 
        
    }
    drawn();
}
loop(); 
var movendo = false; 
var mvLeft = false; 
var mvRight = false;
window.addEventListener('keydown', function(e){
    
    movendo = false; 
    switch(e.keyCode){
        case 37:
            movendo = true;
            mvLeft = true;
            break; 
        case 39:
            movendo = true; 
            mvRight = true;
            break;
    }
})
window.addEventListener('keyup', function(e){
    movendo = false; 
    
    switch(e.keyCode){
        case 37:
            movendo = false; 
            mvLeft = false; 
            break; 
        case 39:
            movendo = false; 
            mvRight = false; 
            break;
}
}
)

setInterval(() => {
    frameE = 80;
        setTimeout(() => {
            frameE = 0;
        }, 100);

}, 200);
