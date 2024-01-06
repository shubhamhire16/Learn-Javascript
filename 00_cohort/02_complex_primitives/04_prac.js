//Write a program that reverses all the elements of an array

let arr = [1,2,3,4,5,6];
let length = arr.length;
for(let i = 0; i<length/2; i++){
    let temp = arr[i];
    arr[i] = arr[length-1-i]
    arr[length-1-i] = temp;
}
console.log(arr);

