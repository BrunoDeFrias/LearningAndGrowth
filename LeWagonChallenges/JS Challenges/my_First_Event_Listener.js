// TODO: React to a click on the button!
const btn = document.getElementById('clickme');
const audio = new Audio('sound.mp3');
btn.addEventListener('click', (event) => {
  console.log(event);
  console.log(event.currentTarget);
  btn.classList.add('disabled');
  btn.innerText = 'Bingo!';
  audio.play();
});
