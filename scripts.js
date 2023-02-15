// JavaScript Document
window.onload = function () {
    document.getElementById("answer").innerHTML = "0.0";
}
var calculation = "";
document.getElementById("buttons").addEventListener('click', function (event) {

    if (event.target.innerHTML == "C") {
        calculation = "";
        document.getElementById("answer").innerHTML = "0.0";
    }
    else if (event.target.innerHTML == "=") {
        document.getElementById("answer").innerHTML = eval(calculation);
    }
    else {
        let val = event.target.innerHTML;
        document.getElementById("answer").innerHTML = val;
        calculation += val;
    }
});

for (i = 1; i < 17; i++) {
    document.getElementById("button" + i).addEventListener('mousedown', function (event) {
        event.target.style.backgroundColor = "#cbabab";

    });
}

for (i = 1; i < 17; i++) {
    document.getElementById("button" + i).addEventListener('mouseup', function (event) {
        event.target.style.backgroundColor = "#eee";
    });
}