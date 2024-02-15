const buttonRight = document.getElementById("btn-right");
const buttonLeft = document.getElementById("btn-left");
const catNoImg = document.getElementById("cat-no-img");
const catYesImg = document.getElementById("cat-yes-img");
const header = document.getElementById("main-header");
const gifContainer = document.getElementById("gif-container");
const mediaQuery = window.matchMedia("(max-width: 768px)");

const responsesAfterNo = [
  "Nervous, be my Valentine?",
  "Make memories, be mine?",
  "Story starts with yes!",
  "Love blooms, join my garden?",
  "Movie night, popcorn for two?",
  "One chance, be my Valentine?",
  "You brighten my days, please?",
  "Heart beats for you, reply?",
  "Don't break my heart, say yes!"
];

const responsesAfterYes = [
  "Perfect match, meant to be!",
  "Dreams come true, heart at ease!"
]

var counter = 0;
var calculatorCounter = 2;
var randomTopValue = 0;
var ranadomLeftValue = 0;
var randomTopIndex = 0;
var randomLeftIndex = 0;

buttonRight.addEventListener("click", () => {
  
  if(counter < 5){
    // Changing text 
    header.textContent = responsesAfterNo[counter];

    // Counter for first 5 clicks to change position 
    counter++;

    // Array of random top and left positions
    const valueTop = [-500, -400, -300, -250, 60, 100];
    const valueLeft = [-700, -600, -500, -450, 60, 100, 200, 300, 400, 500];
    
    const valueMobileTop = [ -400, -350, -300, -250, -200 ]
    const valueMobileLeft = [-230, -250, -200, -150, -100, -50];

    // Choose random index within array
    if (mediaQuery.matches) {
      randomLeftIndex = Math.floor(Math.random() * valueMobileLeft.length);
      randomTopIndex = Math.floor(Math.random() * valueMobileTop.length);

      // Get values based on random indexs
      ranadomLeftValue = valueMobileLeft[randomLeftIndex];
      randomTopValue = valueMobileTop[randomTopIndex];

    }else{
      randomLeftIndex = Math.floor(Math.random() * valueLeft.length);
      randomTopIndex = Math.floor(Math.random() * valueTop.length);

      // Get values based on random indexs
      ranadomLeftValue = valueLeft[randomLeftIndex];
      randomTopValue = valueTop[randomTopIndex];
    }
  
    // Update button position 
    buttonRight.style.left = `${ranadomLeftValue}px`;
    buttonRight.style.top = `${randomTopValue}px`;

  }else if(counter >= 5 && counter < 8){
    // Changing text 
    header.textContent = responsesAfterNo[counter];
    // Counter for next 3 clicks to resize yes button
    counter++;

    if (mediaQuery.matches) {
      var height = 5 * calculatorCounter;
      var width  = 30 * calculatorCounter;
    }else{
      // Yes buttom size calculations
      var height = 10 * calculatorCounter;
      var width  = 65 * calculatorCounter;
    }

    buttonLeft.style.padding = `${height}px ${width}px`;
    calculatorCounter++;

    // If left value of No button is more then 100 hundred then setting it as hundred only
    if(ranadomLeftValue > 100){
      buttonRight.style.left = `100px`;
    }

  }else if(counter >= 8){

    // Changing text 
    header.textContent = responsesAfterNo[counter];

    // After 3 resize of yes btn on next No click catImg and no btn is made invisible
    buttonRight.style.display = "none";
    catNoImg.style.display = "none";
  }
  
});

// CLICKING YES BUTTON 
buttonLeft.addEventListener("click", () => {
  // Yes text here used from yes array
  if(counter <= 4 ){
    header.textContent = responsesAfterYes[0];
  }else{
    header.textContent = responsesAfterYes[1];
  }

  // Both CatImg and Btn is made invisible
  buttonRight.style.display = "none";
  catNoImg.style.display = "none";
  buttonLeft.style.display = "none";
  catYesImg.style.display = "none";

  // Making yes gif visible
  gifContainer.style.display = "block";
});
