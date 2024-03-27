const initialize = () => {
	console.log("Initializing...");
	let sliders = document.getElementsByClassName("slider");
	for (let i = 0; i < sliders.length; i++) {
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}

	let saveButton = document.getElementById("saveButton");
	saveButton.addEventListener("click", saveColor);
	update();
};

const update = () => {
	console.log("Updating...");
	let red = document.getElementById("sldRed").value;
	let green = document.getElementById("sldGreen").value;
	let blue = document.getElementById("sldBlue").value;
	document.getElementById("lblRed").innerHTML = red;
	document.getElementById("lblGreen").innerHTML = green;
	document.getElementById("lblBlue").innerHTML = blue;
	let swatch = document.getElementById("swatch");
	swatch.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
};

const saveColor = () => {
	console.log("Saving color...");
	let swatch = document.createElement("div");
	swatch.classList.add("swatch-item");
	swatch.style.backgroundColor = document.getElementById("swatch").style.backgroundColor;

	let deleteButton = document.createElement("span");
	deleteButton.innerHTML = "X";
	deleteButton.classList.add("delete-button");
	deleteButton.addEventListener("click", function() {
		swatch.remove();
	});

	let swatchContainer = document.createElement("div");
	swatchContainer.classList.add("swatch-container");
	swatch.append(deleteButton);
	swatchContainer.appendChild(swatch);


	swatch.addEventListener("click", function() {
		let color = swatch.style.backgroundColor;
		let rgb = color.substring(4, color.length - 1)
			.replace(/ /g, '')
			.split(',');
		document.getElementById("sldRed").value = rgb[0];
		document.getElementById("sldGreen").value = rgb[1];
		document.getElementById("sldBlue").value = rgb[2];
		update();
	});

	document.body.appendChild(swatchContainer);
};

window.addEventListener("load", initialize);
