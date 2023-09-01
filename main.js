// Letters
let letters = "absdefgklmnquzv12";
// Get Array From Letters
let lettersArray = Array.from(letters);
// Select Letters Container
let lettersCantainer = document.querySelector(".letters");
// Generate Letters
lettersArray.forEach((letter) => {
    // Create Span
    let span = document.createElement("span");

    // Create Letter Text Node
    let textspan = document.createTextNode(letter);
    // Append The Letter To Span
    span.appendChild(textspan);
    // Add Class On Span
    span.className = "letter-box";
    // Append Span To The Letters Container
    lettersCantainer.appendChild(span);
});
// Object Of Words + Categories
const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};
// Get Random Property
let allKeys = Object.keys(words);

// Random Number Depend On Keys Length
let randomproNamber = Math.floor(Math.random() * allKeys.length);
// Category
let randomproName = allKeys[randomproNamber];
// Category Words
let randomproValue = words[randomproName];
// Random Number Depend On Words
let randomValueNumber = randomproValue[randomproNamber];
// The Chosen Word
let randomVlueVlue = randomproValue[randomproNamber];
// Select Letters Guess Element
document.querySelector(".category span").innerHTML = randomproName;

// Select Letters Guess Element

let letterGuessCantainer = document.querySelector(".letters-guess");

// Convert Chosen Word To Array

let letterAndSpace = Array.from(randomVlueVlue);
// Create Spans Depened On Word

letterAndSpace.forEach((letter) => {
    // Create Empty Span
    let Emptyspan = document.createElement("span");
    // If Letter Is Space
    if (letter === " ") {
        // Add Class To The Span
        Emptyspan.className = "with-space";
    }
    // Append Span To The Letters Guess Container
    letterGuessCantainer.appendChild(Emptyspan);
});
// Select Guess Spans
let guessSpan = document.querySelector(".letters-guess span ");

// Handle Clicking On Letters
document.addEventListener("click", (e) => {
    if (e.target.className == "letter-box") {
        e.target.classList.add("clicked");
        // Get Clicked Letter
        let theClickedLetter = document.e.target.innerHTML.toloerCase();\
        console.log(theClickedLetter)
    }
});
