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
let timer = 2000;
//This is an array that contains 6 objects, with 2 or 4 properties.
const quotes = [
  
  {theQuote:"Keep your eyes on the stars, and your feet on the ground.", source: "Theodore Roosevelt"},
  {theQuote:"You can waste your lives drawing lines. Or you can live your life crossing them.", source: "Shonda Rhimes", citation: "from an interview. "},
  {theQuote:"You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction.", source:"George Lorimer", citation: "Ted Talk ", tags:"New-York."},
  {theQuote:"I now tried a new hypothesis: It was possible that I was more in charge of my happiness than I was allowing myself to be.", source: "Michelle Obama", year:"2010"},
  {theQuote:"In a gentle way, you can shake the world.", source: "Mahatma Gandhi",citation: "from a meeting "},
  {theQuote:"If opportunity doesn’t knock, build a door.", source: "Kurt Cobain", citation: "from convention "}

];

/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
    //this function generate a random number between 0 and the amount of object my array containes. Using the ".length" methode/function.
    let randomPicker;
    for(let i = 0;i < quotes.length;i++){
      randomPicker = Math.floor(Math.random()* quotes.length);
    }  
    //The random number is associated to a index of the array and return the entire object including all the property that it containe.
    return quotes[randomPicker];
}


/***
 * `printQuote` function
***/
function printQuote() {
    //this function will seperate the different property of my object,connect it to the index file and to place them in the correct order on the website.
    let x = getRandomQuote();
    let finalQuote = `<p class="quote"> ${x.theQuote} </p><p class="source"> ${x.source}`;
    
    //This if statement check either the obj randomQuote has a property citation with a boolean. If true the code enter the if block if false it doesnt enter the if block

    if(x.citation){   
        //if true the value will be add to my finalSource variable.
        finalQuote += `<span class="citation"> ${x.citation} </span>`;
    }
    if(x.year){
        finalQuote += `<span class="year"> ${x.year} </span>`;
    }
    if(x.tags){
        finalQuote += `
        <span class="citation"> ${x.tags} </span>`;
    }
  
    finalQuote += `</p>`;

    document.getElementById('quote-box').innerHTML = finalQuote;
}
/* 
  //I attempt to go for the exceed expectation grade but too much unknow information so i wasnt able to finish each step.
  
  //This set the interval of when the page will generate a new quote. which works but only 1 time use then i couldnt figure out how to make it work multiple time.
  //let myIntervalGenerator = setInterval(printQuote,2000);

  function stopMyInterval(){
    clearInterval(myIntervalGenerator);
  }

  let rgbGenerator = [];
  //This generateRandomColor generate 3 integer and put it in a array to define the rgb color of the background.
  //The function works and return me 3 int but cant make the connection properly with .body so it doesnt take effect on the website.

  function generateRandomColor(){
      let maxRange = 255;
      
      //loop 3 time and put it in a array.
      for(let i = 0;i < 3;i++){
        let r = Math.floor(Math.random()* maxRange)+1;
        rgbGenerator.push(r);
        }
        var a = rgbGenerator[0];
        var b = rgbGenerator[1];
        var c = rgbGenerator[2];
        
        let randomRGB = "'rgb(" + a + "," + b + "," + c + ")'";

        return document.body.style.backgroundColor = randomRGB;
}
 */

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

