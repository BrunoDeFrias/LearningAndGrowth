/* eslint-disable no-multiple-empty-lines */
/* eslint-disable prefer-const */
/* eslint-disable import/extensions */

import runChallenges from "../spec/split_the_bill_examiner.js";

const splitTheBill = (group) => {
  const totalExpenses = Object.values(group).reduce((total, expense) => total + expense, 0);
  const averageExpense = totalExpenses / Object.keys(group).length;
  const balances = {};
  Object.keys(group).forEach((member) => {
    balances[member] = group[member] - averageExpense;
  });
  return balances;
};

const rows = document.querySelectorAll('tr');
const group = {};
rows.forEach((row) => {
  const members = row.querySelector('th').innerHTML;
  const expense = parseInt(row.querySelector('td').innerHTML, 10);
  group[members] = expense;
});
console.log(group);

const updatePriceList = () => {
  // TODO 2: Call the `splitTheBill(group)` function
  // and display the results of what everyone needs to pay in the HTML
  const billResults = splitTheBill(group);
  const table = document.querySelector('table');
  const divContainer = table.insertAdjacentHTML('beforeend', '<div></div>');
  const ul = document.createElement('ul');
  const participants = Object.keys(billResults);
  const amounts = Object.values(billResults);
  amounts.forEach((amount, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${participants[index]} has an amount of ${amount}`;
    ul.appendChild(listItem);
  });
  divContainer.appendChild(ul);
};

// Do not remove these lines:
if (typeof window === "object") {
  document.addEventListener("DOMContentLoaded", () => {
    updatePriceList();
  });
}

// module.exports = splitTheBill; // Do not remove this line.
runChallenges(splitTheBill);
export { splitTheBill };
