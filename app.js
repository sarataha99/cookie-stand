
 'use strict';
 const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
 function random(max,min){
     return Math.floor(Math.random()*(max - min + 1) + min);
 }
const seattle ={
    locationName : 'seattle',
    minCustmer : 23,
    maxCustmer : 65,
    avgCookies : 6.3,
    custmorEachHours : [],
    cookiesEachHours : [],
    total:0,

    calcCustmerEachHours : function(){
        for (let i = 0; 1< hours.length ;i++) {
            this.custmorEachHours[i] = (random(this.minCustmer,this.maxCustmer));
                this.calcCustmerEachHours.push(random(this.minCustmer,this.maxCustmer));
            }
            
        },
        calcCookiesEachHour:function() {
            for (let i = 0; i < hours.length; i++) {
                this.cookiesEachHours.push(Math.floor(this.cookiesEachHours[i]*this.avgCookies));
                
            }
        },
        renderfunction: function() {
            let theParent=document.getElementById('parent');
            console.log(theParent);

            let shopName=document.createElement('h2');
            theParent.appendChild(shopName);
            shopName.textContent=this.locationName;
            let unorderedList =document.createElement('ul');
            theParent.appendChild(unorderedList);
            for (let i = 0; i < hours.length; i++) {
                let listItem=document.createElement('li');
                unorderedList.appendChild(listItem);
                listItem.textContent = `${hours[i]}: ${this.cookiesEachHours[i]} cookies`
                
            }
            let totalItem=document.createElement('li');
            unorderedList.appendChild(totalItem);
            totalItem.textContent =`total: ${this.total} cookies`
        }
    }

console.log(seattle);
seattle.calcCustmerEachHours();
seattle.calcCookiesEachHour();
seattle.renderfunction();

const Tokyo ={
    locationName : 'Tokyo',
    minCustmer : 3,
    maxCustmer : 24,
    avgCookies : 1.2,
    custmorEachHours : [],
    cookiesEachHours : [],
    total:0,

    calcCustmerEachHours : function(){
        for (let i = 0; 1< hours.lengt ;i++) {
            this.custmorEachHours[i] = (random(this.minCustmer,this.maxCustmer));
                this.calcCustmerEachHours.push(random(this.minCustmer,this.maxCustmer));
            }
            
        },
        calcCookiesEachHour:function() {
            for (let i = 0; i < hours.length; i++) {
                this.cookiesEachHours.push(Math.floor(this.cookiesEachHours[i]*this.avgCookies));
                
            }
        },
        renderfunction: function() {
            let theParent=document.getElementById('parent');
            console.log(theParent);

            let shopName=document.createElement('h2');
            theParent.appendChild(shopName);
            shopName.textContent=this.locationName;
            let unorderedList =document.createElement('ul');
            theParent.appendChild(unorderedList);
            for (let i = 0; i < hours.length; i++) {
                let listItem=document.createElement('il');
                unorderedList.appendChild(listItem);
                listItem.textContent = `${hours[i]}: ${this.cookiesEachHours[i]} cookies`
                
            }
            let totalItem=document.createElement('il');
            unorderedList.appendChild(totalItem);
            totalItem.textContent =`total: ${this.total} cookies`
        }
    }

console.log(Tokyo);
Tokyo.calcCustmerEachHours();
Tokyo.calcCookiesEachHour();
Tokyo.renderfunction();





const Dubai ={
    locationName : 'Dubai',
    minCustmer : 11,
    maxCustmer : 38,
    avgCookies : 3.7,
    custmorEachHours : [],
    cookiesEachHours : [],
    total:0,

    calcCustmerEachHours : function(){
        for (let i = 0; 1< hours.length ;i++) {
            this.custmorEachHours[i] = (random(this.minCustmer,this.maxCustmer));
                this.calcCustmerEachHours.push(random(this.minCustmer,this.maxCustmer));
            }
            
        },
        calcCookiesEachHour:function() {
            for (let i = 0; i < hours.length; i++) {
                this.cookiesEachHours.push(Math.floor(this.cookiesEachHours[i]*this.avgCookies));
                
            }
        },
        renderfunction: function() {
            let theParent=document.getElementById('parent');
            console.log(theParent);

            let shopName=document.createElement('h2');
            theParent.appendChild(shopName);
            shopName.textContent=this.locationName;
            let unorderedList =document.createElement('ul');
            theParent.appendChild(unorderedList);
            for (let i = 0; i < hours.length; i++) {
                let listItem=document.createElement('il');
                unorderedList.appendChild(listItem);
                listItem.textContent = `${hours[i]}: ${this.cookiesEachHours[i]} cookies`
                
            }
            let totalItem=document.createElement('il');
            unorderedList.appendChild(totalItem);
            totalItem.textContent =`total: ${this.total} cookies`
        }
    }

