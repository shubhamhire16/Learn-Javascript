//write a progrram to find max number from an array

let arr = [11,8,9,2,3,10]
let maxNumber = arr[0];

for(let i = 1; i < arr.length; i++){
    if(maxNumber<arr[i]){
        maxNumber = arr[i];
    }
}
console.log(maxNumber);