// console.log(Math.floor(Math.random()*16));

let generateHex = function(){
    let hex = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}

// console.log(generateHex());

let changeColorInterval;
const stop = document.querySelector('#stop');
const start = document.querySelector('#start');


const changeBackground = function(){
    const colorCode = generateHex();
    document.body.style.backgroundColor = colorCode;
}

start.addEventListener('click', function(){
    changeColorInterval = setInterval(changeBackground,1000)
})

stop.addEventListener('click', function(){
    clearInterval(changeColorInterval);
})



