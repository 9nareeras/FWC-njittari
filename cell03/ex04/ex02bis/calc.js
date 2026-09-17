$(document).ready(function () {

    $("#submit").click(function () {
        const leftValue = $("#left").val();
        const rightValue = $("#right").val();

        const left = Number(leftValue);
        const right = Number(rightValue);

        const operator = $("#operator").val();

        if (
            leftValue.trim() === "" ||
            rightValue.trim() === "" ||
            !Number.isInteger(left) ||
            !Number.isInteger(right) ||
            left < 0 ||
            right < 0
        ) {
            alert("Error :(");
            return;
        }

        if (
            (operator === "/" || operator === "%") &&
            right === 0
        ) {
            alert("It's over 9000!");
            console.log("It's over 9000!");
            return;
        }

        let result;

        switch (operator) {
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

});