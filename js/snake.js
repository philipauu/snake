var snake;

function setup() {
    createCanvas(600, 600);
    snake = new Snake();
}

function draw() {
    background(51);
    snake.update();
    snake.show();
}

function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 0;
    this.yspeed = 0;

    this.update = function () {
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
    }

    this.show = function () {
        fill(255);
        rect(this.x, this.y, 10, 10);
    }
}