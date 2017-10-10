function BasicCard(front,back){
	this.front = front;
	this.back = back;
}

var firstCard =  new BasicCard("question","answer");

console.log(firstCard.front,firstCard.back);









module.exports = BasicCard;