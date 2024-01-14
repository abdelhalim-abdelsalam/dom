
let btn =document.querySelector('#new-quote')
const person = document.querySelector('.person')
const quote= document.querySelector('.quote')
const quotes = [
  {
    person:"Albert Einstein",
    quote: "The only way to learn is by doing something you enjoy."
  },
  {
    person:"Buddha",
    quote: "Do not worry about what you can’t do, focus on what you can ."
  },
  {
    person:"Mahatma Gandhi",
    quote: "Be the change that you wish to see in the world."
  },
]


btn.addEventListener('click',function(){
  const randomNumber = Math.floor(Math.random()*quotes.length);
  person.textContent = quotes[randomNumber].person;
  quote.textContent = quotes[randomNumber].quote;
  })
