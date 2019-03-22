'use strict';
//lab6, lab7 build objects for salmon cookies locations//

'use strict';
//lab6, build objects for salmon cookies locations//
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];
var salesData = document.getElementById('sales-data');

function Stores(storeName, minCustHourly, maxCustHourly, avgCooksPerCust) {
  this.storeName = storeName;
  this.minCustHourly = minCustHourly;
  this.maxCustHourly = maxCustHourly;
  this.avgCooksPerCust = avgCooksPerCust;
  this.custPerHour = []; //make empty array
  this.cooksPerHour = []; //make empty array
  this.dailyTotal = 0; //start at zero
  Stores.all.push(this);
}
Stores.prototype.custPerHourCalc = function() {
  for (var i = 0; i < hours.length; i++) {
    this.custPerHour.push(random(this.minCustHourly, this.maxCustHourly));
  }
};
//console.log(Stores.prototype.custPerHourCalc());
Stores.prototype.cooksPerHourCalc = function() {
  this.custPerHourCalc();
  for (var i = 0; i < hours.length; i++) {
    var hourUnit = Math.ceil(this.custPerHour[i] * this.avgCooksPerCust);
    this.cooksPerHour.push(hourUnit);
    this.dailyTotal += hourUnit;
  }
};

Stores.prototype.render = function() {
  this.cooksPerHourCalc();
  var trRow = document.createElement('tr');

  var tdRow = document.createElement('td');
  tdRow.textContent = this.storeName;
  trRow.appendChild(tdRow);

  for (var i = 0; i < hours.length; i++) {
    tdRow = document.createElement('td');
    tdRow.textContent = this.cooksPerHour[i];
    trRow.appendChild(tdRow);
  }

  var thRow = document.createElement('th');
  thRow.textContent = this.dailyTotal;
  trRow.appendChild(thRow);

  salesData.appendChild(trRow);
};

Stores.all = [];
new Stores('Pike\'s Place', 23, 65, 6.3);
new Stores('Sea Tac Airport', 3, 24, 1.2);
new Stores('Seattle Center', 11, 38, 3.7);
new Stores('Capitol Hill', 20, 38, 2.3);
new Stores('Alki', 2, 16, 4.6);

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var hourTotals = 0;
var grandTotal = 0;

function buildHeader() {
  var trRow = document.createElement('tr');
  var thRow = document.createElement('th');
  thRow.textContent = 'Store Locations';
  trRow.appendChild(thRow);

  for (var i = 0; i < hours.length; i++) {
    thRow = document.createElement('th');
    thRow.textContent = hours[i];
    trRow.appendChild(thRow);
  }
  thRow = document.createElement('th');
  thRow.textContent = 'Store Totals';
  trRow.appendChild(thRow);

  salesData.appendChild(trRow);
}
function buildFooter() {
  var trRow = document.createElement('tr');
  var thRow = document.createElement('th');
  thRow.textContent = 'Hourly Totals for All Stores';
  trRow.appendChild(thRow);

  for (var first = 0; first < hours.length; first++) {
    hourTotals = 0;
    for (var second = 0; second < Stores.all.length; second++){
      hourTotals += Stores.all[second].cooksPerHour[first];
      grandTotal += Stores.all[second].cooksPerHour[first];
    }
    thRow = document.createElement('th');
    thRow.textContent = hourTotals;
    trRow.appendChild(thRow);
  }
  thRow = document.createElement('th');
  thRow.textContent = grandTotal;
  trRow.appendChild(thRow);

  salesData.appendChild(trRow);
}

function renderTable() {
  salesData.innerHTML = '';
  buildHeader();
  for(var i = 0; i < Stores.all.length; i++) {
    Stores.all[i].render();
  }
  buildFooter();
}
renderTable();
