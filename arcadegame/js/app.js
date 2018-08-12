
class Enemy {
    constructor(x, y, speed){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.sprite = 'images/enemy-bug.png'; 
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    update(dt) {
        this.x =+ this.speed * dt;
        if (this.x > mvX * 5) {
            this.x = 0;
            this.speed = 100 + Math.floor(Math.random() * 200);
        }
    }
}
//Array.map code from @Roderick creates Enemy instances and assigns starting points
// Place all enemy objects in an array called allEnemies
let allEnemies = [...Array(3)].map((_,y)=> new Enemy(0, y));
allEnemies[0].y = 63;
allEnemies[1].y = 147;
allEnemies[2].y = 230;

class Player {
    constructor(x, y){
        this.mvX = 101;
        this.mvY = 83;
        this.x = this.mvX * 2;
        this.y = this.mvY * 5;
        this.sprite = 'images/char-princess-girl.png';
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    handleInput(keyup) {
        if (keyup === 'left' && this.x > 0) {
            this.x -= this.mvX;
        };            
        if (keyup === 'right' && this.x < 400) {
            this.x += this.mvX;
        };
        
        if (keyup === 'up' && this.y > 0) {
                this.y -= this.mvY;
        };
        if (keyup === 'down' && this.y < 490) {
                this.y += this.mvY;
        };
    };
    /*update() {
        
        render()
    }*/
}
const player = new Player();

// Now instantiate your objects.

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
