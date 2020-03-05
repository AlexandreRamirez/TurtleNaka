let page = document.querySelector("body");
page.addEventListener("keydown", function(unEvent){
	let touche = unEvent.key;
	console.log(touche);
	switch (touche)
	{
		case "z":
			avancer();
			break;
		case "s":
			reculer();
			break;
		case "q":
			tourner_a_gauche();
			break;
		case "d":
			tourner_a_droite();
			break;
		case "ArrowDown":
			avancer_en_bas();
			break;
		case "ArrowUp":
			avancer_en_haut();
			break;
		case "ArrowLeft":
			avancer_a_gauche();
			break;
		case "ArrowRight":
			avancer_a_droite();
			break;
	}
});