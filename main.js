let btnBack = document.getElementsByClassName('button1');
let btnNext = document.getElementsByClassName('button2');
let cards = document.querySelectorAll('.cards');
let atual = 0;

btnNext[0].addEventListener('click', function () {
  if (atual == cards.length - 1) return
  atual++;
  cards[atual].classList.toggle('select');
  cards[atual].classList.add('transition')
})

btnBack[0].addEventListener('click', function () {
  cards[atual].classList.add('transition')
  cards[atual].classList.remove('select');
  atual--;
  cards[atual].classList.add('select');
})
