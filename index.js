const expandButton = document.getElementById('expand');
const box = document.getElementById('box');
const collapseButton = document.getElementById('collapse');

expandButton.addEventListener('click', () => {
	box.classList.add('js-expand');
	console.log('EXPAND!');
});

collapseButton.addEventListener('click', () => {
	box.classList.remove('js-expand');
});
