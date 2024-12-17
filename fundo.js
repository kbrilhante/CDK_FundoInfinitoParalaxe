class Fundo {
    constructor(ibagem, dx, x = 0, y = 0) {
        this.ibagem = ibagem;
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.w = width;
        this.h = height;
    }
    show() {
        push();
        image(this.ibagem, this.x, this.y, this.w, this.h);
        pop();
    }
    move() {
        this.x -= this.dx;
        return this.x < -width;
    }
}