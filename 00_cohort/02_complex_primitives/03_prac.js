//write a program that prints all the male people's first name given a complex object.

//-------Using array approach----------
// let firstName = ["Shubham", "Prachi", "Chris"]
// let lastName = ["Hire", "Jondhale", "Evans"]
// let gender = ["male", "female", "male"]

// for(let i = 0; i<gender.length; i++){
//     if(gender[i]=="male"){
//         console.log(firstName[i]);
//     }
// }
//-----------------------------------------------

//----------Using Objects-----------------------

let allUsers = [
    {
        firstName:"Shubham",
        lastName:"Hire",
        age:23,
        gender:"male"
    },
    {
        firstName:"Sakshi",
        lastName:"Hire",
        age:18,
        gender:"female"
    },
    {
        firstName:"Prachi",
        lastName:"Hire",
        age:22,
        gender:"female"
    },
    {
        firstName:"Chris",
        lastName:"Evans",
        age:17,
        gender:"male"
    },
]

for(let i = 0; i<allUsers.length; i++){
    if(allUsers[i]["age"]>=18){
        console.log(`${allUsers[i]["firstName"]} ${allUsers[i]["lastName"]}`);
    }
}
