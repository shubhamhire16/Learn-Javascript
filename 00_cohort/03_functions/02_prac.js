function sum(a,b,fntoCall){
    let result = a+b;
    fntoCall(result);
}
function displayResult(data) {
    console.log(`Sum is ${data}`);
}
let ans = sum(1,2,displayResult)
