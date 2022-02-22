const travelKm = parseInt(prompt('Quanti km vuoi percorrere?'));
console.log(travelKm);
const userAge = parseInt(prompt('Quanti anni hai?'));
console.log(userAge);
let ticketPrice = travelKm*0.21;
console.log(ticketPrice);

if (userAge < 18){
	ticketPrice = ticketPrice - ( ticketPrice *20 / 100);
	console.log(ticketPrice);
} else if (userAge > 65){
	ticketPrice = ticketPrice - ( ticketPrice *40 / 100);
	console.log(ticketPrice);
} else {
	console.log('l\'utente non ha diritto ad uno sconto');
}

