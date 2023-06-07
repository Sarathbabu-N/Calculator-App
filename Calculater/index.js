const userInput = document.getElementById('input');
var action = '';

function press(num) {
    action += num;
    userInput.value = action;
}

function Equal() {
    userInput.value = eval(action);
    action = '';
}

function Clear() {
    action = '';
    userInput.value = action;
}