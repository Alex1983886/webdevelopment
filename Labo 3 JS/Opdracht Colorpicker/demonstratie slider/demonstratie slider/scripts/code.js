const setup = () => {
	let colorBox = document.querySelector(".colorBox");
	let sliders = document.querySelectorAll(".slider input[type='range']");

	const update = () => {
		let rodeValue = document.querySelector(".rodeSlider").value;
		let groeneValue = document.querySelector(".groeneSlider").value;
		let blauweValue = document.querySelector(".blauweSlider").value;

		let rodeValueSpan = document.querySelector(".rode-value");
		let groeneValueSpan = document.querySelector(".groene-value");
		let blauweValueSpan = document.querySelector(".blauwe-value");

		rodeValueSpan.textContent = rodeValue;
		groeneValueSpan.textContent = groeneValue;
		blauweValueSpan.textContent = blauweValue;

		const colorString = `rgb(${rodeValue}, ${groeneValue}, ${blauweValue})`;
		colorBox.style.backgroundColor = colorString;
	};

	sliders.forEach(slider => {
		slider.addEventListener("input", update);
	});

	update();
};

window.addEventListener("load", setup);
