class Camada {
    constructor(ibagem, vel, qtd = 3) {
        this.ibagem = ibagem;
        this.vel = vel;
        this.fundos = [];
        for (let i = 0; i < qtd; i++) {
            this.fundos.push(new Fundo(this.ibagem, this.vel, i * width));
        }
    }
    show() {
        for (let i = this.fundos.length - 1; i >= 0; i--) {
            this.fundos[i].show();
            if (this.fundos[i].move()) {
                let posX = this.fundos[this.fundos.length - 1].x + width;
                this.fundos.push(new Fundo(this.ibagem, this.vel, posX));
                this.fundos.shift();
            }
        }
    }
}