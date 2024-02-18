//V.2.0.0 Beta 1

function currentTimeInMinutes() {
	let currentDate = new Date();
	let hour = currentDate.getHours();
	let minutes = currentDate.getMinutes();
	return minutes+(hour*60);
}
function setSkyBackground() {
	let t = currentTimeInMinutes();
	document.querySelector('.sky-background').style.background = `var(--sky${Math.round(t/60)-1})`
	document.body.style.backgroundColor = `var(--sky-main${Math.round(t/60)-1})`
}
setSkyBackground();
