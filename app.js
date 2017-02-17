var cardvalueoneortwo = [0,0,0,0]
	//line 3 sets the number of iterations of the randomizer, aka how many cards need to be given values.

function randomize() {
	// body...

for (var i = 0; i < cardvalueoneortwo.length; i++) {
	var one = 0;
	var two = 0;
	//line 6 creates and assigns the random values to the cards.
	cardvalueoneortwo[i] = Math.floor(Math.random()*2)+1
	//this stores the values of the cards and tallies them, to prevent them from derping.
	var storage = cardvalueoneortwo[i];
		if(storage === 1 && one < 2 ){
	 		one ++;
		}else if(storage === 2 && two < 2 ){
			two ++;
		}	else if (cardvalueoneortwo[i] === 2) {
			cards[i] = 1;
		}else if (cardvalueoneortwo[i] === 1) {
			cards[i] = 2;
		}else{
			console.log("error with card generation");
		}
		console.log(cardvalueoneortwo[0] + " " + cardvalueoneortwo[1] + " " + cardvalueoneortwo[2] + " " + cardvalueoneortwo[3]);
}
}