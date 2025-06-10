// Creare un array di oggetti. Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

const bikes = [
    {
        name: "SuperTurbo",
        weight: 8 // kg
    },
    {
        name: "RoadRunner",
        weight: 7
    },
    {
        name: "MountainKing",
        weight: 9.7
    },
    {
        name: "MiniBiky",
        weight: 5.8
    },
    {
        name: "ElectroSpeed",
        weight: 12
    }

];

console.log(bikes);
console.log(bikes[0].weight);

// per sapere quale bici pesa di meno devo avere un valore di partenza da confrontare con tutti gli altri valori
// inizializzo una variabile con il primo oggetto dell'array
let lightestBike = bikes[0];
// faccio un ciclo for per confrontare il peso di ogni bici
for (let i = 1; i < bikes.length; i++) {
    const thisBike = bikes[i];
    if (thisBike.weight < lightestBike.weight) {
        lightestBike = thisBike;

    }
};
// stampo la bici con il peso minore e il valore corrispondente
console.log(`La bici con il peso minore è la ${lightestBike.name}, con un peso di ${lightestBike.weight} kg.`);