//write a program to get all the even numbers from an array

let ages = [21,22,23,24,25,26,27];
for (let index = 0; index < ages.length; index++) {
    if (ages[index]%2==0) {
        console.log(ages[index]);
    }
}