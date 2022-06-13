const quoteContainer = document.getElementById("quote-container");
const newQuoteButton = document.getElementById("new-quote");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
//making it global so that all functions can use it.
let apiQuotes = [];

//show new quote
function newQuote() {
  //pick a random quote from apiquotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  return quote; //will return both quote & author
}

//Get quotes from API
async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    //handle catch error here
  }
}

newQuoteButton.addEventListener("click", function() {
  let getQuote = newQuote(); //will have both quote & author
  quote.textContent = getQuote["text"];
  author.textContent = getQuote["author"];
  // author.textContent = getQuote["author"];
});

//on load
getQuotes();
