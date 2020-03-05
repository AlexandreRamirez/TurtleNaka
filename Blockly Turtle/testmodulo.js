

function direction(dirAngle)
{
	if (dirAngle <= 360)
	{
		switch (dirAngle)
		{
			case 0:
				console.log("Droite");
				turtle.sens = "Droite";
				/*let picture = new Image();
    			picture = document.createElement("img");
    			picture.setAttribute("src", "turtleRight.jpg");
    			picture.addEventListener("load", function() {
        		turtle.ct.drawImage(picture, turtle.x + 40, turtle.y + 40, 50, 50, );*/
				break;
			case 90:
				console.log("Haut");
				turtle.sens = "Haut";
				break;
			case 180:
				console.log("Gauche");
				turtle.sens = "Gauche";
				break;
			case 270:
				console.log("Bas");
				turtle.sens = "Bas";
				break;
			case 360:
				console.log("Droite");
				turtle.sens = "Droite";
				/*let picture = new Image();
    			picture = document.createElement("img");
    			picture.setAttribute("src", "turtleRight.jpg");
    			picture.addEventListener("load", function() {
        		turtle.ct.drawImage(picture, turtle.x + 40, turtle.y + 40, 50, 50, );*/
				break;
		}
	}

	if (dirAngle > 360)
	{
		switch (dirAngle%360)
		{
			case 0:
				console.log("Droite");
				turtle.sens = "Droite";
				/*let picture = new Image();
    			picture = document.createElement("img");
    			picture.setAttribute("src", "turtleRight.jpg");
    			picture.addEventListener("load", function() {
        		turtle.ct.drawImage(picture, turtle.x + 40, turtle.y + 40, 50, 50, );*/
				break;
			case 90:
				console.log("Haut");
				turtle.sens = "Haut";
				break;
			case 180:
				console.log("Gauche");
				turtle.sens = "Gauche";
				break;
			case 270:
				console.log("Bas");
				turtle.sens = "Bas";
				break;
			case 360:
				console.log("Droite");
				turtle.sens = "Droite";
				/*let picture = new Image();
    			picture = document.createElement("img");
    			picture.setAttribute("src", "turtleRight.jpg");
    			picture.addEventListener("load", function() {
        		turtle.ct.drawImage(picture, turtle.x + 40, turtle.y + 40, 50, 50, );*/
				break;
		}
	}

	if (dirAngle >= -360)
	{
		switch (dirAngle)
		{
			case -90:
				console.log("Bas");
				turtle.sens = "Bas";

				break;
			case -180:
				console.log("Gauche");
				turtle.sens = "Gauche";
				break;
			case -270:
				console.log("Haut");
				turtle.sens = "Haut";
				break;
			case -360:
				console.log("Droite");
				turtle.sens = "Droite";
				/*let picture = new Image();
    			picture = document.createElement("img");
    			picture.setAttribute("src", "turtleRight.jpg");
    			picture.addEventListener("load", function() {
        		turtle.ct.drawImage(picture, turtle.x + 40, turtle.y + 40, 50, 50, );*/
				break;
		}
	}

	if (dirAngle < -360)
	{
		switch (dirAngle%360)
		{
			case -0:
				console.log("Droite");
				turtle.sens = "Droite";
				/*let picture = new Image();
    			picture = document.createElement("img");
    			picture.setAttribute("src", "turtleRight.jpg");
    			picture.addEventListener("load", function() {
        		turtle.ct.drawImage(picture, turtle.x + 40, turtle.y + 40, 50, 50, );*/
				break;
			case -90:
				console.log("Bas");
				turtle.sens = "Bas";
				break;
			case -180:
				console.log("Gauche");
				turtle.sens = "Gauche";
				break;
			case -270:
				console.log("Haut");
				turtle.sens = "Haut";
				break;
			case -360:
				console.log("Droite");
				turtle.sens = "Droite";
				/*let picture = new Image();
    			picture = document.createElement("img");
    			picture.setAttribute("src", "turtleRight.jpg");
    			picture.addEventListener("load", function() {
        		turtle.ct.drawImage(picture, turtle.x + 40, turtle.y + 40, 50, 50, );*/
				break;
		}
	}
}
