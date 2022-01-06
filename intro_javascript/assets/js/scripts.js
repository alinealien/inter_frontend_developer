var currentNUmberWrapper = document.getElementById("currentNUmber");
var currentNUmber = 0;

function increment(){
    currentNUmber = currentNUmber + 1;
    currentNUmberWrapper.innerHTML = currentNUmber;
}

function decrement(){
    currentNUmber = currentNUmber - 1;
    currentNUmberWrapper.innerHTML = currentNUmber;
}