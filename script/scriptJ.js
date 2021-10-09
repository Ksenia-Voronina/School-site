var butt = document.getElementById("convert");
var inpt = document.getElementById("input");
var ress = document.getElementById("result");

function converter() {
    var res = Number(inpt.value);
    ress.value = 10 * res;
}

butt.addEventListener("click", converter);