//Reduce

let arr = [1,2,3,4,5]

// let sum = 0;
// let addition = arr.reduce((total,num)=>{
//     return total+num
// },sum)

// same can be written as

let addition = arr.reduce((acc,currVal)=>acc+currVal,0)


// console.log(addition);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

let priceToPay = shoppingCart.reduce((acc, item)=>{
    return acc + item.price;
},0)

console.log(priceToPay);