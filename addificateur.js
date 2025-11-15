let count = 0;

let res = document.getElementById("res");
let x1 = document.getElementById("x1");
let x10 = document.getElementById("x10");
let x100 = document.getElementById("x100");
let x1000 = document.getElementById("x10³");
let x10e4 = document.getElementById("x10⁴");


res.innerHTML = count;		// To show the result starting from 0

let wait = null;			// Time before the "autoX" mode
let auto1 = null;			// Adds automaticaly if a button is long pressed
let auto10 = null;	
let auto100 = null;
let auto1000 = null;		

// x1 \\

x1.addEventListener("pointerdown", () => {
	count += 1;
	res.innerHTML = count;

	if (count >= 100) {							// If the score reaches 100,
		x10.style.visibility = "visible";		// show the button x10.
	}

	wait = setTimeout(() => {					// If pressed, wait 500ms,
		auto1 = setInterval(() => {				// and then activate "auto" mode.
			count += 1; 	
			res.innerHTML = count;
			if (count >= 100) {
				x10.style.visibility = "visible";
			}
		}, 100);
	}, 500);
});

x1.addEventListener("pointerup", () => {
	clearTimeout(auto1);
	clearInterval(wait);
});


// x10 \\
x10.addEventListener("pointerdown", () => {
	count += 1;
	res.innerHTML = count;

	if (count >= 1000) {
		x100.style.visibility = "visible";
	}

	wait = setTimeout(() => {
		auto10 = setInterval(() => {
									count += 1; 	
									res.innerHTML = count;
									if (count >= 1000) {
										x100.style.visibility = "visible";
									}
								}, 10);
	}, 500);
});

x10.addEventListener("pointerup", () => {
	clearTimeout(auto10);
	clearInterval(wait);
});


// x100 \\
x100.addEventListener("pointerdown", () => {
	count += 1;
	res.innerHTML = count;

	if (count >= 10000) {
	 	x1000.style.visibility = "visible";
	}

	wait = setTimeout(() => {
		auto10 = setInterval(() => {
									count += 1; 	
									res.innerHTML = count;
									if (count >= 10000) {
										x1000.style.visibility = "visible";
									}
								}, 1);
	}, 500);
});

x100.addEventListener("pointerup", () => {
	clearTimeout(auto10);
	clearInterval(wait);
});



// Auto click \\