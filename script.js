let imgFundo, imgGainha;
let gainha, fundo;
const VEL = 6;

function preload() {
    imgFundo = loadImage("./assets/platformer_background_3.png");
    imgGainha = [];
    for (let i = 1; i <= 4; i++) {
        let ibagem = loadImage("./assets/gainha/frame-" + i + ".png");
        imgGainha.push(ibagem);
    }
}

function setup() {
    createCanvas(900, 506);
    
    fundo = [];
    for (let i = 0; i < 3; i++) {
        fundo.push(new Fundo(imgFundo, VEL, i * width ));
    }

    gainha = new Gainha(imgGainha);
}

function draw() {
    for (let i = fundo.length - 1; i >= 0; i--) {
        fundo[i].show();
        if (fundo[i].move()) {
            let posX = fundo[fundo.length - 1].x + width;
            fundo.push(new Fundo(imgFundo, VEL, posX));
            fundo.shift();
        }
    }
    gainha.show();
}
