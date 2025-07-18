let screenOutput = document.querySelector('.output');

function buttonClicked (pressedButton){

    if (screenOutput.innerText == 0 || screenOutput.innerText == '+' || screenOutput.innerText == '-' || screenOutput.innerText == 'x' || screenOutput.innerText == '/' || screenOutput.innerText == '='){
        screenOutput.innerText = '';
    }

    screenOutput.innerText += pressedButton;
}

function clearScreen(){
        screenOutput.innerText = '0';
}

function result(){
    screenOutput.innerText =  eval(screenOutput.innerText);
}
