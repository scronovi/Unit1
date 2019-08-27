/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Initiating the interval variable.
var interval;

/*
Array with quotes, sources, citation and year.
*/
var quotes = [
  {quote: 'You may live to see man-made horrors beyond your comprehension.', source: `Nikola Tesla`, citation: 'Demonstration in New York', year: 1947, tags: 'Life'},
  {quote: 'If God did not exist, it would be necessary to invent him.', source: 'Voltaire', tags: 'Existential'},
  {quote: 'The worst form of inequality is to try to make unequal things equal.', source: 'Aristotle', tags: 'Existential'},
  {quote: 'If you know the enemy and know yourself you need not fear the results of a hundred battles.', source: 'Sun Tzu', tags: 'Inspirational'},
  {quote: 'The play was a great success, but the audience was a disaster.', source: 'Oscar Wilde', tags: 'Humor'},
]
/*
Function which pulls a random quote from the array.
*/
function getRandomQuote(){
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
}

/*
Function which changes the backgroundcolor using the same logic as the random quote function but accessing the background via the DOM.
This function will be called inside of the "printQuote"-function which activates on-click.
*/
function colorChanger() {
  var colors = ["#FF1493", "#c9c902", "#ff9900", "#66CDAA", "#4169E1"];
  var newColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = newColor;
}

/* 
Function which concatenates a string using the properties from the quote object in the 
random quote variable which has been pulled via the 'getRandomQuote()'-function.
*/
function printQuote(){
  var theRandomQuote = getRandomQuote();
  var stringHTML = '';
  stringHTML += '<p class="quote">' + theRandomQuote.quote + '</p>';
  stringHTML += '<p class="source">' + theRandomQuote.source;
  if (theRandomQuote.citation) {
    stringHTML += '<span class="citation">' + theRandomQuote.citation + '</span>';
  }
  if (theRandomQuote.year) {
    stringHTML += '<span class="year">' + theRandomQuote.year + '</span>';
  }
  if (theRandomQuote.tags) {
    stringHTML += '<span class="tags">' + theRandomQuote.tags + '</span>';
  }
  stringHTML += '</p>'
  document.getElementById("quote-box").innerHTML = stringHTML;
  colorChanger();
}

/*
Function which repeats the printQuote-function every 20000ms (20 seconds).
Added an alert to let user know the loop has started. 
*/
function repeater(){
  interval = setInterval(printQuote, 20000);
  alert("Loop started. Quotes will change every 20 seconds.");
}

/*
Function which stops the quote loop when button is pressed.
*/
function stopRepeating(){
  clearInterval(interval);
  alert("Loop stopped!");
}

/*
Event listener which triggers the stopRepeating-function when pressed.
*/
document.getElementById('stopRepeat').addEventListener("click", stopRepeating, false)
/*
Event listener triggers when the "Show another quote" button is pressed.
*/
document.getElementById('loadQuote').addEventListener("click", printQuote && repeater, false);