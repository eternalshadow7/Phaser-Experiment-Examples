var game = new Phaser.Game(500, 500, Phaser.AUTO, '', { preload: preload, create: create, update: update });
// the ship and backdrop were lazily made by me

function preload() {

    game.load.image('backdrop', 'assets/img/StarsAndCircles.png');
	game.load.image('boat','assets/img/Ship.png');
	game.load.image('box1','assets/img/box1.png');
	game.load.image('box2','assets/img/box2.png');
	game.load.image('box3','assets/img/box3.png');
	game.load.image('ground','assets/img/ground.png');

}

var cursors;
var ship;
var box1;
var box2;
var box3;
var other1;
var other2;
var other3;
var other4;

var entireGround;
function create() {
    // set the "real bounds"
    game.world.setBounds(0, 0, 2000, 1888);
  
    game.add.sprite(0, 0, 'backdrop');
	game.physics.startSystem(Phaser.Physics.ARCADE);
	
	entireGround=game.add.group();
	
	// We will enable physics for any object that is created in this group
	entireGround.enableBody=true;
	
	// This is where we create the ground
	var ground = entireGround.create(0, game.world.height - 8, 'ground');
	
	// Scale it to fit the width of the game (the original sprite is 400x32 in size)
	ground.scale.setTo(2000, 1880);
	
	// This stops it from falling away when you jump on it
	ground.body.immovable = true;
	
	// These load in the boxes and ship.
    box1=game.add.sprite(600, 1650, 'box1');
	game.physics.arcade.enable(box1);
	box1.body.immovable = true;
	other1 =game.add.sprite(game.world.randomX, 1770, 'box1');
	game.physics.arcade.enable(other1);
	other1.body.immovable = true;
	other2=game.add.sprite(game.world.randomX-64, 1770, 'box1');
	game.physics.arcade.enable(other2);
	other2.body.immovable = true;
	other3=game.add.sprite(game.world.randomX-127, 1770, 'box1');
	game.physics.arcade.enable(other3);
	other3.body.immovable = true;
	other4=game.add.sprite(game.world.randomX-500, 1770, 'box1');
	game.physics.arcade.enable(other4);
	other4.body.immovable = true;
	
	box2=game.add.sprite(800, 1779, 'box2');
	game.physics.arcade.enable(box2);
	box2.body.immovable = true;
	box3=game.add.sprite(400, 1770, 'box3');
	game.physics.arcade.enable(box3);
	box3.body.immovable = true;
	
		

	ship=game.add.sprite(0, 1700,'boat');
	
    game.physics.arcade.enable(ship);
	ship.body.gravity.y=400;
	ship.body.collideWorldBounds = true;
   

    cursors = game.input.keyboard.createCursorKeys();
	// this will allow the camera to follow the player
	game.camera.follow(ship, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

}

function resetSprite(sprite) {

    sprite.x = game.world.bounds.right;

}

function update() {
	
	
	var hitGround = game.physics.arcade.collide(ship, entireGround);
	var hitBox1=game.physics.arcade.collide(ship, box1);
	var hitBox2=game.physics.arcade.collide(ship, box2);
	var hitBox3=game.physics.arcade.collide(ship, box3);
	var hitBox4=game.physics.arcade.collide(ship, other1);
	var hitBox5=game.physics.arcade.collide(ship, other2);
	var hitBox6=game.physics.arcade.collide(ship, other3);
	var hitBox7=game.physics.arcade.collide(ship, other4);
	
    ship.body.velocity.x = 0;

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
	
	// Allow the player to jump if they are touching the ground.
	if (cursors.up.isDown && ship.body.touching.down && hitGround){
		ship.body.velocity.y=-350;
	}
	if (cursors.up.isDown && ship.body.touching.down && hitBox1){
		ship.body.velocity.y=-350;
	}
	if (cursors.up.isDown && ship.body.touching.down && hitBox2){
		ship.body.velocity.y=-350;
	}
	if (cursors.up.isDown && ship.body.touching.down && hitBox3){
		ship.body.velocity.y=-350;
	}
		if (cursors.up.isDown && ship.body.touching.down && hitBox4){
		ship.body.velocity.y=-350;
	}
	if (cursors.up.isDown && ship.body.touching.down && hitBox5){
		ship.body.velocity.y=-350;
	}
	if (cursors.up.isDown && ship.body.touching.down && hitBox6){
		ship.body.velocity.y=-350;
	}
	if (cursors.up.isDown && ship.body.touching.down && hitBox7){
		ship.body.velocity.y=-350;
	}

 

 

}
