# Project One - BMI Calculator

## Solution Code

```javascript
const form = document.querySelector("form");

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    let result = document.querySelector('#results');

    if(height<=0 || height === '' || isNaN(height)){
        result.innerHTML = "Please enter a valid height"
    }
    else if(weight<=0 || weight === '' || isNaN(weight)){
        result.innerHTML = "Please enter a valid weight"
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed (2);
        //show the result
        result.innerHTML = `<span>${bmi}</span>`;
    }
})

```

### This is a javascript code solution for the BMI Calculator project. Run the HTML file in your local environment to see the results.  

