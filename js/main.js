var quotes = [
  {
    auther: "Oscar Wilde",
    text: "Be yourself; everyone else is already taken.",
  },
  {
    auther: "Frank Zappa",
    text: "So many books, so little time.",
  },
  {
    auther: "Albert Einstein",
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  },
  {
    auther: "Marcus Tullius Cicero",
    text: "A room without books is like a body without a soul.",
  },
  {
    auther: "Mahatma Gandhi",
    text: "Be the change that you wish to see in the world.",
  },
  {
    auther: "Mark Twain",
    text: "If you tell the truth, you don't have to remember anything.",
  },
  {
    auther: "Elbert Hubbard",
    text: "A friend is someone who knows all about you and still loves you.",
  },
  {
    auther: "Oscar Wilde",
    text: "Always forgive your enemies; nothing annoys them so much.",
  },
  {
    auther: "Mahatma Gandhi",
    text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
  },
  {
    auther: "Ralph Waldo Emerson",
    text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
  },
];

var lastIndex = -1;

var newQuoteBtn = document.getElementById("new-Quote"); 
var quoteWrapper = document.getElementById("quote-wrapper"); 

function generateNewQuote(){
    var randomIndex;
    var box = ''; 
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex);
  
    var newQuote = quotes[randomIndex]; 
    
    box = ` 
     <h2  class="mb-5">
     <sup><i class="fa-solid fa-quote-left fs-6"></i> </sup>
      ${newQuote.text}
     <sup><i class="fa-solid fa-quote-right fs-6"></i></sup></h2>
     <h2>--${newQuote.auther}</h2>
    `
    
    quoteWrapper.innerHTML = box;         
    lastIndex = randomIndex;
}



// Solution 2 (without repeating the quote till all quotes are shown)
// var visitedIndices = []; 

// var newQuoteBtn = document.getElementById("new-Quote");
// var quoteWrapper = document.getElementById("quote-wrapper");

// function generateNewQuote() {
//   if (visitedIndices.length === quotes.length) {
//     visitedIndices = [];
//   }

//   var randomIndex;
//   do {
//     randomIndex = Math.floor(Math.random() * quotes.length);
//   } while (visitedIndices.includes(randomIndex)); 
//   visitedIndices.push(randomIndex); 
//   var newQuote = quotes[randomIndex];

//   var box = `
//      <h2 class="mb-5">
//      <sup><i class="fa-solid fa-quote-left fs-6"></i> </sup>
//       ${newQuote.text}
//      <sup><i class="fa-solid fa-quote-right fs-6"></i></sup></h2>
//      <h2>--${newQuote.auther}</h2>
//     `;

//   quoteWrapper.innerHTML = box;
// }

// newQuoteBtn.addEventListener("click", generateNewQuote);





// Solution 3 (Shuffle the array then show them in order, best for performance unlike do while in solution 2)
// but didn't have the time to fully implement it