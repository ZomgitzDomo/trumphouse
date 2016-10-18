/* 
 * app.js, code for Trumphouse game.
 */



var game = ( function() {
	var trump ={}; //object

	var bricks = []; //arrays

	var arena = {}; // object, game canvas

	return {

		trump: trump,
		bricks: bricks,
		arena: arena

	};

}) (); //then () cuasees this function to execute instantly

console.log('in app.js');