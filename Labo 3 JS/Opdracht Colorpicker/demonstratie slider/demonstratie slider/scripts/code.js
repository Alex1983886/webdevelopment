const setup = () => {
	let colorBox=document.getElementsByClassName("colorDemo");
	let rodeSlider = document.getElementsByClassName("rodeSlider");
	let groeneSlider = document.getElementsByClassName("groeneSlider");
	let blauweSlider = document.getElementsByClassName("blauweSlider");

	const rodeSlider = rodeSlider.value;
	const groeneSlider = groeneSlider.value;
	const blauweSlider = blauweSlider.value;

	const colorString = ´rgb(${rodeSlider}, ${groeneSlider}, ${blauweSlider})´
	rodeSlider[0].addEventListener("change", update);
	rodeSlider[0].addEventListener("input", update);

	groeneSlider[0].addEventListener("change", update);
	groeneSlider[0].addEventListener("input", update);

	blauweSlider[0].addEventListener("change", update);
	blauweSlider[0].addEventListener("input", update);

	}


window.addEventListener("load", setup);