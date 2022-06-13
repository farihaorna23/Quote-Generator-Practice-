const quoteContainer = document.getElementById("quote-container");
const newQuoteButton = document.getElementById("new-quote");
const twitterButton = document.getElementById("twitter");
console.log(twitterButton);
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const loader = document.getElementById("loader");
//making it global so that all functions can use it.
let apiQuotes = [];

//to shhow that we are loading
function loading() {
  //we don't want it to be hidden
  loader.hidden = false;
  //we only want to see the loader and nothing else
  quoteContainer.hidden = true;
}

function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

//show new quote
function newQuote() {
  loading();
  //pick a random quote from apiquotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  complete();
  return quote; //will return both quote & author
}

// Get quotes from API
async function getQuotes() {
  loading();
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
  let getQuote = newQuote(); //An object. It will have both quote & author
  console.log(getQuote);
  ////check quote length to determine styling
  if (getQuote["text"].length > 100) {
    quote.classList.add("long-quote");
  } else {
    quote.classList.remove("long-quote");
  }
  quote.textContent = getQuote["text"];
  if (!getQuote["author"]) {
    author.textContent = "Unknown";
  } else {
    author.textContent = getQuote["author"];
  }
});

//Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.textContent} - ${author.textContent}`;
  //_blank will open twiiter in a new tab
  window.open(twitterUrl, "_blank");
}

twitterButton.addEventListener("click", tweetQuote);

//on load
getQuotes();
