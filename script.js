// Get DOM elements
const dynamicText = document.getElementById('dynamic-text');
const changeTextBtn = document.getElementById('change-text-btn');
const changeStyleBtn = document.getElementById('change-style-btn');
const addElementBtn = document.getElementById('add-element-btn');
const removeElementBtn = document.getElementById('remove-element-btn');
const elementContainer = document.getElementById('element-container');

// Change text content dynamically
changeTextBtn.addEventListener('click', () => {
    dynamicText.textContent = 'Text changed dynamically!';
});

// Modify CSS styles via JavaScript
changeStyleBtn.addEventListener('click', () => {
    dynamicText.style.color = 'blue';
    dynamicText.style.fontSize = '20px';
    dynamicText.style.backgroundColor = '#f0f0f0';
    dynamicText.style.padding = '10px';
});

// Add a new element
addElementBtn.addEventListener('click', () => {
    const newElement = document.createElement('p');
    newElement.textContent = 'New element added!';
    newElement.style.color = 'green';
    elementContainer.appendChild(newElement);
});

// Remove the last added element
removeElementBtn.addEventListener('click', () => {
    const lastElement = elementContainer.lastElementChild;
    if (lastElement) {
        elementContainer.removeChild(lastElement);
    } else {
        alert('No elements to remove!');
    }
});