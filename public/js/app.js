/* 
 * app.js, code for Trumphouse game.
 */



var game = ( function() {
	var trump ={}; //object

	var bricks = []; //arrays

	var arena = {}; // object, game canvas

	var whiteHouse = {}; //win zone

	function initModel() {
		console.log('in initModel');

		//init trump
		trump.dom = document.getElementById('trump');
		trump.name = trump.dom.id;

		arena.dom = document.getElementById('game-canvas');
		arena.name= arena.dom.id;

		//init bricks
		var list = document.getElementsByClassName('bricks');

		for (var i = 0; i < list.length; i++) {

			bricks.push(

				{
					dom: list[i],

					name: list[i].id
				}

			);
			
		}//end of loop

	}

	function initView() {
		console.log('in initView');

	}


	//main gameloop
	function gameLoop() {
		console.log('in gameLoop');
	}

	//function to check if keys are pressed
	function checkKey(e) {
		e = e || window.event;

		if(e.keyCode == '38'){
			console.log('up arrow pressed');
		}
		else if(e.keyCode == '40'){
			console.log('down arrow pressed');
		}
	}

	var animateId = null;

	//init the controller
	function initController() {
		console.log('in initController');

		

		document.onkeydown = checkKey;

	}

	function start() {
		if ( animateId == null) {
			animateId = setInterval(
				function() {

					gameLoop();

				}, 100

			);

			console.log('starting game');
		}
	}

	function stop() {

		clearInterval(animateId);

		animateId = null;
		console.log('stop');
	}

	function isStarted() {
		if( animateId !==null ) {
			return true;
		}
		else {
			return false;
		}
	}

	function init() {
		console.log('in Init');
		initModel();
		initView();
		initController();
		start();

	}

	return {

		trump: trump,
		bricks: bricks,
		arena: arena,
		whiteHouse: whiteHouse,
		init: init,
		start: start,
		stop: stop

	};

}) (); //then () cuasees this function to execute instantly

console.log('in app.js');