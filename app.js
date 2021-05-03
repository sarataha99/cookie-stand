
 "use strict";
 const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
 

   function shopName (locationName , minCustomers , maxCustomers , avgCookies ){
    this.locationName = locationName;
    this.minCustomers = minCustomers;
    this.maxCustomers= maxCustomers;
    this.avgCookies  = avgCookies;



   }
   function getRndInteger(max) {
    return Math.floor(Math.random() * max);
  }
 /*cookies.prototype.eachHours = function(){

    for (let i =0; i< hours.length ; i++){


        this.CustomersEachHour.push (random(this.minCustomer , this.maxCustomers));}
         };

        /* cookies.prototype.eachHours=function(){

            for (let i =0 ; i< hours.length;i++){

                this.avgCookiesEachHour.push(Math.floor(this.CustomersEachHour[i]*this.avgCookies));
                this.total+=this.cookiesEachHour[i];}
        
            }*/

         
         /*cookies.prototype.enderfunction(){

            let theParent = document.getElementById('parent');
    console.log(theParent);
    let shopName = document.createElement('h1');
    theParent.appendChild(shopName);
    shopName.textContent =this.locationName;
    unorderedList.appendChild(listItem); 
    
    
    listItem.textContent = ${this.cookiesEachHour[i]} }

    let totalItem = document.createElement('li');
    unorderedList.appendChild(totalItem);
    totalItem.textContent =total: $(this.total)*/
    

    let seattle  = new shopName('seattle' , 23 , 65 , 6.3 );
    console.log(seattle);
//seattle.eachHours();
//seattle.createElement();

let Tokyo	  = new shopName('Tokyo	' , 3 , 24 , 3.2 );
console.log(Tokyo);

let Dubai = new shopName('Dubai' , 11 , 38 , 3.7 );
    console.log(Dubai);


    let Paris  = new shopName('Paris' , 20 , 38 , 2.3 );
    console.log(Paris);    

    let Lima  = new shopName('Lima' , 12 , 16 , 4.6 );
    console.log(Paris);   
    

  /* const seattle = {
       locationName : 'seattle'
  minCustomers :23,
  maxCustomers :65,
  avgCookies:6.3,
  CustomersEachHour:[],
  avgCookiesEachHour :[],
  CustomersEachHour :[],
  total:0,
   
 
 calcCustomersEachHour:function(){

for (let i =0; i< hours.length ; i++){


this.CustomersEachHour.push (random(this.minCustomer , this.maxCustomers));}
 };
calcCustomersEachHour:
function(){
    for (let i =0 ; i< hours.length;i++){

        this.avgCookiesEachHour.push(Math.floor(this.CustomersEachHour[i]*this.avgCookies));
        this.total+=this.cookiesEachHour[i];

    }
},
renderfunction: function(){
    let theParent = document.getElementById('parent');
    console.log(theParent);
    let shopName = document.createElement('h1');
    theParent.appendChild(shopName);
    shopName.textContent =this.locationName;
    unorderedList.appendChild(listItem); 
    listItem.textContent = ${this.cookiesEachHour[i]} `cookies .
}

let totalItem = document.createElement('li');
unorderedList.appendChild(totalItem);
totalItem.textContent =total: $(this.total)





seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

const tokyo = {
    locationName : 'tokyo'
minCustomers :3,
maxCustomers :24,
avgCookies:1.2,
CustomersEachHour:[],
avgCookiesEachHour :[],
CustomersEachHour :[],
total:0,


calcCustomersEachHour:function(){

for (let i =0; i< hours.length ; i++){


this.CustomersEachHour.push (random(this.minCustomer , this.maxCustomers));}
};
calcCustomersEachHour:
function(){
 for (let i =0 ; i< hours.length;i++){

     this.avgCookiesEachHour.push(Math.floor(this.CustomersEachHour[i]*this.avgCookies));
     this.total+=this.cookiesEachHour[i];

 }
},
renderfunction: function(){
 let theParent = document.getElementById('parent');
 console.log(theParent);
 let shopName = document.createElement('h1');
 theParent.appendChild(shopName);
 shopName.textContent =this.locationName;
 unorderedList.appendChild(listItem); 
 listItem.textContent = ${this.cookiesEachHour[i]} //`cookies .
}

let totalItem = document.createElement('li');
unorderedList.appendChild(totalItem);
totalItem.textContent =total: $(this.total)



}
   


 
 seattle.render();
 tokyo.render();
 dubai.render();
 paris.render();
 lima.render();

 const tokyo = {
    locationName : 'tokyo'
minCustomers :3,
maxCustomers :24,
avgCookies:1.2,
CustomersEachHour:[],
avgCookiesEachHour :[],
CustomersEachHour :[],
total:0,


calcCustomersEachHour:function(){

for (let i =0; i< hours.length ; i++){


this.CustomersEachHour.push (random(this.minCustomer , this.maxCustomers));}
};
calcCustomersEachHour:
function(){
 for (let i =0 ; i< hours.length;i++){

     this.avgCookiesEachHour.push(Math.floor(this.CustomersEachHour[i]*this.avgCookies));
     this.total+=this.cookiesEachHour[i];

 }
},
renderfunction: function(){
 let theParent = document.getElementById('parent');
 console.log(theParent);
 let shopName = document.createElement('h1');
 theParent.appendChild(shopName);
 shopName.textContent =this.locationName;
 unorderedList.appendChild(listItem); 
 listItem.textContent = ${this.cookiesEachHour[i]} //`cookies .
}

let totalItem = document.createElement('li');
unorderedList.appendChild(totalItem);
totalItem.textContent =total: $(this.total)



}
   


 
 seattle.render();
 tokyo.render();
 dubai.render();
 paris.render();
 lima.render();

 const tokyo = {
    locationName : 'tokyo'
minCustomers :3,
maxCustomers :24,
avgCookies:1.2,
CustomersEachHour:[],
avgCookiesEachHour :[],
CustomersEachHour :[],
total:0,


calcCustomersEachHour:function(){

for (let i =0; i< hours.length ; i++){


this.CustomersEachHour.push (random(this.minCustomer , this.maxCustomers));}
};
calcCustomersEachHour:
function(){
 for (let i =0 ; i< hours.length;i++){

     this.avgCookiesEachHour.push(Math.floor(this.CustomersEachHour[i]*this.avgCookies));
     this.total+=this.cookiesEachHour[i];

 }
},
renderfunction: function(){
 let theParent = document.getElementById('parent');
 console.log(theParent);
 let shopName = document.createElement('h1');
 theParent.appendChild(shopName);
 shopName.textContent =this.locationName;
 unorderedList.appendChild(listItem); 
 listItem.textContent = ${this.cookiesEachHour[i]} //`cookies .
}

let totalItem = document.createElement('li');
unorderedList.appendChild(totalItem);
totalItem.textContent =total: $(this.total)



}
   


 
 seattle.render();
 tokyo.render();
 dubai.render();
 paris.render();
 lima.render();*/








 /*let theParent =document.createElement('table');
 theParent.appendChild(theTable);
 let trElement = document.createElement('tr');

 let nameElement = document.createElement('th');
 trElement.appendChild(nameElement);
 nameElement.textContent = 'Name'*/