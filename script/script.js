// Function to add event listeners to elements with class 'letter'
function addEventListenersToLetters() {
  // Select all elements with the class 'letter'

  // Close overlay
  popupClose.addEventListener('click', () => {
    popup.classList.remove('overlay-show');
  });

  // Close about overlay
  aboutClose.addEventListener('click', () => {
    about.classList.remove('overlay-show');
  });



  // For  each letter
  letterElements.forEach(element => {

      // Click event
      element.addEventListener('click', () => {
        const letterValue = element.getAttribute('data-letter');
        console.log('Letter element clicked:', letterValue);

        
        displayDetails(letterValue.toUpperCase());

        popup.classList.add('overlay-show');

      });

      // Mouseover event 
      element.addEventListener('mouseover', () => {
        const letterValue = element.getAttribute('data-letter');
        const imageElement = document.querySelector('.img-' + letterValue);
        const newImageUrl = 'img/Letters-Hover/' + letterValue + '.gif';
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

      // Animate random letter
      // const imageElement = document.querySelector('.img-' + randomLetter);

      const newImageUrl = '/img/Letters-Hover/' + randomLetter + '.gif';
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

function showAboutBox(){
  about.classList.add('overlay-show');
}


function getAlphabetIndex(letter) {
  // Convert the letter to uppercase to handle both cases
 let upperLetter = letter.toUpperCase();

  // Get the ASCII value of the letter and subtract the ASCII value of 'A' + 1
  let position = upperLetter.charCodeAt(0) - 'A'.charCodeAt(0);

  return position;
}


function displayDetails(letter) {
  
  // If no alphabet then exit
  if (typeof alphabet === "undefined") { 
    console.log("Data file not found"); 
    return;
  }
      
  let letterIndex  = getAlphabetIndex(letter);
  let letterLower = letter.toLowerCase();

  const currentLetter = alphabet[letterIndex];

  const w_image = document.getElementById("w_image");
  const w_title = document.getElementById('w_title');
  const w_body = document.getElementById('w_body');
  const w_links = document.getElementById('w_links');


  w_image.innerHTML = `<img src='img/Letters/${letterLower}.webp'>`;
  w_title.innerHTML = `${currentLetter.title}`;
  w_body.innerHTML = `${currentLetter.body}`;
  w_links.innerHTML = `${currentLetter.links}`;

 
}





// Initialisation 

const letterElements = document.querySelectorAll('.letter');
const imageElement = document.querySelector('.image');
const popup = document.getElementById('overlay');
const about = document.getElementById('overlay-about');
const popupClose = document.getElementById('close-overlay');
const aboutClose = document.getElementById('close-about');




// Attach the resetMouseMoveTimer function to the mousemove event
document.addEventListener('mousemove', resetMouseMoveTimer);

// Start the initial timer in case the mouse doesn't move right away
resetMouseMoveTimer();

// Call the function to add the event listeners
addEventListenersToLetters();

// showAboutBox();

