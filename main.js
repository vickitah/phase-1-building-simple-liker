// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Select all hearts
const hearts = document.querySelectorAll(".like-glyph");

// Add event listeners
hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        // Toggle the heart
        if (heart.innerText === "♡") {
          heart.innerText = "♥";
          heart.classList.add("activated-heart");
        } else {
          heart.innerText = "♡";
          heart.classList.remove("activated-heart");
        }
      })
      .catch((error) => {
        // Show error modal
        const modal = document.getElementById("modal");
        modal.classList.remove("hidden");
        modal.innerText = error;
        
        // Hide modal after 3 seconds
        setTimeout(() => modal.classList.add("hidden"), 3000);
      });
  });
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
