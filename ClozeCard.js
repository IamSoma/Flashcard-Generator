var BasicCard = require('./BasicCard');

var firstCard = new BasicCard("Who was the first president?","George Washington");

console.log(firstCard.makeCard());



function ClozeCard(text, cloze){
	this.text = text;
	this.cloze = cloze;
}


module.exports = ClozeCard