console.log(Dubai);
Dubai.calcCustmerEachHours();
Dubai.calcCookiesEachHour();
Dubai.renderfunction();


const Paris ={
    locationName : 'Paris',
    minCustmer : 20,
    maxCustmer : 38,
    avgCookies : 2.3,
    custmorEachHours : [],
    cookiesEachHours : [],
    total:0,

    calcCustmerEachHours : function(){
        for (let i = 0; 1< hours.lengt ;i++) {
            this.custmorEachHours[i] = (random(this.minCustmer,this.maxCustmer));
                this.calcCustmerEachHours.push(random(this.minCustmer,this.maxCustmer));
            }
            
        },
        calcCookiesEachHour:function() {
            for (let i = 0; i < hours.length; i++) {
                this.cookiesEachHours.push(Math.floor(this.cookiesEachHours[i]*this.avgCookies));
                
            }
        },
        renderfunction: function() {
            let theParent=document.getElementById('parent');
            console.log(theParent);

            let shopName=document.createElement('h2');
            theParent.appendChild(shopName);
            shopName.textContent=this.locationName;
            let unorderedList =document.createElement('ul');
            theParent.appendChild(unorderedList);
            for (let i = 0; i < hours.length; i++) {
                let listItem=document.createElement('il');
                unorderedList.appendChild(listItem);
                listItem.textContent = `${hours[i]}: ${this.cookiesEachHours[i]} cookies`
                
            }
            let totalItem=document.createElement('il');
            unorderedList.appendChild(totalItem);
            totalItem.textContent =`total: ${this.total} cookies`
        }
    }

console.log(Paris);
Paris.calcCustmerEachHours();
Paris.calcCookiesEachHour();
Paris.renderfunction();


const Lima ={
    locationName : 'Lima',
    minCustmer : 2,
    maxCustmer : 16,
    avgCookies : 4.6,
    custmorEachHours : [],
    cookiesEachHours : [],
    total:0,

    calcCustmerEachHours : function(){
        for (let i = 0; 1< hours.length ;i++) {
            this.custmorEachHours[i] = (random(this.minCustmer,this.maxCustmer));
                this.calcCustmerEachHours.push(random(this.minCustmer,this.maxCustmer));
            }
            
        },
        calcCookiesEachHour:function() {
            for (let i = 0; i < hours.length; i++) {
                this.cookiesEachHours.push(Math.floor(this.cookiesEachHours[i]*this.avgCookies));
                
            }
        },
        renderfunction: function() {
            let theParent=document.getElementById('parent');
            console.log(theParent);

            let shopName=document.createElement('h2');
            theParent.appendChild(shopName);
            shopName.textContent=this.locationName;
            let unorderedList =document.createElement('ul');
            theParent.appendChild(unorderedList);
            for (let i = 0; i < hours.length; i++) {
                let listItem=document.createElement('il');
                unorderedList.appendChild(listItem);
                listItem.textContent = `${hours[i]}: ${this.cookiesEachHours[i]} cookies`
                
            }
            let totalItem=document.createElement('il');
            unorderedList.appendChild(totalItem);
            totalItem.textContent =`total: ${this.total} cookies`
        }
    }

console.log(Lima);
Lima.calcCustmerEachHours();
Lima.calcCookiesEachHour();
Lima.renderfunction();
// 'use strict';
// const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// function random(max,min){
//     return Math.floor(Math.random()*(max - min + 1) + min);
// }
// const seattle ={
//     locationName : 'seattle',
//     minCustmer : 23,
//     maxCustmer : 65,
//     avgCookies : 6.3,
//     custmorEachHours : [],
//     cookiesEachHours : [],

// calcCustmerEachHours: function(){
//     for (let i = 0; 1< hours.length ;i++) {
//         //this.custmorEachHours[i] = (random(this.minCustmer,this.maxCustmer));
//            this.calcCustmerEachHours.push(random(this.minCustmer,this.maxCustmer));
//         }

//     },
//     calccookiesEachHours:function(){

//     }
//     //console.log(this.custmorEachHours);
// }
// console.log(seattle);
// seattle.calcCustmerEachHours();
// seattle.cookiesEachHours();

