gap = randGap();
var myObstacles = [];
var enemytypes = ["cactus", "cactuss"];
var gamescore = 0;
//inserting images
var standimage = new Image();
standimage.src = "dinosaur.png";

var cactus = new Image();
cactus.src = "cactus.png";

var cactus2image = new Image();
cactus2image.src = "cactus2.png";
                                 


function startGame() {
    gamearea.start();mki8
}
function everyinterval(n) {
    if (gamearea.frame % n == 0) return true;
    return false;
}
function jump() {
    player.speedY = -2;

}
function randGap() {
    return Math.floor(200 + Math.random() * (500 - 200 + 1));
}
var scoreText = {
    x: 220,
    y: 200,
    update: function (text) {
        gamearea.context.fillStyle = "gray";
        gamearea.context.font = "30px Consolas";
        gamearea.context.fillText(text, 220, 200);
    }
}
var player = {
    x: 20,
    y: 470,
    speedY: 0,
    update: function () {
        if (this.y < 470) {
            gamearea.context.drawImage(standimage, this.x, this.y - 40, 60, 60);
        }
        else {
            gamearea.context.drawImage(standimage, this.x, this.y - 40, 50, 60);
        }
    },
    newPos: function () {
        if (this.y < 280) {
            this.speedY = 2;
        }
        this.y = this.y + this.speedY;
        if (this.speedY == 2 && this.y == 470) {
            this.speedY = 0;
        }

    },
    crashWith: function (obs) {
        if (this.x + 30 > obs.x && this.x < obs.x + obs.width && this.y + 30 > obs.y) {
            return true;
        }
        return false;
    }
}
function obstacle() {
    this.height = Math.floor(20 + Math.random() * (50 - 20 + 1));
    this.width = Math.floor(10 + Math.random() * (20 - 10 + 1));
    this.x = 1000;
    this.y = gamearea.canvas.height - this.height;
    this.index = Math.floor(Math.random() * enemytypes.length);
    this.enemytype = enemytypes[this.index];
    this.draw = function () {
        if (this.enemytype == "cactus") {
            gamearea.context.drawImage(cactus, this.x, this.y - 23, 40, this.height + 5);
        }
        else if (this.enemytype == "cactuss") {
            gamearea.context.drawImage(cactus2image, this.x, this.y - 23, 40, this.height + 5);
        }
        else {
            gamearea.context.drawImage(flyingdinosaur, this.x, this.y - 55, 60, this.height + 10);
        }
    }
}

var gamearea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.height = 500;
        this.canvas.width = 600;
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.context = this.canvas.getContext("2d");
        this.frame = 0;
        this.score = 0;
        scoreText.update("Score: 0");
        this.interval = setInterval(this.updateGameArea, 5);
        window.addEventListener("keydown", jump);
    },
    updateGameArea: function () {
        for (i = 0; i < myObstacles.length; i++) {
            if (player.crashWith(myObstacles[i])) {
                gamearea.stop();
                return;
            }
        }
        gamearea.clear();
        if (everyinterval(gap)) {
            myObstacles.push(new obstacle());
            gap = randGap();
            gamearea.frame = 0;
        }
        for (i = 0; i < myObstacles.length; i++) {
            myObstacles[i].x -= 2;
            myObstacles[i].draw();
        }
        player.newPos();
        player.update();
        gamearea.frame += 1;
        gamearea.score += 0.01;
        gamescore = Math.floor(gamearea.score);
        scoreText.update(" Your Score: " + gamescore);

    },
    clear: function () {
        gamearea.context.clearRect(0, 0, this.canvas.width, this.canvas.width);
    },
    stop: function () {
        clearInterval(this.interval);
        gamearea.context.fillStyle = "gray";
        gamearea.context.font = "25px Consolas";
        gamearea.context.fillText("GAME OVER...🙂", 200, 250);
    },
}