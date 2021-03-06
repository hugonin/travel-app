const bookmarkForm = document.getElementById('bookmark-form');
const cityNameEl = document.getElementById('city-name');
const datePickerEl = document.getElementById('date-picker');
const bookmarksContainer = document.getElementById('bookmarks-container');

let bookmarks = {};



// Build Bookmarks 2
function buildBookmarks() {
	// Remove all bookmark elements
	bookmarksContainer.textContent = '';
	// Build items
	Object.keys(bookmarks).forEach((id) => {

		const { city, date } = bookmarks[id];
		console.log(city, date);
		// Item
		const item = document.createElement('div');
		item.classList.add('item');
	
		bookmarksContainer.appendChild(item).innerHTML = `
		<i class="fas fa-times close-icon" title= "Delete Bookmark" onclick="deleteBookmark('${id}')"></i>
		<img class="main-image" src="" alt="image-of-the-city">
		<h2 class="info-title-country">My trip to: ${city}</h2>
		<h3 class="info-title-date">Departing: ${date}</h3>
		<p class="info-countdown">${city} is </p>
		<p class="info-temp">Typical weather for then is: °C, Max: °C, Min: °C</p>
		<p class="info-description-fineprint"></p>
		`;

	});

}

// Fetch bookmarks
function fetchBookmarks() {
	// Get bookmarks from localStorage if available
	if (localStorage.getItem('bookmarks')) {
		bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
	} else {
		// Create bookmarks object in localStorage
		bookmarks = [];
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	}
	buildBookmarks();
}

// Delete Bookmark
function deleteBookmark(id) {
	// Loop through the bookmarks array
	if (bookmarks[id]) {
		delete bookmarks[id]
	}
	// Update bookmarks array in localStorage, re-populate DOM
	localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	fetchBookmarks();
}

function storeBookmark(e) {
	e.preventDefault();
	
	let cityValue = cityNameEl.value;
	let dateValue = datePickerEl.value;

	console.log(cityValue, dateValue);

	// Set bookmark object, add to array
	const bookmark = {
		city: cityValue,
		date: dateValue,
	};
	bookmarks[dateValue] = bookmark;
	// Set bookmarks in localStorage, fetch, reset input fields
	localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	fetchBookmarks();
	bookmarkForm.reset();
	cityNameEl.focus();
}

// Event Listener
bookmarkForm.addEventListener('submit', storeBookmark);

// On Load, Fetch Bookmarks
fetchBookmarks();
