function afficherTortue()
{
    let picture = new Image();
    picture = document.createElement("img");
    switch (turtle.sens)
    {
    	case "Bas":
    		picture.setAttribute("src", "Image/turtleDown.png");
    		break;
    	case "Haut":
    		picture.setAttribute("src", "Image/turtleUp.png");
    		break;
    	case "Gauche":
    		picture.setAttribute("src", "Image/turtleLeft.png");
    		break;
    	case "Droite":
    		picture.setAttribute("src", "Image/turtleRight.png");
    		break;
    }  
    picture.addEventListener("load", function() {
        turtle.ct.drawImage(picture, turtle.x, turtle.y, 50, 50, );
        console.log(picture);
    })
}