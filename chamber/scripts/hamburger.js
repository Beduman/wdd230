const mainnav = document.querySelector('.navigation')
const hamButton = document.querySelector('#phoneMenu');
const darkMode = document.querySelector('#mode')

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hamButton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hamButton.classList.toggle('show');
});
