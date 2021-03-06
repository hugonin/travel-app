const form = document.querySelector('form');
const ul = document.querySelector('ul');
const removeButton = document.querySelector('button')
const cityInput = document.getElementById('city-name');
const dateInput = document.getElementById('date-picker');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))


const liMaker = (text) => {
    const li = document.createElement('li')
    li.textContent = text
    ul.appendChild(li)

}

form.addEventListener('submit', function(e) {
    e.preventDefault()

    itemsArray.push(cityInput.value, dateInput.value)
    cityInput.value = ''
    dateInput.value = ''
})

data.forEach((item) => {
    liMaker(item)
})

removeButton.addEventListener('click', function () {
    localStorage.clear()
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild)
    }
}) 


