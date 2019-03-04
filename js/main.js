(() => {
	console.log("fired! ready to jam");

	function playDrumKitSound(event) {
		let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
		console.log(audio)

		audio.play();

	}

	window.addEventListener("keydown", playDrumKitSound);
})();