
//code from Roderick creates Enemy instances and positions starting points
//let allEnemies = [...Array(3)].map((_,i)=> new Enemy(0,i+1));
let allEnemies = [];
class Enemy {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.sprite = 'images/enemy-bug.png'; 
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    update(dt) {
        render();
    }
}

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
    handleInput(mvX, mvY) {
        if (this.x >= 0 && this.x <= this.mvX * 4) {
            if (mvX === 'left') { 
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
    /*update() {
        
        render()
    }*/
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
