let expression = '';
let lastAnswer = 0;

const exprEl = document.getElementById('expression');
const resultEl = document.getElementById('result');

function add(value) {
    expression += value;
    updateDisplay();
}

function updateDisplay() {
    exprEl.textContent = expression;
}

function clearAll() {
    expression = '';
    resultEl.textContent = '0';
    updateDisplay();
}

function del() {
    expression = expression.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        const evalResult = eval(expression.replace('%', '/100'));
        lastAnswer = evalResult;
        resultEl.textContent = evalResult;
    } catch {
        resultEl.textContent = 'Error';
    }
}

function sqrt() {
    try {
        const value = eval(expression);
        // const res = Math.sqrt(value);
        const res = Number(Math.sqrt(value).toFixed(5));
        // const res = parseFloat(Math.sqrt(value).toFixed(5));
        lastAnswer = res;
        // updateDisplay();
        resultEl.textContent = res;
    } catch {
        resultEl.textContent = 'Error';
    }
}

function toggleSign() {
    if (!expression) return;
    if (expression.startsWith('-')) {
        expression = expression.substring(1);
    } else {
        expression = '-' + expression;
    }
    updateDisplay();
}

function useAns() {
    expression += lastAnswer;
    updateDisplay();
}