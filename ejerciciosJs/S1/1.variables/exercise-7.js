console.log('Exercise S1 - 1.7');

let globalBasePrice = 10000;
const car1 = { name: 'BMW m&m', basePrice: 50000, finalPrice: 60000 };
const car2 = { name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000 };

globalBasePrice = 25000;
console.log(globalBasePrice);

car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;

console.log(`Nuevo precio final Car 1: ${car1.finalPrice}€`);
console.log(`Nuevo precio final Coche 2: ${car2.finalPrice}€`);