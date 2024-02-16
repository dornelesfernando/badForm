const input = document.querySelector("#rangeCel");
const valor = document.querySelector(".valor")

input.addEventListener("input", function (e) {
    function adjust(i){
        if(i.length < 11){
            return i.padStart(11, 0);
        }else{
            return i
        }
    }
    
    const range = adjust(input.value);
    const msg = `(${range[0]}${range[1]}) ${range[2]} ${range[3]}${range[4]}${range[5]}${range[6]}-${range[7]}${range[8]}${range[9]}${range[10]}`

    valor.innerHTML = msg;
});

const helpHidden = document.querySelector(".help_hidden")
const helpButton = document.querySelector('#help')

let buttonState = false;
helpButton.addEventListener('click', function (e){
    buttonState = !buttonState;
    if (buttonState) {
        helpHidden.style.display = "inline";
    }else{
        helpHidden.style.display = "none";
    }
});

const b1 = document.querySelector('#ddd0');
const b2 = document.querySelector('#ddd1');
const b3 = document.querySelector('#number0');
const b4 = document.querySelector('#number1');
const b5 = document.querySelector('#number2');
const b6 = document.querySelector('#number3');
const b7 = document.querySelector('#number4');
const b8 = document.querySelector('#number5');
const b9 = document.querySelector('#number6');
const b10 = document.querySelector('#number7');
const b11 = document.querySelector('#number8');

function addNumber(){
    const msg = `(${b1.value}${b2.value}) ${b3.value} ${b4.value}${b5.value}${b6.value}${b7.value}-${b8.value}${b9.value}${b10.value}${b11.value}`
    valor.innerHTML = msg;
}

b1.addEventListener('input', () => addNumber());
b2.addEventListener('input', () => addNumber());
b3.addEventListener('input', () => addNumber());
b4.addEventListener('input', () => addNumber());
b5.addEventListener('input', () => addNumber());
b6.addEventListener('input', () => addNumber());
b7.addEventListener('input', () => addNumber());
b8.addEventListener('input', () => addNumber());
b9.addEventListener('input', () => addNumber());
b10.addEventListener('input', () => addNumber());
b11.addEventListener('input', () => addNumber());