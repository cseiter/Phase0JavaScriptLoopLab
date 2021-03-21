// Code your solutions in this file
function writeCards(recipients,event) {
	let writtenCards = [];
	for (let i = 0; i < recipients.length; i++) {
		writtenCards.push(`Thank you, ${recipients[i]}, for the wonderful ${event} gift!`);
	}
	return writtenCards;
}

function countDown(starter) {
	while (starter >= 0) {
	console.log(starter);
	starter -= 1;
	}
}
