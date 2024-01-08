let languages = ["python", "cpp", "javascript","swift","java"]

let values = languages.forEach((item)=>{
    return item;
})

// console.log(values); //this returns undefined. This tells us that we can perform some operations on items in an array but it will always return undefined

// ------------------------------filter---------------------------------------

let rollNums = [1,2,3,4,5,6,7,8,9]
let topFour = rollNums.filter((item)=>item<4)
//there is a difference between above line of code and 
// let topFour = rollNums.filter((item)=>{
//     item < 4;
// })
// because this will retuen nothing as we have started a scope now
// FIX - always use return inside scope for eg. 
// return item < 4;

// console.log(topFour);



// --------------------------------with for each-------------------------------------


let topFive = []
rollNums.forEach((num)=>{
    if(num<=5){
        topFive.push(num)
    }
})

// console.log(topFive);


// ---------------------------------------------------------------------

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
let userBooks = books.filter((bk)=> bk.genre==="History" )

userBooks = books.filter((bk)=> {
    return bk.publish>=1995 && bk.genre==="Science"
})

console.log(userBooks);




