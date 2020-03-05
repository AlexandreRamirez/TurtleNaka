"use strict";
// JavaScript statements
// =====================================================================================
var color = {
    white: "#ffffff",
    black: "#000000",
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    yellow: "#ffff00",
    fuchsia: "#ff00ff",
    aqua: "#00ffff",
    orange: "#ff8a50"
};

var turtle = {
    x: 0,
    y: 0,
    angleInRadians: 0,
    penDown: true,
    penColor: "#00000",
    lineWidth: 2,
    col: 0,
    dir: 270,
    sens: "Bas"
};

var canvas = document.getElementById('myDrawing');

// if (canvas && canvas.getContext) { // does the browser support 'canvas'?
//     turtle.ct = canvas.getContext("2d"); // get drawing context
//     turtle.ct.fillStyle = "#888888";
//     turtle.ct.fillRect(0, 0, 600, 600);
// } else {
//     alert('You need a browser which supports the HTML5 canvas!');
// }
let maze = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

function init() {
    turtle.x = 100;
    turtle.y = 100;
    turtle.angleInRadians = 0;
    turtle.dir = 270;
    turtle.sens = "Bas";
    dessiner();
    afficherTortue();
}

let x = 1;
let y = 1;

let but = {
    x: 4,
    y: 4
};

function dessiner() {
    if (canvas && canvas.getContext) { // does the browser support 'canvas'?
        turtle.ct = canvas.getContext("2d"); // get drawing context

        for (let i = 0; i < maze.length; i++) {
            for (let j = 0; j < maze[i].length; j++) {
                if (maze[i][j] == 0) {
                    turtle.ct.fillStyle = "#000000";
                } else {
                    turtle.ct.fillStyle = "#C90205";
                }
                turtle.ct.fillRect(j * 100, i * 100, 99, 99);
            }

        }
        // Afficher image salade
        let imgSalade = document.getElementById("salade");
        turtle.ct.drawImage(imgSalade, but.x * 100, but.y * 100, 100, 100);
        //---------------------------------------------------------------
        //turtle.ct.fillStyle = "#00FF00";
        //turtle.ct.fillRect(turtle.x + 40, turtle.y + 40, 20, 20);
    } else {
        alert('You need a browser which supports the HTML5 canvas!');
    }
}
// ====================================z=================================================


turtle.logPenStatus = function() {
    console.log('x=' + this.x + "; y=" + this.y + '; angle = ' + (this.angleInRadians * 180 / Math.PI) + '; penDown = ' + this.penDown);
};


turtle.forward = function(length) {
    // console.log('forward(' + length + ')');
    var x0 = this.x,
        y0 = this.y;
    this.x += length * Math.sin(this.angleInRadians);
    this.y += length * Math.cos(this.angleInRadians);
    if (this.ct) {
        if (this.penDown) {
            //this.logPenStatus();
            this.ct.beginPath();
            this.ct.lineWidth = this.lineWidth;
            this.ct.strokeStyle = this.penColor;
            this.ct.moveTo(x0, y0);
            this.ct.lineTo(this.x, this.y);
            this.ct.stroke();
        }
    } else {
        this.ct.moveTo(this.x, this.y);
    }
    return this;
};

/*turtle.arc_left = function(radius, arc) {
    var x0 = this.x,
        y0 = this.y;
    var theta0 = this.angleInRadians;
    var xc = x0 + radius * Math.cos(theta0);
    var yc = y0 - radius * Math.sin(theta0);
    var start_angle = theta0 - Math.PI;
    arc = arc * Math.PI / 180;
    var end_angle = start_angle + arc;

    if (arc < 0) {
        end_angle = Math.PI - theta0;
        start_angle = end_angle + arc;
    }

    if (this.penDown) {
        this.ct.beginPath();
        this.ct.lineWidth = this.lineWidth;
        this.ct.strokeStyle = this.penColor;
        for (var angle = start_angle; angle <= end_angle; angle += 0.001) {
            var x = xc + radius * Math.cos(angle);
            var y = yc - radius * Math.sin(angle);
            this.ct.lineTo(x, y);
        }
        this.ct.stroke();
    }

    var angle = end_angle;
    if (arc < 0) {
        angle = start_angle;
    }
    this.x = xc + radius * Math.cos(angle);
    this.y = yc - radius * Math.sin(angle);
    this.angleInRadians += arc;

    console.log(x0, this.x, y0, this.y, 180 * angle / Math.PI);

    return this;
}

turtle.arc_right = function(radius, arc) {
    var x0 = this.x,
        y0 = this.y;
    var theta0 = this.angleInRadians;
    var xc = x0 - radius * Math.cos(theta0);
    var yc = y0 + radius * Math.sin(theta0);
    var start_angle = theta0;
    arc = arc * Math.PI / 180;
    var end_angle = start_angle - arc;

    if (arc < 0) {
        end_angle = theta0;
        start_angle = end_angle - arc;
    }

    if (this.penDown) {
        this.ct.beginPath();
        this.ct.lineWidth = this.lineWidth;
        this.ct.strokeStyle = this.penColor;
        for (var angle = start_angle; angle >= end_angle; angle -= 0.001) {
            var x = xc + radius * Math.cos(angle);
            var y = yc - radius * Math.sin(angle);
            this.ct.lineTo(x, y);
        }
        this.ct.stroke();
    }

    var angle = end_angle;
    if (arc < 0) {
        angle = start_angle;
    }
    this.x = xc + radius * Math.cos(angle);
    this.y = yc - radius * Math.sin(angle);
    this.angleInRadians -= arc;

    console.log(x0, this.x, y0, this.y, 180 * angle / Math.PI);

    return this;
}*/

