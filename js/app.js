// Informazioni utente

const userKm = parseFloat(prompt('Quanti km vuoi percorrere?'))
const age = parseInt(prompt('Quanti anni hai?'));
// console.log(userKm)
// console.log(age)

// Calcolo prezzo base

const ticketPrice = (userKm * 0.21)
// console.log(ticketPrice)

// Sconti in base all'età

let discount = 0;
if (age < 18) {
  discount = 0.2; // Sconto del 20%
} else if (age >= 65) {
  discount = 0.4; // Sconto del 40%
}
// console.log(age, discount)

// Prezzo finale con lo sconto

const finalPrice = ticketPrice - (ticketPrice * discount);
// console.log(finalPrice)

// Prezzo con formato a due cifre decimali

const formattedPrice = finalPrice.toFixed(2)
// console.log(formattedPrice)

alert(`Il prezzo del tuo biglietto è di ${formattedPrice} \u20ac`)
