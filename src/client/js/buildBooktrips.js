const booktripsContainer = document.getElementById('booktrips-container');


function buildBooktrips() {
    // Remove all bookmark elements
	booktripsContainerContainer.textContent = '';
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
		<p class="info-countdown">${city}, ${country} is </p>
		<p class="info-temp">Typical weather for then is: ${temp}°C, Max: ${maxTemp}°C, Min: ${minTemp}°C</p>
		<p class="info-description-fineprint">${description}</p>
		`;

	});

}