const promiseOne = new Promise(function (resolve, reject) {
  //Do an asyncs task
  //DB calls, cryptographt, network calls
  setTimeout(function () {
    console.log("Async task completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise Consumed");
});

//all of the above code can be written without creating a variable for promise object

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task two completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("promise two consumed");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ userName: "Shubham", password: "12345", address: "nashik" });
  }, 1000);
});

promiseThree.then(function (data) {
  console.log(data);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("------------------------------------------");
    let error = false;
    if (!error) {
      resolve({ promiseNumber: "4", time: "11:50" });
    } else {
      reject("Error occured!");
    }
  }, 1000);
});

promiseFour
  .then(function (user) {
    console.log(user);
    return user.promiseNumber;
  })
  .then(function (promiseNumber) {
    console.log(promiseNumber);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("Promise is either resolved or rejected"));


const promiseFive = new Promise((resolve, reject)=>{
  setTimeout(function () {
    console.log("------------------------------------------");
    let error = true;
    if (!error) {
      resolve({ promiseNumber: "5", time: "12:50" });
    } else {
      reject("Error occured!");
    }
  }, 1000);
})

async function consumeFive(){
  try {
    let response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumeFive()


// async function getUser(){
//   try {
//     let response = await fetch('https://api.github.com/users/shubhamhire16')
//     const data = await response.json();
//     console.log(data.bio);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

// getUser()

fetch('https://api.github.com/users/shubhamhire16')
.then((response)=>{
  const data = response.json()
  return data;
}).then((data)=>{
  console.log(data.bio);
})
.catch((error)=>{
  console.log("There is an error");
})