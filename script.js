// RECUPERATE BUTTONS
let getFactBtn = document.getElementById('get-fact-btn');
let ranFactBtn = document.getElementById('ran-fact-btn');

// RECUPERATE FACT DIV
let fact = document.querySelector('.fact');

// NUMBERS API URL
let url = "http://numbersapi.com/";

// GET A RANDOM FACT WITH A NUMBER
let fetchFact = (num) => {
  let finalUrl = url + num;
  fetch(finalUrl)
    .then(response => response.text())
    .then(data => {
      fact.style.display = 'block';
      fact.innerHTML = `<h2>${num}</h2>
      <p>${data}</p>`;
      document.querySelector('.container').append(fact);
    })
}

// GET THE NUMBER FROM THE INPUT
let getFact = () => {
  let num = document.getElementById('number').value;
  // CHECK IF THE INPUT IS NOT EMPTY AND BETWEEN 0 AND 300
  if (num) {
    if (num >= 0 && num <= 300) {
      fetchFact(num);
    }
    // IF NOT, DISPLAY A MESSAGE
    else {
      fact.style.display = 'block';
      fact.innerHTML = `<p class='msg'>Please enter a number between 0 to 300 !</p>`;
    }
  }
  else {
    fact.style.display = 'block';
    fact.innerHTML = `<p class='msg'>The input cannot be empty !</p>`;
  }
}

// GET A RANDOM NUMBER BETWEEN 0 AND 300
let getRandomFact = () => {
  let num = Math.floor(Math.random() * 301);
  fetchFact(num);
}

// TRIGGER THE FUNCTION WHEN THE BUTTON IS CLICKED
getFactBtn.addEventListener('click', getFact);
ranFactBtn.addEventListener('click', getRandomFact);

// TRIGGER THE FUNCTION WHEN THE PAGE IS LOADED
window.addEventListener("load", getRandomFact)