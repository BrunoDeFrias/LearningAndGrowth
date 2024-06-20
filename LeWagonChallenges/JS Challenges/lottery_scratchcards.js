// TODO: Write your gambling application here.
const scratchCard = document.querySelectorAll('.scratchcard');
const selectBalance = document.getElementById('balance');
const amount = selectBalance.innerHTML;
let balance = parseInt(amount, 10);

scratchCard.forEach((card) => {
  card.addEventListener('click', (event) => {
    const selectedCard = event.currentTarget;
    balance -= 10;
    balance += parseInt(selectedCard.dataset.amount, 10);
    selectedCard.dataset.scratched = 'true';
    selectedCard.innerHTML = `${selectedCard.dataset.amount}€`;
    if (balance === 0) {
      const footer = document.getElementById('footer');
      footer.innerHTML = 'Game Over 👾';
    } else {
      selectBalance.innerHTML = `${balance}`;
    }
  }, { once: true });
});
