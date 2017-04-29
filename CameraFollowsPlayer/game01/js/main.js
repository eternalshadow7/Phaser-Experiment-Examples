var game = new Phaser.Game(500, 500, Phaser.AUTO, '', { preload: preload, create: create, update: update });
// the ship and backdrop were lazily made by me

function preload() {

    game.load.image('backdrop', 'assets/img/StarsAndCircles.png');
	game.load.image('boat','assets/img/Ship.png');

}

var cursors;
var ship;
function create() {
    // set the "real bounds"
    game.world.setBounds(0, 0, 2000, 1888);

    game.add.sprite(0, 0, 'backdrop');
	ship=game.add.sprite(50, game.world.height/2,'boat');
    game.physics.arcade.enable(ship);
   

    cursors = game.input.keyboard.createCursorKeys();
	// this will allow the camera to follow the player
	game.camera.follow(ship, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

}

function resetSprite(sprite) {

    sprite.x = game.world.bounds.right;

}

function update() {

    if (cursors.up.isDown)
    {
        game.camera.y -= 4;
		ship.body.velocity.y=-100;
		
    }
    else if (cursors.down.isDown)
    {
        game.camera.y += 4;
		ship.body.velocity.y=100;
    }

    if (cursors.left.isDown)
    {
        game.camera.x -= 4;
		ship.body.velocity.x=-100;
    }
    else if (cursors.right.isDown)
    {
        game.camera.x += 4;
		ship.body.velocity.x=100;
    }


}
