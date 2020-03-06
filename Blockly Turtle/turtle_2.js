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

let maze = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

function init() {
    turtle.x = 300;
    turtle.y = 100;
    turtle.angleInRadians = 0;
    turtle.dir = 270;
    turtle.sens = "Bas";
    dessiner();
    afficherTortue();
    salade();

}

let x = 3;
let y = 1;

let but = {
    x: 3,
    y: 7,
};

function dessiner() {
    if (canvas && canvas.getContext) { // does the browser support 'canvas'?
        turtle.ct = canvas.getContext("2d"); // get drawing context

        for (let i = 0; i < maze.length; i++) {
            for (let j = 0; j < maze[i].length; j++) {
                if (maze[i][j] == 0) {
                    turtle.ct.fillStyle = "#F2EEDC"; //grey
                } else {
                    turtle.ct.fillStyle = "#8C2455"; //violine
                }
                turtle.ct.fillRect(j * 50, i * 50, 49, 49);
            }

        }
        // Afficher image salade
        let imgSalade = document.getElementById("salade");
        turtle.ct.drawImage(imgSalade, but.x * 50, but.y * 50, 50, 50);
        //---------------------------------------------------------------
    } else {
        alert('You need a browser which supports the HTML5 canvas!');
    }
}
// ====================================z=================================================


turtle.logPenStatus = function () {
    console.log('x=' + this.x + "; y=" + this.y + '; angle = ' + (this.angleInRadians * 180 / Math.PI) + '; penDown = ' + this.penDown);
};


turtle.forward = function (length) {
    var x0 = this.x,
        y0 = this.y;
    this.x += length * Math.sin(this.angleInRadians);
    this.y += length * Math.cos(this.angleInRadians);
    if (this.ct) {
        if (this.penDown) {
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



turtle.backward = function (length) {
    this.forward(-length);
    return this;
};

turtle.left = function (angleInDegrees) {
    // A complete circle, 360º, is equivalent to 2π radians  
    // angleInDegrees is an angle measure in degrees
    this.angleInRadians += angleInDegrees * Math.PI / 180.0;
    return this;
};

turtle.right = function (angleInDegrees) {
    this.left(-angleInDegrees);
    return this;
};

// Déplacement relatif ////////////////////////////////
function avancer() {
    turtle.forward(50);
    console.log(turtle.x + " " + turtle.y);
     test_collision();
    dessiner();
    test_but();
    afficherTortue();
    salade();
}

function reculer() {
    turtle.forward(-50);
    test_collision()
    dessiner();
    test_but();
    afficherTortue();
    salade();
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
    salade();
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
    salade();
}

// Déplacement absolut ///////////////////////////////
function avancer_a_gauche() {
    x -= 1;
    turtle.right(90);
    turtle.forward(50);
    turtle.left(90);
    test_collision();
    dessiner();
    test_but();
    salade();
}

function avancer_a_droite() {
    x += 1;
    turtle.left(90);
    turtle.forward(50);
    turtle.right(90);
    test_collision();
    dessiner();
    test_but();
    salade();
}

function avancer_en_haut() {
    y -= 1;
    turtle.backward(50);
    test_collision();
    dessiner();
    test_but();
    salade();
}

function avancer_en_bas() {
    y += 1;
    turtle.forward(50);
    test_collision();
    dessiner();
    test_but();
    salade();
}

function test_collision() {
    if (maze[Math.round(turtle.y / 50)][Math.round(turtle.x / 50)] == 0) {
        setTimeout(() => {
            alert("Et BIM LE MUR !!!");
        }, 200);
        init();
    }
}

// function test_but() {
//     if (turtle.x == but.x * 50 && turtle.y == but.y * 50) 
//     {
//         var img = document.getElementById("screamer");
//         turtle.ct.drawImage(img, 25, 50, 400, 300);
//     }
// }

function test_but()
{
    if (Math.round(turtle.x) == but.x * 50 && Math.round(turtle.y) == but.y * 50)
    {
        let victoire = new Image();
        victoire = document.createElement("img");
        victoire.setAttribute("src", "Image/tortue-salade.png");
        victoire.addEventListener("load", function()
        {
        turtle.ct.drawImage(victoire, 50, 50, 400, 300)
        });
    }
}

init();
function salade()
{
    let saladePic = new Image();
    saladePic = document.createElement("img");
    saladePic.setAttribute("src", "./Image/salad.png");
    saladePic.addEventListener("load", function()
    {
        turtle.ct.drawImage(saladePic, but.x*50, but.y*50, 50, 50, );
        console.log(saladePic);
    })
}