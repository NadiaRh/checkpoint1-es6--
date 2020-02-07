var pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
];

function getAge(pet) {
    return new Date().getFullYear() - pet.bornOn;
}
var petsWithAge = pets.map(function(pet) {
        return pet.age = getAge(pet)
    })
    /*
    var petsWithAge = [];
    for (var i = 0; i < pets.length; i++) {
        var pet = pets[i];
        pet.age = getAge(pet);

        petsWithAge.push(pet);
    }*/
console.log(petsWithAge);

var dogs = pets.filter(function(pet) {
        return pet.type === 'dog'
    })
    /*var dogs = [];
    for (var i = 0; i < pets.length; i++) {
        var pet = pets[i];
        if (pet.type === "dog") {
            dogs.push(pet);
        }
    }*/
console.log(dogs);

const Jasper = pets.find((pet) => pet.name === 'Jasper')


/*var jasper;
for (var i = 0; i < pets.length; i++) {
    var pet = pets[i];
    if (pet.name === "Jasper") {
        jasper = pet;
    }
}*/

console.log("Jasper is " + Jasper.age + " years old");