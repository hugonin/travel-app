const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const cityNameEl = document.getElementById('city-name');

// Show Modal, Focus on Input
function showModal() {
	modal.classList.add('show-modal');
	cityNameEl.focus();
}

export { 
    showModal
}