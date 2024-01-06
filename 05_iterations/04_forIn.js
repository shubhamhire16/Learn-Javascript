//For In loop is mostly used for looping over Objects
//For In loop returns keys. To return a value use Object[key]

let games = {
    "GTA":"Rockstar",
    "Assasins Creed":"Ubisoft",
    "Mission Impossible":"Gameloft",
}

for (const key in games) {
    // console.log(`${key} is made by ${games[key]}`);
}

let myGames = ["GTA","Assasins Creed","Mission Impossible"]
for (const key in myGames) {
    // console.log(key); //returns keys that is index number in this case e.g 0 1 2 3 4
    // console.log(myGames[key]); //returns actual values of keys
}

// ---------------------------------------------------

//for in loop on map

const map = new Map();
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "France")

for (const key in map) {
    console.log(key);
}
