enterText.onclick = function () {
	let element = document.getElementsByClassName("text");

	for (let i = 0; i < element.length; i++) {
	let input = element [i];
	input.classList.add("none");
	}
	

}

enterButton.onclick = function () {
	this.style.display = "none";
}