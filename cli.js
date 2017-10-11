var ClozeCard = require('./ClozeCard');
var BasicCard = require('./BasicCard');


var firstCard = new BasicCard("Who was the first president?","George Washington");

var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.",
 "George Washington");


//test constructors

console.log(firstCard.front); 
console.log(firstCard.back);

console.log(firstPresidentCloze.cloze); 
console.log(firstPresidentCloze.partial);
console.log(firstPresidentCloze.text);