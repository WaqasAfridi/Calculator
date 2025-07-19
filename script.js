let screenOutput = document.querySelector('.output');

function buttonClicked (pressedButton){

    if (screenOutput.innerText == 0 || screenOutput.innerText == '+' || screenOutput.innerText == '-' || screenOutput.innerText == 'x' || screenOutput.innerText == '/' || screenOutput.innerText == '='){
        screenOutput.innerText = '';
    } else if (screenOutput.innerText == '*(1/100)'){
        screenOutput.innerText = 1/100;
    }

    screenOutput.innerText += pressedButton;
}

function clearScreen(){
        screenOutput.innerText = '0';
}

function result(){
    screenOutput.innerText =  eval(screenOutput.innerText);
}
