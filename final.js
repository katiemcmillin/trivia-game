
document.querySelector('h1#name').textContent = `${localStorage.getItem('name')}:`;
document.querySelector('h1#final-score').textContent = `Final Score: ${localStorage.getItem('finalScore')}`;