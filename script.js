
function allClear() {
    document.getElementById("output").innerHTML = "0";
}

function removeZero() {
    let value = document.getElementById("output").innerHTML;
    if (value == "0") {
        value = "  "
        document.getElementById("output").innerHTML = value;
    }
}

function percentage() {

    let number = document.getElementById("output").innerHTML;
    percent = number / 100;
    document.getElementById("output").innerHTML = percent;
}

function solveIt () {
    removeZero()
    let action = document.getElementById("output").innerHTML;
    let answer = eval(action);
    document.getElementById("output").innerHTML = answer;
}

function toDisplay (value) {
    removeZero()
    document.getElementById("output").innerHTML += value;
}

