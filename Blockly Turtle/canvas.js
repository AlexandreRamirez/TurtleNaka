let canvas = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
];
if (canvas && canvas.getContext) { // does the browser support 'canvas'?
    turtle.ct = canvas.getContext("2d"); // get drawing context

    for (let i = 0; i < canvas.length; i++) {
        for (let j = 0; j < canvas[i].length; j++) {
            if (canvas[i][j] == 0) {
                turtle.ct.fillStyle = "#000000";
            } else {
                turtle.ct.fillStyle = "#C90205";
            }
            turtle.ct.fillRect(0, 0, 100, 100);
        }

    }
} else {
    alert('You need a browser which supports the HTML5 canvas!');
}