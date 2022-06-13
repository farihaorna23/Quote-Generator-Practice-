//making it global so that all functions can use it.
//let apiQuotes = [];

//show new quote
function newQuote() {
  //pick a random quote from apiquotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]["text"];
  console.log(quote);
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

//on load
getQuotes();
