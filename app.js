'use strict'
let allDonation = [];
let total = 0;
function Donation(name, amount) {
  this.name = name;
  this.age = getRndAge(18, 30);
  this.amount = amount;
  allDonation.push(this);
  total += parseInt(this.amount);
  saveToLs();
}

//  let os= new Donation('osa',100);
//  let bs= new Donation('osa',150);
//  console.log(allDonation,total);

function getRndAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let tabel = document.getElementById('table');
let spanTotal = document.getElementById('totalValue');

Donation.prototype.render = function () {
  let row = document.createElement('tr');
  tabel.appendChild(row);
  let cell = document.createElement('td');
  row.appendChild(cell)
  cell.textContent = this.name

  cell = document.createElement('td');
  row.appendChild(cell)
  cell.textContent = this.age

  cell = document.createElement('td');
  row.appendChild(cell)
  cell.textContent = this.amount
  spanTotal.textContent = total;

}
// os.render();

let form = document.getElementById('form')
form.addEventListener('submit', handellsubmit)

function handellsubmit(event) {
  event.preventDefault();
  let name = event.target.name.value;
  let amount = event.target.amount.value;
  // console.log(name,amount);
  let obj = new Donation(name, amount);
  obj.render();
}
// function printTotal()
// {
//     let p=douct
// }

function saveToLs() {
  let data = JSON.stringify(allDonation);
  localStorage.setItem('donatin', data);

}

function gitDonationItem() {
  let data = localStorage.getItem('donatin')
  data = JSON.parse(data);
  if (data) {
    for (let i = 0; i < data.length; i++) {
      new Donation(data[i].name, data[i].amount)


    }
  }
}
gitDonationItem();
for (let i = 0; i < allDonation.length; i++) {
  allDonation[i].render();
}

