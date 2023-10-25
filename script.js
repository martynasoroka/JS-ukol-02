const quantity = Number(prompt("Kolik kusu objendavas?"))
let price = 300


if (quantity >= 1000) {
    price = 120
} else if (quantity >=200) {
    price = 150
} else if (quantity >=50) {
    price = 250
} 

let value = quantity*price

document.body.innerHTML += `Celkova cena objednavky to ${value}Kc. Cena za kus: ${price}Kc, pocet kusu: ${quantity}`