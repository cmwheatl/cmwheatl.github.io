var animal = {}

animal.species = "tiger";
animal["name"] = "Joe";
animal.noises = [];

console.log(animal);

var noises = [];
    noises[0] = "Meow";
    noises.push("Rawrr");
    noises.unshift("roar");
    noises[noises.length] = "bahh";

console.log(noises.length);
console.log(noises.length-1);
console.log(noises); 

animal.noises = [(noises)];
    noises.push("moooo");

console.log(animal);

var animals = [];
    animals.push(animal);

console.log(animals);

var duck = {
      species: 'duck', 
      name: 'Jerome', 
      noises: ['quack', 'honk', 'sneeze', 'woosh'] 
}

    animals.push(duck);
    
    console.log(animals);
    console.log(animals.length);

// i chose an array because it is the best data type to store lists of data

var bat = {
    species: "bat",
    name: "Bill",
    noises: ["squawk","hiss"]
}

var lion = {
    species: "lion",
    name: "Leo",
    noises: ["rawr", "purrr"]
}

animals.push(lion);
animals.push(bat);

var friends = animals[randomAnimal(animals)].name;

function randomAnimal(animals) {
    return Math.floor(Math.random() * (animals.length + 0)) + 0 ;
}

lion.friend=friends;

console.log(lion.friend);


//trying to take an object value and return the entire object


function search(animalName) {
    for( var i = 0; i < animals.length; i++){
        if(animalName.toUpperCase() === animals[i].name.toUpperCase()){
            return animals[i];
        }
    }
    return null;
}

function edit(animalName, object) {
    for( var i = 0; i < animals.length; i++){
        if(animalName === animals[i].name){
            animals[i]=object;
        }
}
}

function remove(animalName1) {
    for( var i = 0; i < animals.length; i++){
        if(animalName1 === animals[i].name){
            animals.splice(i, 1);
        }
}
}

function create(object) {
     var match = search(object.name);
     if (!match)
     animals.push(object);
}