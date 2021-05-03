/*'use strict';

let bashar={

    name:'bashar',
    age: 28,
    weight :55,

    walk:function(){
        console.log('hello');
    }
}
console.log(bashar);
bashar.walk();

//pascal naming
function student(name , age ,weight){

this.name=name;
this.age=age;
this.weight=this.weight;

this.walk=function(){
    console.log('hello')
}
}
//console.log(this)

let bashar = new student('bashar' , 1009 , 444);
console.log(bashar);
bashar.walk();

let ibrahim =new student('ibrahim ' , 155 ,2500);
console.log(ibrahim);


let qusi=new student('qusi' , 3251 ,25);
console.log(qusi);
qusi.walk();

let studentsArray=[bashar , ibrahim , qusi];

student.prototype.walk=function(){

    console.log('hello');
}
console.log(student.prototype);



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
    