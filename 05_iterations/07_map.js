let nums = [1,2,3,4,5,6,7,8,9]

let newNums = nums.map((num)=>{
    return num + 10
})

// -----------------------Chaining---------------------------------

newNums = nums
            .map((num)=>num*10)
            .map((num)=>num+1) //[11, 21, 31, 41, 51, 61, 71, 81, 91]
            .filter((num)=> num>=50) //[ 51, 61, 71, 81, 91 ]

console.log(newNums);


