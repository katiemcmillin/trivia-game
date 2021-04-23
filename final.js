/*Displays User Name and Final Score */
document.querySelector('h1#name').textContent = `${localStorage.getItem('name')}:`;
document.querySelector('h1#final-score').textContent = `Final Score: ${localStorage.getItem('finalScore')}/10`;
let finalImage = document.createElement('img');
let string = localStorage.getItem('finalScore');

/* Display different IMG based on user score */
if (localStorage.getItem('finalScore') < 6) {
  finalImage.src = './Game-Of-Thrones-meme.jpeg';
  document.querySelector('#final-image').append(finalImage);
} else {
  finalImage.src = './Tyrion-meme.jpeg';
  document.querySelector('#final-image').append(finalImage);
}