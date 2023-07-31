const canvas = document.querySelector('#canvas');


console.log(window);
function onSetSizesToCanvas() {
    canvas.height = 4 * window.innerHeight;
    canvas.width = 4 * window.innerWidth;
}

onSetSizesToCanvas();

const ctx = canvas.getContext('2d');
window.addEventListener('resize', onSetSizesToCanvas);

let lastX, lastY;

let isDrawing, isFlat = false;

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey) {
        isFlat = true;
    }
});
document.addEventListener('keyup', function (event) {
   
    if (event.keyCode == 17) {
        isFlat = false;
    }
});

canvas.addEventListener('mousedown', function () {
    isDrawing = true;
});

canvas.addEventListener('mouseup', function () {
    isDrawing = false;
});


let flatStartX, flatStartY, axis;


canvas.addEventListener('mousemove', function (event) {
    console.log(flatStartX, flatStartY, axis);
    if (isDrawing) {

        if (lastX && lastY) {

            if (isFlat) {

                if (!flatStartX && !flatStartY) {
                    flatStartX = event.clientX;
                    flatStartY = event.clientY;
                }
                console.log(flatStartX, flatStartY);

                ctx.moveTo(flatStartX, flatStartY);


                if (flatStartX - event.clientX < flatStartY - event.clientY) {
                    axis = 'y';
                } else {
                    axis = 'x';
                }
                if (axis == 'x') {
                    ctx.lineTo(flatStartX, 4 * event.clientY);
                } else if (axis == 'y') {
                    ctx.lineTo(4 * event.clientX, flatStartY);

                }
            } else {
                flatStartX = null;
                flatStartY = null;
                axis = null;
                ctx.moveTo(lastX, lastY);
                ctx.lineTo(4 * event.clientX, 4 * event.clientY);

            }
            ctx.stroke();
            ctx.lineWidth = 10;
        }
    }
    lastX = 4 * event.clientX;
    lastY = 4 * event.clientY;
});

canvas.addEventListener('dblclick', function () {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
});