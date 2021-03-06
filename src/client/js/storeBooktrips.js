import { fetchBooktrips } from './fetchBooktrips'

const booktripForm = document.getElementById('booktrip-form');
const cityNameEl = document.getElementById('city-name');
const datePickerEl = document.getElementById('date-picker');

let booktrips = {};



function storeBooktrip(e) {
	e.preventDefault();
	let cityValue = cityNameEl.value;
	let dateValue = datePickerEl.value;
	//if (!urlValue.includes('http://', 'https://')) {
	//	urlValue = `https://${urlValue}`;
	//}
	// Validate
	//if (!validate(cityValue, dateValue)) {
	//	return false;
	//}
	// Set booktrip object, add to array
	const booktrip = {
		city: cityValue,
		date: dateValue,
	};
	booktrips[dateValue] = booktrip;
	// Set booktrips in localStorage, fetch, reset input fields
	localStorage.setItem('booktrips', JSON.stringify(booktrips));
	fetchBooktrips();
	booktripForm.reset();
	cityNameEl.focus();
}

export { 
    storeBooktrip,
    fetchBooktrips
 }