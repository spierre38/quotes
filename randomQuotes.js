// Define an array of quotes and authors
const quotes = [
    {
      quote: "Be the change you wish to see in the world.",
      author: "Mahatma Gandhi"
    },
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      quote: "In three words I can sum up everything I've learned about life: it goes on.",
      author: "Robert Frost"
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson"
    }
  ];
  
  // Get a random quote from the array
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  // Display the quote and author
  function displayQuote() {
    const quote = getRandomQuote();
    document.getElementById("quote").textContent = quote.quote;
    document.getElementById("author").textContent = `- ${quote.author}`;
  }
  
  // Generate a new quote on button click
  document.getElementById("new-quote").addEventListener("click", displayQuote);
  
  // Display a random quote on page load
  displayQuote();
  