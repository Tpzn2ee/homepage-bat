function renderTime() {
	var t = new Date();
	var h = t.getHours();
	var m = t.getMinutes();
	if (h < 10) {
		h = "0" + h;
	}
	if (m < 10) {
		m = "0" + m;
	}
	document.getElementById('time').innerHTML = h + ":" + m;
}