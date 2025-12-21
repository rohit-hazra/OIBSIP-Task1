let expression = "";
let lastAnswer = 0;

const exprEl = document.getElementById("expression");
const resultEl = document.getElementById("result");

function add(value) {
    // Prevent multiple decimals in a number
    if (value === "." && expression.split(/[\+\-\*\/]/).pop().includes(".")) {
        return;
    }
    expression += value;
    updateDisplay();
}

function updateDisplay() {
    exprEl.textContent = expression || "";
}

function clearAll() {
    expression = "";
    resultEl.textContent = "0";
    updateDisplay();
}

function del() {
    expression = expression.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        const safeExpr = expression.replace(/%/g, "/100");
        const evalResult = eval(safeExpr);

        if (!isFinite(evalResult)) throw new Error();

        lastAnswer = Number(evalResult.toFixed(8));
        resultEl.textContent = lastAnswer;
        updateDisplay();
    } catch {
        resultEl.textContent = "Error";
        expression = "";
        updateDisplay();
    }
}

function sqrt() {
    try {
        const value = eval(expression);
        if (value < 0) throw new Error();

        const res = Number(Math.sqrt(value).toFixed(8));
        lastAnswer = res;
        resultEl.textContent = res;
        updateDisplay();
    } catch {
        resultEl.textContent = "Error";
        expression = "";
        updateDisplay();
    }
}

function toggleSign() {
    if (!expression) return;

    if (expression.startsWith("-")) {
        expression = expression.slice(1);
    } else {
        expression = "-" + expression;
    }
    updateDisplay();
}

function useAns() {
    expression += lastAnswer;
    updateDisplay();
}
