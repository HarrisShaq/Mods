import { getAppetizers } from './appetizers.mjs';
import { getDrinks } from './drinks.mjs';
import { getEntrees } from './entrees.mjs';
import { getDesserts } from './desserts.mjs';
import { getSides } from './sides.mjs';

const restaurantName = "Ms. Cindy's Eatery";

// Function to append messages to the log container
function addLogMessage(message) {
    const logElement = document.getElementById('log');
    logElement.innerHTML += `<br>${message}`;
}

// Function to display the menu
function displayMenu() {
    addLogMessage(`Welcome to ${restaurantName}!`);
    addLogMessage('\nAppetizers:');
    getAppetizers().forEach(item => addLogMessage(`${item.name}: $${item.price.toFixed(2)}`));

    addLogMessage('\nDrinks:');
    getDrinks().forEach(item => addLogMessage(`${item.name}: $${item.price.toFixed(2)}`));

    addLogMessage('\nEntrees:');
    getEntrees().forEach(item => addLogMessage(`${item.name}: $${item.price.toFixed(2)}`));

    addLogMessage('\nDesserts:');
    getDesserts().forEach(item => addLogMessage(`${item.name}: $${item.price.toFixed(2)}`));

    addLogMessage('\nSides:');
    getSides().forEach(item => addLogMessage(`${item.name}: $${item.price.toFixed(2)}`));
}

// Ensure audio plays on page load
window.addEventListener('load', () => {
    const audioElement = document.getElementById('background-audio');
    if (audioElement) {
        audioElement.play().catch(error => {
            console.error('Audio playback failed:', error);
        });
    }

    // Call displayMenu to populate the log
    displayMenu();
});
