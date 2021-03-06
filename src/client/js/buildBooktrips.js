import { countdownTimer } from './countdown'

const booktripsContainer = document.getElementById('booktrips-container');
let booktrips = {};
/*
function buildBooktrips() {
    // Remove all bookmark elements
	booktripsContainer.textContent = '';
	// Build items
	Object.keys(booktrips).forEach((id) => {

		const { city, country, date, image, temp, minTemp, maxTemp, description } = booktrips[id];
		console.log(city, country, date, image, temp, minTemp, maxTemp, description);
		// Item
		const item = document.createElement('div');
		item.classList.add('item');
	
		booktripsContainer.appendChild(item).innerHTML = `
		<i class="fas fa-times close-icon" title= "Delete Bookmark" onclick="deleteBookmark('${id}')"></i>
		<img class="main-image" src="${image}" alt="image-of-the-city">
		<h2 class="info-title-country">My trip to: ${city},${country}</h2>
		<h3 class="info-title-date">Departing: ${date}</h3>
		<p class="info-countdown">${city}, ${country} is <span id="countdown">${countdownTimer}</span></p>
		<p class="info-temp">Typical weather for then is: ${temp}°C, Max: ${maxTemp}°C, Min: ${minTemp}°C</p>
		<p class="info-description-fineprint">${description}</p>
		`;

	});
}
*/
// Build Booktrips


function buildBooktrips() {
	// Remove all bookmark elements
	bookmarksContainer.textContent = '';
	// Build items
	booktrips.forEach((booktrip) => {
	  const { city, date, image, country } = booktrip;
	  // Item
	  const item = document.createElement('div');
	  item.classList.add('item');
	  // Close Icon
	  const closeIcon = document.createElement('i');
	  closeIcon.classList.add('fas', 'fa-times');
	  closeIcon.setAttribute('title', 'Delete booktrip');
	  closeIcon.setAttribute('onclick', `deleteBooktrip('${date}')`);
	  //  Link Container
	  const linkInfo = document.createElement('div');
	  linkInfo.classList.add('city');
	  // City Image
	  const cityImage = document.createElement('img');
	  cityImage.setAttribute('src', `${image}`);
	  cityImage.setAttribute('alt', 'Image of the city');
	  // Info Title City
	  const cityInfo = document.createElement('h2');
	  cityInfo.innerHTML = `My trip to: ${city},${country}`;
	  // Info Title Date
	  const dateInfo = document.createElement('h3');
	  dateInfo.innerHTML = `Departing: ${date}`;
	  // Info Countdown
	  const countdownInfo = document.createElement('p');
	  countdownInfo.setAttribute('id', 'countdown');
	  // Info Temperature
	  const tempInfo = document.createElement('p');
	  tempInfo.innerHTML = `Typical weather for then is: ${temp}°C, Max: ${maxTemp}°C, Min: ${minTemp}°C`;
	  // Info Description	
	  const descInfo = document.createElement('p');
	  descInfo.innerHTML = `${description}`;
	  // Link
	  const link = document.createElement('a');
	  link.setAttribute('href', `${date}`);
	  link.setAttribute('target', '_blank');
	  link.textContent = city;
	  // Append to booktrips container
	  linkInfo.append(cityImage, cityInfo, dateInfo, countdownInfo, tempInfo, descInfo);
	  item.append(closeIcon, linkInfo);
	  booktripsContainer.appendChild(item);
	});
  }
  

export { 
	countdownTimer,
	buildBooktrips
 }