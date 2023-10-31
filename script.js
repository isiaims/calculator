// Variables
const calc = document.querySelector('button.equal');
const display = document.querySelector('div.entered');
const cleanBtn = document.querySelector('.clean');
const operandDiv = document.querySelector('div.operand');
const operandBtns = operandDiv.querySelectorAll('button');
const clearBtn = operandDiv.querySelector('.clear');
const numbersDiv = document.querySelector('div.number');
const numberBtn = numbersDiv.querySelectorAll('button');
let isPlus = false;
let isMinus = false;
let isMultiply = false;
let isDivide = false;
let isRemainder = false;
let isEqual = false;
let isPressed = false;
let num1 = 0;
let num2 = 0;
let result = 0;
let pressed = [];
let g = '0';


// Functions
display.innerText = 0;

function displayKey (e) {
    numberBtn.forEach(btn => {
        if (btn.innerText === e.key) {
            if (e.key === '.') {
                if (pressed.includes('.')) {
                    return;
                } else if (pressed.length === 0) {
                    pressed.push(0, e.key)
                } else pressed.push(e.key)
            } else if (e.key === '_') {
                if (pressed.length === 0) {
                    return;
                } else if (pressed[0] === '-') {
                    pressed.shift();
                } else pressed.unshift('-');
            } else if (e.key !== '0') {
                if ((pressed.length >= 1) && (pressed[0] === 0)) {
                    pressed.push(e.key);
                }
                // if (((pressed[0] === '0') && (pressed.length === 1)) || ((isPressed === true) && (pressed[0] === '0'))) {
                //     pressed.pop();
                //     pressed.push(e.key);
                // } else pressed.push (e.key);
            } else {
                if (pressed.length === 0 && isPressed === false) return;
                pressed.push(e.key);
            }
            g = pressed.join('');
            display.innerText = g;
        }
    })
    // operandBtns.forEach(btn => {
    //     if (btn.getAttribute(`data-key`) === `${e.which}`) {
    //         if ((btn.classList.contains('clear')) || (g === 0)) {
    //             return;
    //         } else if ((isPlus === false) && (isMinus === false) && (isDivide === false) &&
    //             (isMultiply === false) && (isRemainder === false)) {
    //             isPressed = true;
    //             num1 = parseFloat(display.innerText);
    //             pressed.splice(0, pressed.length);
    //             if (btn.classList.contains('plus')) {
    //                 isPlus = true;
    //             } else if (btn.classList.contains('minus')) {
    //                 isMinus = true;
    //             } else if (btn.classList.contains('divide')) {
    //                 isDivide = true;
    //             } else if (btn.classList.contains('times')) {
    //                 isMultiply = true;
    //             } else if (btn.classList.contains('remainder')) {
    //                 isRemainder = true;
    //             } else return;
    //         } else if ((isPlus === true) || (isMinus === true) || (isDivide === true) ||
    //             (isMultiply === true) || (isRemainder === true)) {
    //             isPressed = true;
    //             num2 = parseFloat(display.innerText);
    //             result = calculate(num1, num2);
    //             num1 = result;
    //             if (result === 'ERROR') {
    //                 display.innerText = `ERROR`;
    //             } else if (Number.isInteger(result)) {
    //                 display.innerText = `${result}`;
    //             } else {display.innerText = `${result.toFixed(3)}`};
    //             pressed.splice(0, pressed.length);
    //             if (btn.classList.contains('plus')) {
    //                 isPlus = true;
    //                 isMinus = false;
    //                 isMultiply = false;
    //                 isDivide = false;
    //                 isRemainder = false;
    //             } else if (btn.classList.contains('minus')) {
    //                 isPlus = false;
    //                 isMinus = true;
    //                 isMultiply = false;
    //                 isDivide = false;
    //                 isRemainder = false;
    //             } else if (btn.classList.contains('divide')) {
    //                 isPlus = false;
    //                 isMinus = false;
    //                 isMultiply = false;
    //                 isDivide = true;
    //                 isRemainder = false;
    //             } else if (btn.classList.contains('times')) {
    //                 isPlus = false;
    //                 isMinus = false;
    //                 isMultiply = true;
    //                 isDivide = false;
    //                 isRemainder = false;
    //             } else if (btn.classList.contains('remainder')) {
    //                 isPlus = false;
    //                 isMinus = false;
    //                 isMultiply = false;
    //                 isDivide = false;
    //                 isRemainder = true;
    //             } else {
    //                 isPlus = false;
    //                 isMinus = false;
    //                 isMultiply = false;
    //                 isDivide = false;
    //                 isRemainder = false;
    //             }
    //         }
    //     }  
    // })
}

