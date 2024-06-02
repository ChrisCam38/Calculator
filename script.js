const buttonsEl = document.querySelectorAll('Button');
console.log(buttonsEl);
const inputFieldEl = document.getElementById('result');

for(const button of buttonsEl){
    button.addEventListener('click', ()=>{
        const buttonValue = button.textContent;

        if (buttonValue === 'C'){
            clearResult();
        } else if (buttonValue === '='){
            calculatedResult();
        } else{
            appedValue(buttonValue);
        }
    });
    
}

function clearResult(){
    inputFieldEl.value = '';
}

function calculatedResult(){
    inputFieldEl.value = eval(inputFieldEl.value);
}

function appedValue(buttonValue){
    inputFieldEl.value += buttonValue;
}

