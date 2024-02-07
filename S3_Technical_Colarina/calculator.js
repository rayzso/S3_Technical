function appendToScreen(value) {
    document.getElementById('screen').innerText += value;
}

function clearScreen() {
    document.getElementById('screen').innerText = '';
}

function removeChar() {
    var screen = document.getElementById('screen');
    screen.innerText = screen.innerText.slice(0, -1);
}

function calculate() {
    var expression = document.getElementById('screen').innerText;
    var result = eval(expression);
    document.getElementById('screen').innerText = result;
}