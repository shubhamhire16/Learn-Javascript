//mostly used on arrays, for each function takes a callback function as a parameter

let languages = ["python", "cpp", "javascript","swift","java"]

languages.forEach( function(item){    //a callback function doesn't have a name. We can also use arrow function for the same 
    // console.log(item);
})


function printMe(item){
    console.log(item);
}

// languages.forEach(printMe) //this is one way of using forEach where we give reference of a function as a parameter 

languages.forEach((item, index, arr)=>{
    // console.log(item,index,arr);
})


// ------------------------IMP-------------------------
//Getting value of objects from array using for each

let games = [
    {gameName:"Cricket",
    GOAT:"Virat"
    },
    {gameName:"Football",
    GOAT:"Cristiano"
    },
    {gameName:"Snooker",
    GOAT:"Ronnie"
    },
]

games.forEach((item)=>{
    console.log(`${item.gameName} has ${item.GOAT}`);
})