function displayNum () {
    if (this.innerText === '.') {
        if (pressed.includes('.')) {
            return;
        } else if (pressed.length === 0) {
            pressed.push(0, this.innerText)
        } else pressed.push(this.innerText)
    } else if (this.innerText === '+/-') {
        if (pressed.length === 0) {
            return;
        } else if (pressed[0] === '-') {
            pressed.shift();
        } else pressed.unshift('-');
    } else if (this.innerText !== '0') {
        if ((pressed[0] === 0) || ((isPressed === true) && (pressed[0] === '0'))) {
            pressed.pop();
            pressed.push(this.innerText);
        } else pressed.push (this.innerText);
    } else {
        if (pressed.length === 0 && isPressed === false) return;
        pressed.push(this.innerText);
    }
    g = pressed.join('');
    display.innerText = g;
}

function operate () {
    if ((this.classList.contains('clear')) || (g === 0)) {
        return;
    } else if ((isPlus === false) && (isMinus === false) && (isDivide === false) &&
        (isMultiply === false) && (isRemainder === false)) {
        isPressed = true;
        num1 = parseFloat(display.innerText);
        pressed.splice(0, pressed.length);
        if (this.classList.contains('plus')) {
            isPlus = true;
        } else if (this.classList.contains('minus')) {
            isMinus = true;
        } else if (this.classList.contains('divide')) {
            isDivide = true;
        } else if (this.classList.contains('times')) {
            isMultiply = true;
        } else if (this.classList.contains('remainder')) {
            isRemainder = true;
        } else return;
    } else if ((isPlus === true) || (isMinus === true) || (isDivide === true) ||
        (isMultiply === true) || (isRemainder === true)) {
        isPressed = true;
        num2 = parseFloat(display.innerText);
        result = calculate(num1, num2);
        num1 = result;
        if (result === 'ERROR') {
            display.innerText = `ERROR`;
        } else if (Number.isInteger(result)) {
            display.innerText = `${result}`;
        } else {display.innerText = `${result.toFixed(3)}`};
        pressed.splice(0, pressed.length);
        if (this.classList.contains('plus')) {
            isPlus = true;
            isMinus = false;
            isMultiply = false;
            isDivide = false;
            isRemainder = false;
        } else if (this.classList.contains('minus')) {
            isPlus = false;
            isMinus = true;
            isMultiply = false;
            isDivide = false;
            isRemainder = false;
        } else if (this.classList.contains('divide')) {
            isPlus = false;
            isMinus = false;
            isMultiply = false;
            isDivide = true;
            isRemainder = false;
        } else if (this.classList.contains('times')) {
            isPlus = false;
            isMinus = false;
            isMultiply = true;
            isDivide = false;
            isRemainder = false;
        } else if (this.classList.contains('remainder')) {
            isPlus = false;
            isMinus = false;
            isMultiply = false;
            isDivide = false;
            isRemainder = true;
        } else {
            isPlus = false;
            isMinus = false;
            isMultiply = false;
            isDivide = false;
            isRemainder = false;
        }
    }
}

function calculate (a, b) {
    if (isPlus === true) {
        return a + b;
    } else if (isMinus === true) {
        return a - b;
    } else if (isMultiply === true) {
        return a * b;
    } else if (isDivide === true) {
        if (b !== 0) {
            return a / b
        } else return 'ERROR';
    } else if (isRemainder === true) {
        return a % b;
    }
}



// Event Listeners
calc.addEventListener('click', calculate);
numberBtn.forEach(btn => btn.addEventListener('click', displayNum));
cleanBtn.addEventListener('click', () => {
    if (pressed.length === 0 || display.innerText === '0') {
        return;
    } else if (pressed.length === 1) {
        pressed.pop();
        display.innerText = 0;
    } else if (pressed.length === 2 && pressed[0] === '-') {
        pressed.splice(0, 2);
        display.innerText = 0;
    } else {
        pressed.pop();
        display.innerText = pressed.join('');
    }
})
clearBtn.addEventListener('click', () => {
    pressed.splice(0, pressed.length);
    display.innerText = 0;
    g = 0;
    num1 = 0;
    num2 = 0;
    isPlus = false;
    isMinus = false;
    isMultiply = false;
    isDivide = false;
    isRemainder = false;
    isPressed = false;
})
operandBtns.forEach(btn => btn.addEventListener('click', operate));
window.addEventListener('keyup', displayKey);