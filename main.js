//select Letters Cont
let containerL = document.querySelector(".letters");
//Letters
let letters = "";
for (let i = 65; i <= 90; i++) {
  letters = String.fromCharCode(i);
  let span = document.createElement("span");
  span.className = "letter-box";
  span.innerText = letters;
  containerL.appendChild(span);
}
let arrL = Array.from(letters);

// Object Of Words + Categories
const words = {
  programming: [
    "php",
    "javascript",
    "go",
    "scala",
    "fortran",
    "r",
    "mysql",
    "python",
  ],
  movies: [
    "Prestige",
    "Inception",
    "Parasite",
    "Interstellar",
    "Whiplash",
    "Memento",
    "Coco",
    "Up",
  ],
  people: [
    "Albert Einstein",
    "Hitchcock",
    "Alexander",
    "Cleopatra",
    "Mahatma Ghandi",
  ],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};

// Get Random Property
let allKeys = Object.keys(words);
let randomNumber = Math.floor(Math.random() * allKeys.length);
let randomName = allKeys[randomNumber];
// The Chosen Word
let randomNumberV = Math.floor(Math.random() * words[randomName].length);
let randomNameV = words[randomName][randomNumberV];
let ch;
let theStatus = false;
let wrongAttempts = 0;
let trueAtt = 0;
let theDraw = document.querySelector(".hangman-draw");
let f = document.getElementById("f");
let s = document.getElementById("s");
// Set Category Info
document.querySelector(".category span").innerText = randomName;

// Select Letters Guess Element
let letterGuess = document.querySelector(".letters-guess");
for (let i = 0; i < randomNameV.length; i++) {
  let span = document.createElement("span");
  if (randomNameV[i] === " ") {
    span.className = "letter-box-guess-space";
  } else span.className = "letter-box-guess";
  letterGuess.appendChild(span);
}
// Handle Clicking On Letters
let lettersC = document.querySelectorAll("span.letter-box");
lettersC.forEach((el) => {
  el.addEventListener("click", () => {
    theStatus = false;
    ch = el.innerText;
    el.classList.add("disabled");
    // If The Clicked Letter Equal To One Of The Chosen Word Letter
    Array.from(randomNameV).forEach((c, index) => {
      if (ch.toLowerCase() === c.toLowerCase()) {
        letterGuess.children[index].innerText = ch;
        theStatus = true;
        trueAtt++;
      }
    });
    // Outside Loop

    // If Letter Is Wrong
    if (theStatus !== true) {
      wrongAttempts++;
      // Add Class Wrong On The Draw Element
      theDraw.classList.add(`wrong-${wrongAttempts}`);
      if (wrongAttempts === 8) {
        faield();
      }
    }
    if (randomNameV.length == trueAtt) {
      suc();
    }
  });
});

// End Game Function
function faield() {
  f.play();
  containerL.classList.add("finished");
  // Create Popup Div
  let divP = document.createElement("div");
  // Create Text
  let divText = document.createTextNode(
    `Game Over, The Word Is ${randomNameV}`
  );
  // Append Text To Div
  divP.appendChild(divText);
  // Add Class On Div
  divP.className = "popup";
  // Append To The Body
  document.body.appendChild(divP);
}
function suc() {
  s.play();
  containerL.classList.add("finished");
}
