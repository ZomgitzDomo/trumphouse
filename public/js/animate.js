var animate = ( function () {

	function init() {

		console.log( 'in animate.init()' );

	};

function move( gameObj ) {
	console.log('moving:' + gameObj.name ); 

};

function checkForCollision ( gameObj1, gameObj2) {

	console.log('checking:' + gameObj1.name + 'with:' + gameObj2.name);

};

function bounce(gameObj) {

	console.log('bouncing:' + gameObj.name);

};

function destroy( gameObj1 ) {
	console.log( 'destroying with:' + gameObj1.name + ' width:' + gameObj2.name);

};

	return {

		init: init,
		move: move,
		checkForCollision: checkForCollision,
		bounce: bounce,
		destroy: destroy

	};

	
}) ();