
let travelKm = parseInt(prompt('Quanti km vuoi percorrere?'));
console.log(travelKm);
if ((isNaN(travelKm) || (travelKm > 1000) || (travelKm < 10))){
	console.log('Non hai inserito un valore valido, ne creo uno casuale');
	travelKm = Math.floor(Math.random()*1000) + 10;
	console.log('il numero di km generato casualmente è ' + travelKm)
} else {
	console.log('l\'utente ha inserito un numero valido');
}

document.getElementById("travel-km").innerHTML += + travelKm;


let userAge = parseInt(prompt('Quanti anni hai?'));
console.log(userAge);
if ((isNaN(userAge) || (userAge > 110) || (userAge < 14))){
	console.log('Non hai inserito un valore valido, ne creo uno casuale');
	userAge = parseInt(Math.floor(Math.random()*110));
	console.log('l\'età casuale è ' + userAge)
} else {
	console.log('l\'utente ha inserito un numero valido');
}

document.getElementById("user-age").innerHTML += + userAge;


let ticketPrice = travelKm*0.21;
console.log('questo è il prezzo del biglietto:'+ ticketPrice);


if (userAge < 18){
	ticketPrice += - ( ticketPrice *20 / 100);
	console.log(`l\'utente è minorenne,
pertanto ha diritto ad uno sconto del 20%,
questo è il prezzo del biglietto scontato: ${ticketPrice}`);
} else if (userAge > 65){
	ticketPrice += - ( ticketPrice *40 / 100);
	console.log(`l\'utente ha più di 65 anni,
pertanto ha diritto ad uno sconto del 40%,
questo è il prezzo del biglietto scontato: ${ticketPrice}`);
} else {
	console.log('l\'utente non ha diritto ad uno sconto');
}


document.getElementById("ticket-price").innerHTML += ticketPrice.toFixed(2);
console.log(`il prezzo finale è: ${ticketPrice},
in quanto l\'utente vuole percorrere ${travelKm}km e la sua età è: ${userAge} anni`);