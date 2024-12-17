class Gainha {
    constructor(ibagens) {
        this.ibagens = ibagens;
        this.frame = 0;
        this.x = width * 0.2;
        this.y = height * 0.4;
        this.rate = 2;
    }
    show() {
        push();
        imageMode(CENTER);
        image(this.ibagens[this.frame], this.x, this.y, 60, 47);
        pop();
        if (frameCount % this.rate == 0) {
            this.frame++;
            this.frame = this.frame % this.ibagens.length;
        }
    }
}