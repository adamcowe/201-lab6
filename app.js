'use strict';
//lab6, build objects for salmon cookies locations//
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];
var pikesPlace = {
  name: '1st and Pike',
  address: '1st and Pike',
  emptyArray:[],
  creatRandomCustCount: function(min, max) {
    min = parseInt(pikesPlace.minCust);
    max = parseInt(pikesPlace.maxCust);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  cooksPerDay: function() {
    var ranNum = pikesPlace.creatRandomCustCount();
    var avgDay = pikesPlace.avgCookPerCust;
    return parseInt(ranNum * avgDay);

  },
  minCust: '23',
  maxCust: '65',
  avgCookPerCust: '6.3',
  createReport() {
    for (var i = 0; i < hours.length; i++) {
      this.emptyArray.push(this.cooksPerDay());
    }
    return this.emptyArray;
  },
  dayTotal() {
    var cooklist = document.getElementById('cook-list-pp');
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.emptyArray[i]}`;
      cooklist.appendChild(liEl);
    }
  }
};
//console.log(hours);
//console.log(pikesPlace);
//pikesPlace.creatRandomCustCount();
pikesPlace.cooksPerDay();
pikesPlace.createReport();
pikesPlace.dayTotal();

var seatac = {
  name: 'Sea Tac Airport',
  address: '1234 Airport Way',
  emptyArray2:[],
  creatRandomCustCount: function(min, max) {
    min = parseInt(seatac.minCust);
    max = parseInt(seatac.maxCust);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  cooksPerDay: function() {
    var ranNum = seatac.creatRandomCustCount();
    var avgDay = seatac.avgCookPerCust;
    return parseInt(ranNum * avgDay);

  },
  minCust: '3',
  maxCust: '24',
  avgCookPerCust: '1.2',
  createReport() {
    for (var i = 0; i < hours.length; i++) {
      this.emptyArray2.push(this.cooksPerDay());
    }
    return this.emptyArray;
  },
  dayTotal() {
    var cooklist = document.getElementById('cook-list-sea');
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.emptyArray2[i]}`;
      cooklist.appendChild(liEl);
    }
  }
};
//console.log(hours);
//console.log(seatac);
//seatac.creatRandomCustCount();
seatac.cooksPerDay();
seatac.createReport();
seatac.dayTotal();

var seattlecenter = {
  name: 'Seattle Center',
  address: '1234 Center Way',
  emptyArray2:[],
  creatRandomCustCount: function(min, max) {
    min = parseInt(seattlecenter.minCust);
    max = parseInt(seattlecenter.maxCust);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  cooksPerDay: function() {
    var ranNum = seattlecenter.creatRandomCustCount();
    var avgDay = seattlecenter.avgCookPerCust;
    return parseInt(ranNum * avgDay);

  },
  minCust: '11',
  maxCust: '38',
  avgCookPerCust: '3.7',
  createReport() {
    for (var i = 0; i < hours.length; i++) {
      this.emptyArray2.push(this.cooksPerDay());
    }
    return this.emptyArray;
  },
  dayTotal() {
    var cooklist = document.getElementById('cook-list-sc');
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.emptyArray2[i]}`;
      cooklist.appendChild(liEl);
    }
  }
};

//console.log(hours);
//console.log(seattlecenter);
//seattlecenter.creatRandomCustCount();
seattlecenter.cooksPerDay();
seattlecenter.createReport();
seattlecenter.dayTotal();

var caphill = {
  name: 'Capitol Hill',
  address: '1234 Capitol Way',
  emptyArray2:[],
  creatRandomCustCount: function(min, max) {
    min = parseInt(caphill.minCust);
    max = parseInt(caphill.maxCust);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  cooksPerDay: function() {
    var ranNum = caphill.creatRandomCustCount();
    var avgDay = caphill.avgCookPerCust;
    return parseInt(ranNum * avgDay);

  },
  minCust: '20',
  maxCust: '38',
  avgCookPerCust: '2.3',
  createReport() {
    for (var i = 0; i < hours.length; i++) {
      this.emptyArray2.push(this.cooksPerDay());
    }
    return this.emptyArray;
  },
  dayTotal() {
    var cooklist = document.getElementById('cook-list-ch');
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.emptyArray2[i]}`;
      cooklist.appendChild(liEl);
    }
  }
};
//console.log(hours);
//console.log(caphill);
//caphill.creatRandomCustCount();
caphill.cooksPerDay();
caphill.createReport();
caphill.dayTotal();

var alki = {
  name: 'Alki',
  address: '1234 Alki Way',
  emptyArray2:[],
  creatRandomCustCount: function(min, max) {
    min = parseInt(alki.minCust);
    max = parseInt(alki.maxCust);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  cooksPerDay: function() {
    var ranNum = alki.creatRandomCustCount();
    var avgDay = alki.avgCookPerCust;
    return parseInt(ranNum * avgDay);

  },
  minCust: '2',
  maxCust: '16',
  avgCookPerCust: '4.6',
  createReport() {
    for (var i = 0; i < hours.length; i++) {
      this.emptyArray2.push(this.cooksPerDay());
    }
    return this.emptyArray;
  },
  dayTotal() {
    var cooklist = document.getElementById('cook-list-al');
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.emptyArray2[i]}`;
      cooklist.appendChild(liEl);
    }
  }
};
//console.log(hours);
//console.log(alki);
//alki.creatRandomCustCount();
alki.cooksPerDay();
alki.createReport();
alki.dayTotal();
