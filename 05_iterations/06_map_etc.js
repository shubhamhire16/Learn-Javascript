let languages = ["python", "cpp", "javascript","swift","java"]

let values = languages.forEach((item)=>{
    return item;
})

// console.log(values); //this returns undefined. This tells us that we can perform some operations on items in an array but it will always return undefined

// ---------------------------------------------------------------------

let rollNums = [1,2,3,4,5,6,7,8,9]
let topFour = rollNums.filter((item)=>item>4)
//there is a difference between above line of code and 
// let topFour = rollNums.filter((item)=>{
//     item>4;
// })
// because this will retuen nothing as we have started a scope now
// FIX - always use return inside scope for eg. 
// return item > 4;

console.log(topFour);


