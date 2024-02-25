//V.2.0.0 Beta 1

function currentTimeInMinutes() {
	let currentDate = new Date();
	return currentDate.getMinutes()+(currentDate.getHours()*60);
}
function setSkyBackground() {
	document.querySelector('.sky-background').style.background = `var(--sky${Math.round(currentTimeInMinutes()/60)-1})`
	document.body.style.backgroundColor = `var(--sky-main${Math.round(currentTimeInMinutes()/60)-1})`
}
setSkyBackground();


document.querySelectorAll('.button-oc').forEach(function(i) {
	i.addEventListener('click', function() {
		document.getElementById('settings-container-main').classList.toggle('settings-container-main-close')
		document.getElementById(`${event.target.id.split('-')[1]}`).classList.toggle('settings-container-open');
	});
});
document.querySelectorAll('.button-toggle-container').forEach(function(i) {
	i.addEventListener('click', function() {
		event.target.classList.toggle('true');
		if (event.target.classList.contains('button-toggle-container')) {
			event.target.querySelector('.button-toggle').classList.toggle('true');
		} else {
			event.target.parentNode.classList.toggle('true');
		}
	});
});
