//helpful resources: https://www.youtube.com/watch?v=7PHhRrjgTDA Ben Cunningham, Matthew Cranford walkthroughs https://matthewcranford.com, @Roderick Zoom webinar.
const colW = 101;
class Enemy {
    constructor(x, y, speed){
        this.colW = colW;
        this.x = x;
        this.y = y;
        this.speed = 100 + Math.floor(Math.random() * 200);
        this.sprite = 'images/enemy-bug.png'; 
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    update(dt) {
        this.x += this.speed * dt;
        if (this.x > colW * 5) {
            this.x = -50;
        }
    //if collision    
       if (player.y - 20 === this.y &&
            player.x + 80 > this.x &&
            player.x < this.x + 80)  {
            this.x = 0;
            window.location.reload();
        }
    }
    /*resetGame() {
        this.speed = 0;
        window.location.reload();
    }*/

}
//Create an array of Enemy instances and assign starting points
let allEnemies = [...Array(3)].map((_,x,y)=> new Enemy(0, y));
allEnemies[0].y = 63;
allEnemies[1].y = 146;
allEnemies[2].y = 229;

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
        //win message
        if (this.y === 0) {
            setTimeout (function(){
                alert('You are amazing!');
            }, 200);
        };
    };
}

// Now instantiate your objects.
// Place the player object in a variable called player
const player = new Player();

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
