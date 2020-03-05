function afficherTortue()
{
    let picture = new Image();
    picture = document.createElement("img");
    switch (turtle.sens)
    {
    	case "Bas":
    		picture.setAttribute("src", "turtleDown.png");
    		break;
    	case "Haut":
    		picture.setAttribute("src", "turtleUp.png");
    		break;
    	case "Gauche":
    		picture.setAttribute("src", "turtleLeft.png");
    		break;
    	case "Droite":
    		picture.setAttribute("src", "turtleRight.png");
    		break;
    }  
    picture.addEventListener("load", function() {
        turtle.ct.drawImage(picture, turtle.x, turtle.y, 100, 100, );
        console.log(picture);
    })
}