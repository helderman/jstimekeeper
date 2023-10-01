const running = document.getElementById('running');
let started, data;

function UpdateRunning() {
	running.innerText = new Date(new Date() - started).toJSON().slice(11, 21);
}

document.getElementById('lap').addEventListener('click', function () {
	const now = new Date();
	if (started) {
		const ol = running.parentNode;
		const li = document.createElement('li');
		data += '\n' + ol.children.length + '\t' + (li.innerText = new Date(now - started).toJSON().slice(11, 23));
		ol.insertBefore(li, running);
		window.scrollBy(0, li.offsetHeight);
	}
	else {
		data = this.innerText = 'LAP - ' + (started = now).toJSON().slice(11, 23);
		window.setInterval(UpdateRunning, 60);
	}
});

document.getElementById('email').addEventListener('click', function () {
	//alert(data);
	window.location.href = 'mailto:?subject=Times&body=' + encodeURIComponent(data);
});
