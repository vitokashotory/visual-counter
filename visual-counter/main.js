const counters = document.querySelectorAll('.counter');

// this could work for multiple counters
counters.forEach(counter => {
	// start with 0 by default
	counter.innerText = '0';
	
	const updateCounter = () => {
		const target = +counter.getAttribute('data-target');
		const c = +counter.innerText;
		
		// get the 0.1% to speed up things
		const increment = target / 2000;
		
		if(c < target) {
			counter.innerText = `${Math.ceil(c + increment)}`;
			setTimeout(updateCounter, 1)
		} else {
			counter.innerText = target;
		}
	};
	updateCounter();
});