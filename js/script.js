
let travelKm = parseInt(prompt('Quanti km vuoi percorrere?'));
console.log(travelKm);
if (isNaN(travelKm)){
	console.log('Non hai inserito un numero, ne creo uno casuale');
	travelKm = Math.floor(Math.random()*1000) + 10;
	console.log('il numero di km generato casualmente è ' + travelKm)
} else {
	console.log('l\'utente ha inserito un numero valido');
}


let userAge = parseInt(prompt('Quanti anni hai?'));
console.log(userAge);
if ((isNaN(userAge) || (userAge > 110) || (userAge < 1))){
	console.log('Hai inserito un valore non valido, ne creo uno casuale');
	userAge = parseInt(Math.floor(Math.random()*110));
	console.log('l\'età casuale è ' + userAge)
} else {
	console.log('l\'utente ha inserito un numero valido');
}


let ticketPrice = travelKm*0.21;
console.log('questo è il prezzo del biglietto:'+ ticketPrice);


if (userAge < 18){
	ticketPrice += - ( ticketPrice *20 / 100);
	console.log('questo è il prezzo del biglietto scontato:' + ticketPrice);
} else if (userAge > 65){
	ticketPrice += - ( ticketPrice *40 / 100);
	console.log('questo è il prezzo del biglietto scontato:' + ticketPrice);
} else {
	console.log('l\'utente non ha diritto ad uno sconto');
}


document.getElementById("price").innerHTML += ticketPrice.toFixed(2);
console.log(`il prezzo finale è: ${ticketPrice},
in quanto l\'utente vuole percorrere ${travelKm}km e la sua età è: ${userAge} anni`);