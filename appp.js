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