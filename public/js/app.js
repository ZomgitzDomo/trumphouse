/* 
 * app.js, code for Trumphouse game.
 */



var game = ( function() {

	var animate = null;

	var trump = {}; //object

	var bricks = []; //arrays

	var arena = {}; // object, game canvas

	var whiteHouse = {}; //win zone

	function initModel() {
		console.log('in initModel');

		//init trump
		trump.dom = document.getElementById('trump');
		trump.name = trump.dom.id;

		trump.dx - 1;
		trump.dy = 1;

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

	};

	

	//make a local reference to the animate library.
	

	function initView() {
		console.log('in initView');

		if ( window.animate ) {

			animate = window.animate;
		}
		else {

			console.error('animate library not present. game cannot run');

		}

	};


	//main gameloop
	function gameLoop() {
		//console.log('in gameLoop');

		//console.log('game.animate.move:' + game.animate.move);
		game.animate.move( trump );

		if ( checkForWin() === true) {

			stop();

			alert('trump has won the white house');
		}

		

		if ( game.animate.checkForCollision( trump, arena ) === true ) {

			game.animate.bounce( trump );
		}

		for ( var i = 0; i < bricks.length; i++) {

			
			if( game.animate.checkForCollision(trump, bricks[i] ) === true ) {

				game.animate.destroy( bricks[i] );

				game.animate.bounce( trump );
			}
		}
	};

	function checkForWin () {

		console.log('in checkForWin()');

		return false;

	};


	//function to check if keys are pressed
	function checkKey(e) {
		e = e || window.event;

		if(e.keyCode == '38'){
			console.log('up arrow pressed');
		}
		else if(e.keyCode == '40'){
			console.log('down arrow pressed');
		}
	};

	var animateId = null;

	//init the controller
	function initController() {
		console.log('in initController');

		

		document.onkeydown = checkKey;

		var startButton = document.getElementById( 'start-game' );

		startButton.addEventListener( 'click', function( e ) {

			console.log('clicked start button');
			start();

			e.preventDefault();

			e.stopPropagation();
		}, false );

		var stopButton = document.getElementById( 'stop-game' );

		stopButton.addEventListener( 'click', function( e ) {

			console.log('clicked stop button');

			stop();

			e.preventDefault();

			e.stopPropagation();

		}, false );

	};

	function start() {
		if ( animateId == null) {
			animateId = setInterval(
				function() {

					gameLoop();

				}, 100

			);

			console.log('starting game');
		}
	};

	function stop() {

		clearInterval(animateId);

		animateId = null;
		console.log('stop');
	};

	function isStarted() {
		if( animateId !==null ) {
			return true;
		}
		else {
			return false;
		}
	};

	function init() {
		console.log('in Init');
		initModel();
		initView();
		initController();
		//start();

	};

	init();

	return {

		animate: animate,
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