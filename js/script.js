/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [

  {theQuotes:"Keep your eyes on the stars, and your feet on the ground." ,source: "Theodore Roosevelt"},
  {theQuotes:"You can waste your lives drawing lines. Or you can live your life crossing them.", source:" Shonda Rhimes"},
  {theQuotes:"You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction.", source:"George Lorimer"},
  {theQuotes:"I now tried a new hypothesis: It was possible that I was more in charge of my happiness than I was allowing myself to be.", source: "Michelle Obama"},
  {theQuotes:"In a gentle way, you can shake the world.", source: "Mahatma Gandhi"},
  {theQuotes: "If opportunity doesn’t knock, build a door.", source: "Kurt Cobain"}

];

/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  let randomPicker;
  for(let i = 0;i < quotes.length;i++){
    randomPicker = Math.floor(Math.random()* quotes.length);

  }
    return console.log(quotes[randomPicker].theQuotes);

}

getRandomQuote();

/***
 * `printQuote` function
***/

function printQuote() {
  let randomQuote = getRandomQuote();
  const html = document.querySelector("main");
  //return html.innerHTML = `${randomQuote}`;
  return console.log(printQuote);
}


console.log(printQuote);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);