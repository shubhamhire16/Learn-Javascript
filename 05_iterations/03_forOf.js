//For OF Loop

let arr = [34,56,34,23,5]

// for(let i = 0; i < arr.length; i++){
//     arr[i] = arr[i]+5;
//     console.log(arr[i]);
// }

for (let value of arr) {
    value = value + 5;
    // console.log(value);
}

const greeting = "Hello World"

for (let word of greeting) {
    word = word;
    // console.log(`Each word is: ${word}`);
}

// ---------------------------------------------------

//Maps

const map = new Map();
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(`${key} :- ${value}`);
}

// ---------------------------------------------------

// for of loop on Objects

let games = {
    "GTA":"Rockstar",
    "Assasins Creed":"Ubisoft",
    "Mission Impossible":"Gameloft",
}

for (const [key,value] of games) {
    // console.log(key+" :- "+value);   // TypeError: games is not iterable by using for of loop
}

// ---------------------------------------------------
