//import { updateUI } from './app'
import { buildBooktrips } from './buildBooktrips'

let booktrips = {};

function fetchBooktrips() {
	// Get bookmarks from localStorage if available
	if (localStorage.getItem('booktrips')) {
		booktrips = JSON.parse(localStorage.getItem('booktrips'));
	} else {
		// Create bookmarks object in localStorage
		const id = `My trip: `
		booktrips[id] = {
			city: '',
			date: '',
		}

		localStorage.setItem('booktrips', JSON.stringify(booktrips));
	}
	buildBooktrips();
}

export {
	//updateUI,
	buildBooktrips,
	fetchBooktrips
}