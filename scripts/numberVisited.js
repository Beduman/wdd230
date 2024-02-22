// Initialize display element variable
const visitsDisplay = document.querySelector(".visit");

// Get the stored VALUE for the numVisit-ls KEY in localStorage if it exists. If the numVisit KEY is missing, then assign 0 to the numVisits variable.
let numVisit = Number(window.localStorage.getItem("numVisit-ls")) || 0;

// Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisit !== 0) {
	visitsDisplay.textContent = numVisit;
} else {
	visitsDisplay.textContent = `Welcome to my site!`;
}

// increment the number of visits by one.
numVisit++;

// store the new visit total into localStorage, key=numVisit-ls
localStorage.setItem("numVisit-ls", numVisit);

// A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.
