// TODO: write your code here
const circuitPLayer1 = document.querySelectorAll('#player1-race td');


document.addEventListener('keyup', (event) => {
  if (event.key === 'a') {
    const player1 = document.querySelector('#player1-race .active');
    player1.classList.remove('active');
    player1.nextElementSibling.classList.add('active');
    if (player1.nextElementSibling.id === 'finish-player') {
      alert('🏁 Congrats to the red player, he wins ! 🏁');
      window.location.href = window.location.href;
    }
  }
  if (event.key === 'p') {
    const player2 = document.querySelector('#player2-race .active');
    player2.classList.remove('active');
    player2.nextElementSibling.classList.add('active');
    if (player2.nextElementSibling.id === 'finish-player') {
      alert('🏁 Congrats to the yellow player, he wins ! 🏁');
      window.location.href = window.location.href;
    }
  }
});
