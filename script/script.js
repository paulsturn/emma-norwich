// Function to add event listeners to elements with class 'letter'
function addEventListenersToLetters() {
  // Select all elements with the class 'letter'

  // Close overlay
  popupClose.addEventListener('click', () => {

    tint.classList.remove("visible");
    tint.classList.add("hidden");

    popup.classList.remove("visible");
    popup.classList.add("hidden");

  });

  // Close About overlay
  aboutClose.addEventListener('click', () => {

    tint.classList.remove("visible");
    tint.classList.add("hidden");

    about.classList.remove("visible");
    about.classList.add("hidden");

  });


  // For  each letter
  letterElements.forEach(element => {

      // Click event
      element.addEventListener('click', () => {
        const letterValue = element.getAttribute('data-letter');
        
        displayDetails(letterValue.toUpperCase());

        tint.classList.remove("hidden");
        tint.classList.add("visible");

        popup.classList.remove("hidden");
        popup.classList.add("visible");

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

  // Start the interval
  randomLetterInterval = setInterval(() => {
    removeAnimations();

    // Animate random letter
    const letterValue = getRandomLetter();
    const imageElement = document.querySelector('.img-' + letterValue);
    const newImageUrl = 'img/Letters-Hover/' + letterValue + '.gif';
    imageElement.src = newImageUrl;

  }, 6000);

}

function removeAnimations(){

  for (let i = 0; i < 26; i++) {
    let letter = String.fromCharCode(97 + i);
    
    const imageElement = document.querySelector('.img-' + letter);
    const newImageUrl = 'img/Letters/' + letter + '.png';

    imageElement.src = newImageUrl;
  }


}


function resetMouseMoveTimer() {
  // Clear any existing timeout
  clearTimeout(mouseMoveTimeout);

  // Clear the interval if the mouse moves
  clearInterval(randomLetterInterval);

  // Start a new timeout that waits for n seconds of inactivity
  mouseMoveTimeout = setTimeout(() => {
      startRandomLetterTimer();
  }, 6000); // 5000 milliseconds = 5 seconds
}

function showAboutBox(){

  // initial popup hidden
  popup.classList.remove("visible");
  popup.classList.add("hidden");

  tint.classList.remove("hidden");
  tint.classList.add("visible");

  about.classList.remove("hidden");
  about.classList.add("visible");
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
  // w_links.innerHTML = `${currentLetter.links}`;

  var subChildHtml = '';

  for (const key in currentLetter.links) {
    if (currentLetter.links.hasOwnProperty(key)) {

      var linkURL = currentLetter.links[key];
      var linkText = linkURL;

      // append to result
      subChildHtml += '<li><a href="' + linkURL + '" target="_blank">' + linkText + '</a></li>';

    } 


    if (subChildHtml != "") {
        w_links.innerHTML = '<h5>More reading</h5><ul class="links">' + subChildHtml + '</ul>';
    }

  } 

}




// Initialisation 

const letterElements = document.querySelectorAll('.letter');
const imageElement = document.querySelector('.image');
const popup = document.getElementById('overlay');
const about = document.getElementById('overlay-about');
const iconAbout = document.getElementById('iconAbout');
const popupClose = document.getElementById('close-overlay');
const aboutClose = document.getElementById('close-about');
const tint = document.getElementById('tint');



// Attach about button toggle
iconAbout.addEventListener('click', () => {
  about.classList.toggle("visible");
  about.classList.toggle("hidden");

  tint.classList.toggle("visible");
  tint.classList.toggle("hidden");
});

// Attach the resetMouseMoveTimer function to the mousemove event
document.addEventListener('mousemove', resetMouseMoveTimer);

// Start the initial timer in case the mouse doesn't move right away
resetMouseMoveTimer();

// Call the function to add the event listeners
addEventListenersToLetters();

showAboutBox();

