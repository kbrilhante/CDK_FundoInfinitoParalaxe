let imgGainha, imgCamadas;
let gainha, camadas;
const VEL = 0.8;

function preload() {
    imgCamadas = [];
    for (let i = 1; i <= 9; i++) {
        imgCamadas.unshift(loadImage("./assets/bg/layer0" + i + ".png"));
    }
    imgGainha = [];
    for (let i = 1; i <= 4; i++) {
        let ibagem = loadImage("./assets/gainha/frame-" + i + ".png");
        imgGainha.push(ibagem);
    }
}

function setup() {
    createCanvas(900, 506);
    camadas = [];
    for (let i = 0; i < imgCamadas.length; i++) {
        let qtd = i == 0 ? 1 : 3;
        let vel = i == 4 ? 0 : i * VEL;
        camadas.push(new Camada(imgCamadas[i], vel, qtd));
    }
    gainha = new Gainha(imgGainha);
}

function draw() {
    background("hotpink");
    for (let i = 0; i < camadas.length; i++) {
        camadas[i].show();
    }
    gainha.show();
}
