(() => {
	console.log("fired! ready to jam");

	function playDrumKitSound(event) {
		let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
		//console.log(audio)
		//
		// debuggin / error handling
		// if we don't have a matching audio element, then kill the function
		//  ! is a "not" element or a bang
		if (!audio) { return; } //return stops code execution

		// rewind audio on every click and make it play
		audio.currentTime
		audio.play();

		let key = document.querySelector(`div[data-key="${event.keyCode}"]`);
		key.classList.add('playing');

	}

	function removePlayingClass(event) {
		//debugger;
		//
		if (event.propertyName !== "transform") {
			return;
		} else {
			// remove the playing class here from the active div
			console.log('transition is done');
			event.target.classList.remove('playing');
		}
	}

	const keys = Array.from(document.querySelectorAll('.keys'));

	keys.forEach(key => key.addEventListener("transitionend", removePlayingClass))

	window.addEventListener("keydown", playDrumKitSound);
})();