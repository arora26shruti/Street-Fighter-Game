//Indexes of Sprite Sheet(x-ROWS , y - COLUMNS) 
	var mapping = {
		arugyen: {y: 0, x: [0,1,2,3]},
		walk: {y: 1, x: [0,1,2,3]},
		punch:{y:2, x:[0,1,2]},
		kick:{y:6, x:[0,1,2,3,4]},
		roundkick: {y: 7, x: [0,1,2,3,4]},
		jumpingUp:{y: 8, x: [0,1,2,3,4,5,6]},
		sit:{y:9, x:[0]},
		newFeature : {y :0, x : [0,1,2,3,4,5,6]}
	}

	var action_sprite = {
		arugyen:   "steetFighter_sprite.png",
		walk:      "steetFighter_sprite.png",
		punch:     "steetFighter_sprite.png",
		kick:      "steetFighter_sprite.png",
		roundkick: "steetFighter_sprite.png",
		jumpingUp: "steetFighter_sprite.png",
		sit:       "steetFighter_sprite.png",
		newFeature : "ken-tatsumaki-senpuu-kyaku.png"
	}

	// 


// OBJECT player1 ; x(left)-70, y(top)-140
	var player1 = {
		x: 70, y:140, step:0, action: "walk", health:100
	}

// OBJECT player2 ;  x(left)-500, y(top)-140
	var player2 = {
		x: 500, y:140, step:0, action: "walk", health:100
	}
//POSITION 
	function drawPlayers(){
		document.getElementById('character1').style.top = player1.y;
		document.getElementById('character1').style.left = player1.x;
		document.getElementById('character2').style.top = player2.y;
		document.getElementById('character2').style.left = player2.x;


       document.getElementById('character1').style.background = 'url("'+action_sprite[player1.action]+'")'
       document.getElementById('character2').style.background = 'url("'+action_sprite[player2.action]+'")'

		//FOR CSS- Converting Array Indexes into exact dimensions of the Character Object
		// Change Position of Background Image - 70 width and 80 height of the Object
		document.getElementById('character1').style.backgroundPosition = "-"+(player1.step*70)+"px -"+(mapping[player1.action].y*80)+"px";
		player1.step++;  
		if(player1.step >= mapping[player1.action].x.length) { 
			player1.step = 0; 
			player1.action = 'walk'; 
		}
     //Player 2 Standing and Moving Continuously- Only with this function
		document.getElementById('character2').style.backgroundPosition = "-"+(player2.step*70)+"px -"+(mapping[player2.action].y*80)+"px";
		player2.step++;  
		if(player2.step >= mapping[player2.action].x.length) { 
			player2.step = 0; 
			player2.action = 'walk'; 
		}
	}


	
	function detectCollision(){
		if(Math.abs(player1.x-player2.x) < 40){
			if(player1.action == 'roundkick'|| player1.action == 'punch'|| player1.action == 'kick' || player1.action == 'arugyen'){
				player2.health -=10;
				updateHealth();
				detectNoHealth();
			}
		}

		if(Math.abs(player1.x-player2.x) < 40){
			if(player2.action == 'roundkick'|| player2.action == 'punch'|| player2.action == 'kick' || player2.action == 'arugyen'){
				player1.health -=10;
				updateHealth();
				detectNoHealth();
			}
		}
	}

	//Game Over
	function detectNoHealth(){
		if (player1.health == 0){
			alert('Player2 won.Game Over');
		}
		else if(player2.health ==0){
			alert('Player1 won.Game Over');
	    }
}


	function updateHealth(){
		document.getElementById('score1').style.width = player1.health*1.5;
		document.getElementById('score2').style.width = player2.health*1.5;
	}

	function gameLoop(){
		drawPlayers();
		detectCollision();
	}
	setInterval(gameLoop, 80);

	document.onkeydown = function(e) {
		if(e.keyCode == 90){         //Z
			player1.x-=10;
		} 
		else if(e.keyCode == 88){    //X
		player1.x+=10;
		} 
		else if(e.keyCode == 87){
		player1.action = 'roundkick' //W
		} 
		else if(e.keyCode == 83){
		player1.action = 'arugyen'   //S
			fire.isActive = true;
			fire.x = player1.x;
			fire.y = player1.y; 
		}
		else if(e.keyCode == 32){
		player1.action = 'jumpingUp' //SPACEBAR
		}
		else if(e.keyCode == 67){    //C
		player1.action = 'sit'
		}
		else if(e.keyCode == 65){   //A
		player1.action = 'punch'
		}
		else if(e.keyCode == 68){   //D
		player1.action = 'kick'  
		}
		else if(e.keyCode == 69){   //E
		//player1.action = 'fire'  
		
		}
		// -------------------------
			if(e.keyCode == 37){      //LEFT
			player2.x-=10;
		} 
		else if(e.keyCode == 39){    //RIGHT
		player2.x+=10;
		} 
		else if(e.keyCode == 85){
		player2.action = 'roundkick' //U
		} 
		else if(e.keyCode == 74){
		player2.action = 'arugyen'   //J 
		}
		else if(e.keyCode == 38){
		player2.action = 'jumpingUp' //UP
		}
		else if(e.keyCode == 40){    //DOWN
		player2.action = 'sit'
		}
		else if(e.keyCode == 72){   //H
		player2.action = 'punch'
		}
		else if(e.keyCode == 75){   //K
		player2.action = 'kick'  
		}
	console.log('you pressed', e.keyCode);
	}