turtle.backward = function(length) {
    this.forward(-length);
    return this;
};

turtle.left = function(angleInDegrees) {
    // console.log('left(' + angleInDegrees + ')');
    // A complete circle, 360º, is equivalent to 2π radians  
    // angleInDegrees is an angle measure in degrees
    this.angleInRadians += angleInDegrees * Math.PI / 180.0;
    return this;
};

turtle.right = function(angleInDegrees) {
    this.left(-angleInDegrees);
    return this;
};


/*turtle.angle = function() {
    // the turtle status is hold in this.angleInRadians;
    // degrees are often more convenient for the display
    return this.angleInRadians * 180.0 / Math.PI;
};

turtle.change_color = function(col) {
    // console.log('change_color(' + col + ')');
    turtle.penColor = col;
}*/

/*turtle.down = function() {
    // console.log('down()');
    turtle.penDown = true;
}

turtle.up = function() {
    // console.log('up()');
    turtle.penDown = false;
}

turtle.set_pos = function(x, y) {
    // console.log('set_pos(' + x + ',' + y + ')');
    turtle.x = x;
    turtle.y = y;
}

turtle.set_line_width = function(n) {
    // console.log('set_line_width(' + n + ')');
    turtle.lineWidth = n;
}

function color_scale(n) {
    let k = Math.floor((n % (6 * 255)) / 255);
    let r = 0,
        g = 0,
        b = 0;
    if (k == 0) {
        r = 255;
        g = n % 255;
    } else if (k == 1) {
        r = 255 - n % 255;
        g = 255;
    } else if (k == 2) {
        g = 255;
        b = n % 255;
    } else if (k == 3) {
        g = 255 - n % 255;
        b = 255;
    } else if (k == 4) {
        r = n % 255;
        b = 255;
    } else {
        r = 255;
        b = 255 - n % 255;
    }
    let c = r * 256 * 256 + g * 256 + b;
    let col = "#" + c.toString(16).padStart(6, '0');
    console.log(n, r, g, b, c, col);
    return col;
}

turtle.shift_color = function(x) {
    let n = Math.floor(x * 255 * 6);
    turtle.col = (turtle.col + n) % (255 * 6);
    turtle.change_color(color_scale(turtle.col));
}*/

// Déplacement relatif ////////////////////////////////
function avancer() {
    turtle.forward(100);
    console.log(turtle.x + " " + turtle.y);
/*    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            x += 0.01;
            dessiner()
        }, );
    }*/
    test_collision();
    dessiner();
    test_but();
    afficherTortue();
}

function reculer() {
    turtle.forward(-100);
    // for (let i = 0; i < 100; i++) {
    //     setTimeout(() => {
    //         x += 0.01;
    //         dessiner()
    //     }, i * 5);
    // }
    test_collision()
    dessiner();
    test_but();
    afficherTortue();
}
//tourner
function tourner_a_droite() {
    turtle.right(90);
    turtle.dir -= 90;
    dessiner();
    test_but();
    console.log(turtle.dir);
    direction(turtle.dir);
    afficherTortue();
}

function tourner_a_gauche() {
    turtle.left(90);
    turtle.dir += 90;
    if (turtle.dir > 360)
    dessiner();
    test_but();
    console.log(turtle.dir);
    direction(turtle.dir);
    afficherTortue();
}

// Déplacement absolut ///////////////////////////////
function avancer_a_gauche() {
    x -= 1;
    turtle.right(90);
    turtle.forward(100);
    turtle.left(90);
    test_collision();
    dessiner();
    test_but();
}

function avancer_a_droite() {
    x += 1;
    turtle.left(90);
    turtle.forward(100);
    turtle.right(90);
    test_collision();
    dessiner();
    test_but();
}

function avancer_en_haut() {
    y -= 1;
    turtle.backward(100);
    test_collision();
    dessiner();
    test_but();
}

function avancer_en_bas() {
    y += 1;
    turtle.forward(100);
    test_collision();
    dessiner();
    test_but();
}



function test_collision() {
    if (maze[Math.ceil(turtle.y / 100)][Math.ceil(turtle.x / 100)] == 0) {
        setTimeout(() => {
            alert("Et BIM LE MUR !!!");
        }, 200);
        init();
    }
}

function test_but() {
    if (turtle.x == but.x*100 && turtle.y == but.y*100) {
        var img = document.getElementById("screamer");
        turtle.ct.drawImage(img, 50, 100, 800, 600);
        /*setTimeout(() => {
            console.log("victoire");
        }, 200);*/
    }
}



init();