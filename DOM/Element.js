// Create a new element
const newElement = document.createElement('div');
newElement.textContent = 'Hello, world!';

// Add the new element to the document
document.body.appendChild(newElement);

// Select an existing element
const existingElement = document.querySelector('h1');

// Change the text content of the existing element
existingElement.textContent = 'Hello, GitHub Copilot!';

// Add a class to the existing element
existingElement.classList.add('highlight');

// Remove a class from the existing element
existingElement.classList.remove('highlight');

// Add an event listener to the existing element
existingElement.addEventListener('click', () => {
    console.log('Element clicked!');
});

// Remove the existing element from the document
existingElement.remove();