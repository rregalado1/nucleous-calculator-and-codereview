function append(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}
function calculate() {
    try {
        let expression = document.getElementById("display").value;
        expression = expression.replace(/\^/g, "**");
        let result = eval(expression);
        document.getElementById("display").value = result;
    } catch {
        alert("Invalid expression");
    }
}

function squareRoot() {
    let display = document.getElementById("display");
    try {
        let number = eval(display.value.replace(/\^/g, "**"));
        display.value = Math.sqrt(number);
    } catch {
        alert("Invalid expression");
    }
}

function logNumber() {
    let display = document.getElementById("display");
    try {
        let number = eval(display.value.replace(/\^/g, "**"));
        display.value = Math.log10(number);
    } catch {
        alert("Invalid expression");
    }
}

document.addEventListener("keydown", function (event) {
    let key = event.key;

    if ("0123456789.+-*/^".includes(key)) {
        append(key);
    } else if (key === "Enter" || key === "=") {
        calculate();
    } else if (key === "Backspace") {
        let display = document.getElementById("display");
        display.value = display.value.slice(0, -1);
    } else if (key === "Escape") {
        clearDisplay();
    } else if (key === "r") {
        squareRoot();
    } else if (key === "l") {
        logNumber();
    } else if (key.toLowerCase() === "x") {
        append("*");
    } else {
        return;
    }

    event.preventDefault();
});