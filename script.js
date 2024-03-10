let display = document.getElementById('display');
let historyList = document.getElementById('history-list');

let expression = '';

function appendToDisplay(value) {
    expression += value;
    display.innerText = expression;
}

function clearDisplay() {
    expression = '';
    display.innerText = '0';
}

function calculate() {
    let result;
    try {
        result = eval(expression);
        if (isNaN(result) || !isFinite(result)) {
            throw new Error('Expressao invalida');
        }
        display.innerText = result;
        saveToHistory(expression + ' = ' + result);
    } catch (error) {
        display.innerText = 'Limpe a calculadora para prossguir';
    }
    expression = '';
}

function saveToHistory(expression) {
    let listItem = document.createElement('li');
    listItem.innerText = expression;
    historyList.appendChild(listItem);
}
