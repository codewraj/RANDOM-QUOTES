const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "Do not watch the clock. Do what it does. Keep going. - Sam Levenson",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron"
];

const quoteDisplay = document.getElementById('quoteDisplay');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const copyBtn = document.getElementById('copyBtn');

// Function to generate a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Display a new quote on button click
newQuoteBtn.addEventListener('click', () => {
    const newQuote = getRandomQuote();
    quoteDisplay.textContent = newQuote;
});

// Copy the current quote to clipboard
copyBtn.addEventListener('click', () => {
    const quote = quoteDisplay.textContent;
    navigator.clipboard.writeText(quote)
        .then(() => {
            alert('Quote copied to clipboard!');
        })
        .catch(err => {
            alert('Failed to copy: ', err);
        });
});
