const decrement = document.getElementById('decrement');
const increament = document.getElementById('increament');
const count = document.getElementById('count');
const reset = document.getElementById('reset');

let currentValue = 0;

decrement.addEventListener('click', () => {
    currentValue-= 1;
    count.textContent = currentValue;
})

increament.addEventListener('click', () => {
    currentValue+= 1;
    count.textContent = currentValue;
})

reset.addEventListener('click', () => {
    currentValue = 0;
    count.textContent = currentValue;
})



