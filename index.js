const expandButton = document.getElementById('expand');
const box = document.getElementById('box');
const collapseButton = document.getElementById('collapse');
const landingHeader = document.getElementById('landing-header');
const detailsContainer = document.getElementById('details-container');

expandButton.addEventListener('click', () => {
	box.classList.add('js-expand');
	detailsContainer.classList.add('js-fadeToggle');
	landingHeader.classList.add('js-fadeToggle');
});

collapseButton.addEventListener('click', () => {
	box.classList.remove('js-expand');
	box.classList.add('js-collapse');
	detailsContainer.classList.remove('js-fadeToggle');
	landingHeader.classList.remove('js-fadeToggle');
	setTimeout(() => {
		box.classList.remove('js-collapse');
	}, 250);
});
