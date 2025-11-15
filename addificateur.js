let count = 0;

let x1 = document.getElementById("x1");
let res = document.getElementById("res");

res.innerHTML = count;		// Pour afficher le résultat dès 0

let wait = null;		// Temps d'attente avant le mode automatique
let autoX1 = null;		// Incrémente automatiquement si appui prolongé

// x1 \\
x1.addEventListener("pointerdown", () => {
	count += 1;
	res.innerHTML = count;
	wait = setTimeout(() => {
		autoX1 = setInterval(() => {
								count += 1; 	
								res.innerHTML = count;
								}, 100);
	}, 500);
});

x1.addEventListener("pointerup", () => {
	clearInterval(wait);
	clearTimeout(autoX1);
});
