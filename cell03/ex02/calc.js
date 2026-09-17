const leftInput = document.getElementById("left");
const rightInput = document.getElementById("right");
const operator = document.getElementById("operator");
const submit = document.getElementById("submit");

submit.addEventListener("click", function () {
    const left = Number(leftInput.value);
    const right = Number(rightInput.value);

    if (
        leftInput.value.trim() === "" ||
        rightInput.value.trim() === "" ||
        !Number.isInteger(left) ||
        !Number.isInteger(right) ||
        left < 0 ||
        right < 0
    ) {
        alert("Error :(");
        return;
    }

    if (
        (operator.value === "/" || operator.value === "%") &&
        right === 0
    ) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result;

    switch (operator.value) {
        case "+":
            result = left + right;
            break;

        case "-":
            result = left - right;
            break;

        case "*":
            result = left * right;
            break;

        case "/":
            result = left / right;
            break;

        case "%":
            result = left % right;
            break;
    }

    alert(result);
    console.log(result);
});

setInterval(function () {
    alert("Please, use me...");
}, 30000);