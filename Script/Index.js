//decleration of variables
let valueBox = document.querySelector('input')
let caculate = document.querySelector('button')
let answer = document.querySelector('label')


caculate.addEventListener('click',()=>{  //this takes the input and multiplies by 60 
    answer.innerText = ('Result: ' + (eval(`${valueBox.value} * 60`).toFixed(2) +' Seconds'))
})