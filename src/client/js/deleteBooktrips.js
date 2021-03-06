import { fetchBooktrips } from './fetchBooktrips'

let booktrips = {};

function deleteBooktrip(id) {
	// Loop through the bookmarks array
	if (booktrips[id]) {
		delete booktrips[id]
	}
	// Update bookmarks array in localStorage, re-populate DOM
	localStorage.setItem('booktrips', JSON.stringify(booktrips));
	fetchBooktrips();
}

export {
    deleteBooktrip, 
    fetchBooktrips
}