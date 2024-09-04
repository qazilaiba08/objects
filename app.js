// function myFunction(){
//     let code = document.createElement('li');
//     let mylist = document.createTextNode('water bottle');
//     code.appendChild(mylist);
//     document.getElementById('list').appendChild(code)// chid node ma last ma add krwata ha
// }

function myFunction(){
     const list = document.getElementById('list');
    // list.removeChild(list.firstElementChild);     //first chid elemnets remove krwata ha
    while (list .hasChildNodes){
        list.removeChild(list.firstChild);          // Haschild apka all elements remove krta ha
    } 
}

// OBJECTS 


// let plana = {//propreties and keys ha object ki name,price etc.
//     name : "Laiba", 
//     price : 3.99,
//     space : 100,
//     transfer : 1000,
//     pages : 10
// }
// plana.price = 4.50
// delete plana.space// delete proprety ko delete an object propety
// console.log(plana);

// let plana2 = {
//     name : ["Professional","Basic"] ,
//     price : 5.99,
//     space : 500,
//     transfer : 5000,
//     pages : 50
// }
// console.log(plana2.name[1]);

// let plana3 = {
//     name : "Ultimate", 
//     price : 9.99,
//     space : 200,
//     transfer : 2000,
//     pages : 20
// }
// console.log(plana3);

// alert("The cost of the " + plana2.name + " package is $" + plana2.price + " per month.");

// function calcAnnual(percentIfDisc ) { 
//     var bestPrice = plan1.price; 
//     var currDate = new Date();
//      var thisMo = currDate.getMonth(); 
//      for (var i = 0; i < plan1.discountMonths.length; i++) {
//          if (plan1.discountMonths[i] === thisMo) { bestPrice = plan1.price * percentIfDisc ; 
//            } break; 
//      }
//   return bestPrice * 12; 
//  }

// const person = {};

// person.name ="jhon";
// person.age = 50;
// person.email = 'jhon@gmail;.com';
// document.getElementById('demo').innerHTML = person.name + " is "+ person.age + " years old";

// Classes 
// class is aprogram code templet and blueprint for creating object . these object will have some  state variables and some  behaver 

// class myClass {
//     start(){ // method hota ha
//     console.log('start');
//     }
//     stop(){
//         console.log('stop');
//     }
// }
// console.log(myClass);


// /// class sa object ki traf move krn k liy 

// let fortuner = new myClass();// new keyword object ko denote krwata ha 
// let lexuse = new myClass();

// object ma function bhi bana sakta ha or yeh method bhi ha

// let student = { // this jo hota ha apna ap ma ak method hota ha 
//   firstName : 'Laiba',
//   lastName : "Qazi",
//   rollNo : 123,
//   age :22,
//   class :"XI",
//   fullNmae : function(){ // OBJECT ka ander
//     return this.firstName + " "+ this.lastName;
//   }
// }
// console.log(student);
// console.log(student.fullNmae());

// constractor we change 
// yeh hamra object oriented programing k bhi hissa hota ha
// function Student(name , father_name,age, cls,nationality){// this is a constractor patteren or this object create kr rah ha
//   this.name = name;
//   this.father_name = father_name;
//   this.age = age;
//   this.cls = cls;
//   this.nationality = nationality;
//   this.fullName = function(){
//     return this.name + " "+ this.father_name;
//   }
// }
// let student1 = new Student("Laiba Qazi","Minhas Qazi",22, "XI" )// new ka keyword apko batata ha constractor function ko use kra ka object ma call krta ha
// let student2 = new Student("kAINAT","Zia", 56,"X" );

// student1.nationality = "Pakistani";
// console.log(student1);
// console.log(student2);
// document.write(Student);

function Plan(name, price, space, transfer, pages) {
 this.doc = name;
 this.grumpy = price;
 this.sleepy = space;
 this.bashful = transfer;
 this.sneezy = pages;
 }
 let plan1 = new Plan("kainat",345,3.6,45.00,100);
 let plan2 = new Plan("Anousha",453, 4.6, 50.00, 200);
  console.log(plan1);
  console.log(plan2);   

  function Person(first,last,age,eye){
    this.first = first;
    this.last = last;
    this.age = age;
    this.eye = eye;
  }
  let person1 = new Person("Moin", "Khan", 34 ,"brown");
  let person2 = new Person("ali","khan", 45, "grey");

  console.log(person1);
  console.log(person2);

//    document.getElementById('demo').innerHTML = person1.name + " is "+ person1.age + " years old";
//    document.getElementById('demo').innerHTML = student1.name + " is "+ student1.age + " years old";
//    document.getElementById("demo").innerHTML = plan1 +"  "+plan2;


    // Object prototype
// constractor function hama ik patteren set kr k data ha
// function Student(name , father_name,age, cls){// this is a constractor patteren or this object create kr rah ha OBJECT K ANDER RAHTA HO BHI OBJECT CREATE KRAT HA (.THIS)
//   this.name = name;
//   this.father_name = father_name;
//   this.age = age;
//   this.class = cls;
// }

// Student.prototype.email ="laiba@gmail.com";
// let stud = new Student("laiba","Minhas",50 , "XII");
// console.log(stud);

// let person = {
//   first : 'jhon',
//   last : 'ducket',
//   sayHello(){// hamara pass ik method bhi ha or function bhi ha
//     // ES 5 ABHI SEEKHA RAHA HA
//     console.log("Hello my name is" + this.last + " "+car.brand);
//   }
// }
// let car ={
//   brand : "Toyotta", // KEY KAHTA HA
//   model: "lexase"
// }
// console.log(person);
// person.sayHello();

function pationate (name,phoneNo,address,anyRecord,disues){
  this.name = name;
   this.phoneNo = phoneNo; 
   this.address = address;
  this.anyRecord = anyRecord;
  this.disues = this.disues;
};

let pationate1 = new pationate("zahid",+92000333,"street no 4 karachi", "yes", "cancer");
let pationate2 = new pationate("ahmed",+92000333,"street no 5 karachi", "no", "born mero");
let pationate3 = new pationate("bilal",+92000333,"street no 6 karachi", "yes", "fector");


pationate.prototype.email ="zahid@gmail.com"; // this is daynamic changes
let pationate4 = new pationate("zahid","khan",500000056 , "no", "heart attack");
console.log(pationate4);

console.log(pationate1);
console.log(pationate2);
console.log(pationate3);

// checking methods and propreties

let person = {
  Fname : "jhon",
  age : 22
};
 let email = "email" in person // in key word check the values of the object

console.log(email);

// Browse control : getting and setting Url 


