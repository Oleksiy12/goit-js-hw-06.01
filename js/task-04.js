let counterValue = 0;

const value = document.getElementById("value");

const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');

decrBtn.addEventListener("click", callDecr);
incrBtn.addEventListener("click", callIncr);

function callDecr() {
    counterValue-=1;
    value.textContent = counterValue;
}

function callIncr() {
    counterValue+=1;
    value.textContent = counterValue;
}