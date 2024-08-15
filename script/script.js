// Function to add event listeners to elements with class 'letter'
function addEventListenersToLetters() {
  // Select all elements with the class 'letter'
  const letterElements = document.querySelectorAll('.letter');
  const imageElement = document.querySelector('.image');
  const popup = document.getElementById('overlay');
  const popupClose = document.getElementById('close-overlay');


  // Close overlay
  popupClose.addEventListener('click', () => {
    popup.classList.remove('overlay-show');
  });


  // For  each letter
  letterElements.forEach(element => {

      // Click event
      element.addEventListener('click', () => {
        const letterValue = element.getAttribute('data-letter');
        console.log('Letter element clicked:', letterValue);
        // resultDiv.textContent = letterValue;

        popup.classList.add('overlay-show');




      });

      // Mouseover event 
      element.addEventListener('mouseover', () => {
        // element.style.backgroundColor = 'lightblue';
        // const newImageUrl = element.getAttribute('data-image-url');
        const letterValue = element.getAttribute('data-letter');
        const imageElement = document.querySelector('.img-' + letterValue);

        const newImageUrl = 'img/Letters-Hover/' + letterValue + '.gif';
        // console.log('image:', newImageUrl);
        imageElement.src = newImageUrl;
      });

      // Mouseout event 
      element.addEventListener('mouseout', () => {
        // element.style.backgroundColor = '';
        const letterValue = element.getAttribute('data-letter');
        const imageElement = document.querySelector('.img-' + letterValue);

        const newImageUrl = 'img/Letters/' + letterValue + '.png';
        imageElement.src = newImageUrl;
      });

  });
}

// Call the function to add the event listeners
addEventListenersToLetters();



function getRandomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
}

let mouseMoveTimeout;
let randomLetterInterval;

function startRandomLetterTimer() {
  // Clear any existing interval to prevent multiple intervals from running
  clearInterval(randomLetterInterval);

  // Start the 9-second interval
  randomLetterInterval = setInterval(() => {
      const randomLetter = getRandomLetter();
      console.log(randomLetter);
      // Animate random letter
      // const imageElement = document.querySelector('.img-' + randomLetter);

      // const newImageUrl = '/img/Letters-Hover/' + randomLetter + '.gif';
      // imageElement.src = newImageUrl;
  }, 1000);

}

function resetMouseMoveTimer() {
  // Clear any existing timeout
  clearTimeout(mouseMoveTimeout);

  // Clear the interval if the mouse moves
  clearInterval(randomLetterInterval);

  // Start a new timeout that waits for 5 seconds of inactivity
  mouseMoveTimeout = setTimeout(() => {
      startRandomLetterTimer();
  }, 5000); // 5000 milliseconds = 5 seconds
}

// Attach the resetMouseMoveTimer function to the mousemove event
document.addEventListener('mousemove', resetMouseMoveTimer);

// Start the initial timer in case the mouse doesn't move right away
resetMouseMoveTimer();

