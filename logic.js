const quotes = [
  'When you have eliminated the Impossible, whatever remain, howevre impossible, must be completed',
  'There is nothing more deceptive than an obviuos fact',
  'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
  'I never make exceptions. An exception dispoves the rules',
  'What one man can invent, another can discover',
  'Nothing clears up a case so much as stating it to another person',
  'Education never ends, Watson. Life is a series of learning and learning until the day we die.'
];
let words = [];  //it will store all the words for the current quotes 
let wordIndex = 0;  // it is usefull to keep track where the user has reached yet
let startTime = Date.now();
const quotesElement = document.getElementById('quotes');
const messageElement = document.getElementById('message');
const typedvalueElement = document.getElementById('typed-value');

document.getElementById('start').addEventListener('click', () => {
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];
  words = quote.split( ' ');
  wordIndex = 0;
  const spanWords = words.map(function(word) { return `<span> ${word}</span>`});
  quotesElement.innerHTML = spanWords.join('');
  quotesElement.childNodes[0].className = 'highlight';
  messageElement.innerText = '';
  typedvalueElement.value = '';
  typedvalueElement.focus();
  startTime = new Date().getTime(); 
});

//adding the typing logic
typedvalueElement.addEventListener('input', () => {

  const currentWord = words[wordIndex];
  const typedValue = typedvalueElement.value;
  if(typedValue === currentWord && wordIndex === words.length-1){
    const elapsedTime = new Date().getTime() - startTime;
    const message = `CONGRATULATION! YOU FINISHED in ${elapsedTime / 1000} seconds`;
    messageElement.innerText = message;
    
}else if(typedValue.endsWith(' ') && typedValue.trim() === currentWord){
  typedvalueElement.value = '';
  wordIndex++;
  for(const wordElement of quotesElement.childNodes){
    wordElement.className= "";

  }
  quotesElement.childNodes[wordIndex].className = 'highlight';
}else if(currentWord.startsWith(typedValue)){
typedvalueElement.className = "";
}else{
  typedvalueElement.className = 'error';
}
});