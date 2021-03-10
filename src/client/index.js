import { performAction } from './js/app'
import {countdownTimer } from './js/countdown'
import { showModal } from './js/showModal'

import './styles/style.scss'

// Event listener to add function to existing HTML DOM element 
document.getElementById('generate').addEventListener('click', performAction);
// Modal Event Listeners
document.getElementById('show-modal').addEventListener('click', showModal);
document.getElementById('close-modal').addEventListener('click', () => modal.classList.remove('show-modal'));
window.addEventListener('click', (e) => (e.target === modal ? modal.classList.remove('show-modal') : false));


export { 
    performAction, 
    countdownTimer,
    showModal
 }