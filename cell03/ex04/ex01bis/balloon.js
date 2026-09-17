$(document).ready(function () {
    const colors = ["red", "green", "blue"];

    let size = 200;
    let colorIndex = 0;

    const balloon = $("#balloon");

    balloon.click(function () {
        size += 10;

        if (size > 420) {
            size = 200;
        }

        colorIndex = (colorIndex + 1) % colors.length;

        updateBalloon();
    });

    balloon.mouseleave(function () {
        if (size > 200) {
            size -= 5;
        }

        colorIndex =
            (colorIndex - 1 + colors.length) % colors.length;

        updateBalloon();
    });

    function updateBalloon() {
        balloon.css({
            width: size + "px",
            height: size + "px",
            backgroundColor: colors[colorIndex]
        });
    }
});