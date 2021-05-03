
 "use strict";

 function getRndInteger(max) {
     return Math.floor(Math.random() * max);
   }
 
 const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
 
 const continar = document.getElementById('seal');
 const tableData = document.createElement('table');
 continar.appendChild(tableData);
 
 Location.prototype.getRndInteger = function(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
 };
 
 
 function Location(name, min, max, avgPerCustSales) {
  this.name = name,
  this.min = min,
  this.max = max,
  this.avg = [],
  this.avgPerCustSales = Math.ceil(avgPerCustSales),
  this.salesPerHour = [],
  this.totalSeals = 0,
  this.calc();
 }
 
 
 Location.prototype.calc = function() {
 
     
     for (let j = 0; j < hours.length; j++) {
        
         this.salesPerHour[j] = this.getRndInteger(this.min, this.max) * this.avgPerCustSales
         this.totalSeals += this.salesPerHour[j];
 
     }
     return this.totalSeals
 
 };
 
 
 
 
 
 const seattle = {
 name: 'seattle',
 min: 23,
 max: 65,
 avg: [],
 avgPerCustSales: 6.3,
 salesPerHour: [],
 totalSeals: 0,
 calc: function() {
   for (let i = 0; i < 14; i++) {
 
    this.avg.push(getRndInteger(this.min, this.max));
         }
     for (let j = 0; j < 14; j++) {
        this.salesPerHour.push(this.avgPerCustSales * this.avg[j]);
             this.totalSeals += this.salesPerHour[j];
 
 
         }
     },
 
 
 
 
 render: function() {
const sealDiv = document.getElementById('seal');
 
 const name = document.createElement('h2');
name.textContent = 'Seattle';
sealDiv.append(name);
 
const list = document.createElement('ul');
for (let i = 0; i < hours.length; i++) {
             
 const item = document.createElement('li');
 
item.textContent = hours[i] + ':' + this.salesPerHour[i];
 
 
list.append(item);
 
         }
const totalItem = document.createElement('li');
 totalItem.textContent = 'Total: ' + this.totalSeals;
list.append(totalItem);
 
sealDiv.append(list);
 
 console.log('container');
 
       
 
     },
 }
 
 seattle.calc()
  console.log(seattle.avg) 
 
 
 
 
 

 
 const tokyo = {
 name: 'Tokyo',
         min: 3,
         max: 24,
         avg: [],
    avgPerCustSales: 1.2,
    salesPerHour: [],
    totalSeals: 0,
    calc: function() {
     for (let i = 0; i < 14; i++) {
     
         this.avg.push(getRndInteger(this.min, this.max));
             }
        for (let j = 0; j < 14; j++) {
             this.salesPerHour.push(this.avgPerCustSales * this.avg[j]);
             this.totalSeals += this.salesPerHour[j];
     
        
 
             }
         },
 
    
 
 
 render: function() {
     const sealDiv = document.getElementById('seal');
 
    const name = document.createElement('h2');
     name.textContent = 'Tokyo';
    sealDiv.append(name);
 
     const list = document.createElement('ul');
     for (let i = 0; i < hours.length; i++) {
                 
     const item = document.createElement('li');
 
    item.textContent = hours[i] + ':' + this.salesPerHour[i];
 
 
    list.append(item);
 
             }
    const totalItem = document.createElement('li');
     totalItem.textContent = 'Total: ' + this.totalSeals;
    list.append(totalItem);
 
     sealDiv.append(list);
 
    console.log('container');
 
            
 
 
 }
       
     }  

 
 
 
    const dubai = {
     name: 'Dubai',
         min: 11,
         max: 38,
         avg: [],
        avgPerCustSales: 3.7,
         salesPerHour: [],
         totalSeals: 0,
        calc: function() {
           for (let i = 0; i < 14; i++) {
 
             this.avg.push(getRndInteger(this.min, this.max));
                     }
            for (let j = 0; j < 14; j++) {
             this.salesPerHour.push(this.avgPerCustSales * this.avg[j]);
             this.totalSeals += this.salesPerHour[j];
 
 
 
         }
         },
 
 
 
 
    render: function() {
     const sealDiv = document.getElementById('seal');
 
     const name = document.createElement('h2');
     name.textContent = 'Dubai';
    sealDiv.append(name);
 
    const list = document.createElement('ul');
     for (let i = 0; i < hours.length; i++) {
                        
       const item = document.createElement('li');
 
                         
         item.textContent = hours[i] + ':' + this.salesPerHour[i];
 
 
     list.append(item);
 
                     }
    const totalItem = document.createElement('li');
     totalItem.textContent = 'Total: ' + this.totalSeals;
    list.append(totalItem);
    sealDiv.append(list);
 
    console.log('container');
 
                  
 
        },
             }
     dubai.calc()
 console.log(dubai.avg)
             
             
 
 const paris = {
     name: 'Paris',
      min: 20,
          max: 38,
          avg: [],
      avgPerCustSales: 2.3,
     salesPerHour: [],
     totalSeals: 0,
                 calc: function() {
    for (let i = 0; i < 14; i++) {
 
      this.avg.push(getRndInteger(this.min, this.max));
                     }
     for (let j = 0; j < 14; j++) {
           this.salesPerHour.push(this.avgPerCustSales * this.avg[j]);
   this.totalSeals += this.salesPerHour[j];
 
 
 
            }
         },

 
 
 render: function() {
   const sealDiv = document.getElementById('seal');
 
 const name = document.createElement('h2');
      name.textContent = 'Paris';
       sealDiv.append(name);
 
 const list = document.createElement('ul');
     for (let i = 0; i < hours.length; i++) {
                        
         const item = document.createElement('li');
 
     item.textContent = hours[i] + ':' + this.salesPerHour[i];
 
 
     list.append(item);
 
                     }
     const totalItem = document.createElement('li');
      totalItem.textContent = 'Total: ' + this.totalSeals;
     list.append(totalItem);
 
     sealDiv.append(list);
 
  console.log('container');
                    
 
 
 },
    }
 
     paris.calc()
   console.log(paris.avg)
             //  paris.render()
 
             // Lima
 
 
 const lima = {
      name: 'Lima',
      min: 2,
      max: 16,
      avg: [],
                   avgPerCustSales: 4.6,
 salesPerHour: [],
  totalSeals: 0,
      calc: function() {
  for (let i = 0; i < 14; i++) {
 
     this.avg.push(getRndInteger(this.min, this.max));
                     }
      for (let j = 0; j < 14; j++) {
         this.salesPerHour.push(this.avgPerCustSales * this.avg[j]);
         this.totalSeals += this.salesPerHour[j];
 
 
 
             }
        },
 
 
 
 
      render: function() {
      const sealDiv = document.getElementById('seal');
 
      const name = document.createElement('h2');
      name.textContent = 'Lima';
      sealDiv.append(name);

    const list = document.createElement('ul');
      for (let i = 0; i < hours.length; i++) {
                         i 
  const item = document.createElement('li');
 
                         
      item.textContent = hours[i] + ':' + this.salesPerHour[i];
 
 
      list.append(item);
 
                     }
      const totalItem = document.createElement('li');
  totalItem.textContent = 'Total: ' + this.totalSeals;
  list.append(totalItem);
 
     sealDiv.append(list);
 
     console.log('container');
 
                    
 
 
        },
         }
 
    
 let city = [seattle, tokyo, dubai, paris, lima];
 
 
 seattle.render();
 tokyo.render();
 dubai.render();
 paris.render();
 lima.render();