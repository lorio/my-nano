// Enemies our player must avoid
let allEnemies = [];
/*class Enemy {
    constructor(x, y, speed){

    }
}*/
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and

class Player {
    constructor(x, y){
        this.mvX = 101;
        this.mvY = 83;
        this.x = 101 * 2;
        this.y = 83 * 5;
        this.sprite = 'images/char-princess-girl.png';
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    handleInput() {
        if (this.x >= 0 && this.x <= this.mvX * 4) {
            if (this.input === 'left') { 
                this.x -= this.mvX;
                render();
            } if (player.input === 'right') {
                this.x += this.mvX;
            } if (player.input === 'up') {
                this.y -= this.mvY;
            } if (player.input === 'down') {
                this.y += this.mvY;
            }
        }
    }
    update() {
        
        render()
    }
}
const player = new Player();

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
