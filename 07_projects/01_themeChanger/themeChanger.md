# Project One - Theme Changer

## Solution Code

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach((button)=>{
    // console.log(button);
    button.addEventListener('click',(e)=>{
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
    })
})

```

### This is a javascript code solution for the theme changer project. Run the HTML file in your local environment to see the results.  

