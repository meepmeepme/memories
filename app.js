var cards = [0,1,2,3];
var one = 0;
var two = 0;
var stage = 0;
var sade =[0,0];
var cach = ["save","save"];

//On load, this function assigns either the value of 1 or 2 to the 4 squares.
function randomize(arg) {
	for (var i = 0; i < 4; i++) {
		cards[i] = Math.floor(Math.random() * 2) + 1;
		var storage = cards[i];
		if(storage === 1 && one < 2 ){
	 		one ++;
		}else if(storage === 2 && two < 2){
			two ++;
		}	else if (cards[i] === 2) {
			cards[i] = 1;
		}else if (cards[i] === 1) {
			cards[i] = 2;
		}else{
			console.log("eror")
		}
		
	}
	console.log(cards[0] + " " + cards[1] + " " + cards[2] + " " + cards[3]);
}

//this function is called upon when a square is clicked. The parameter is the id number.

function flip(save) {

	//this checks which stage the computer is at, and saves the card which was clicked. it also turns the card green for a moment
	if (stage === 0) {
		stage++;
		sade[0] = cards[save];
		cach[0] = save;
		console.log(sade[0] + " is the value of the card")
		console.log(cards[save] + " is the value of the card, but coming from the original array")
		console.log(cach[0] + " is the id of the card that was chosen")
		if (cach[0] = 1) {
			document.getElementById(save).style.animationName = "red";
		}else{
			document.getElementById(save).style.animationName = "green";
		}
		
		console.log('hey')
		//this saves the second card.

	}else{
		stage = 0;
		sade[1] = cards[save];
		cach[1] = save;
		console.log("ran");
		document.getElementById(save).style.animationName = "red";
		//checks if match is made

		if (sade[0] === sade[1]) {
			console.log("mach!");
			console.log(cach[1] + " " + cach[0]);
			document.getElementById(cach[0]).style.animationName = "fader";
			document.getElementById(cach[1]).style.animationName = "fader";
		}
		//if the match is not made, then the colors change back to tan
		else{
			document.getElementById(cach[0]).style.backgroundColor = "tan";
			document.getElementById(cach[1]).style.backgroundColor = "tan";

		}
		//if match is not made, life goes on
	}

}