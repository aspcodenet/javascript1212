let a = 'Stefan'
let b = 'Holmberg'

console.log(a)
setTimeout(()=>{
    console.log('Hockeyproffset')
},3000)
console.log(b)




// CALLBACKS
//let cost = 0

// function plus(x, y) {
//     console.log('Adding cost')
//     cost = cost + 1000
//     return x + y;
// }
// function dela(x, y) {
//     console.log('Adding cost')
//     cost = cost + 1000
//    return x / y;
// }


let cost = 0
// function computeThings(raknesatt, x, y) {
//     console.log('Adding cost')
//     cost = cost + 1000
//     if (raknesatt === "plus") {
//         return x + y;
//     } else if (raknesatt === "dela") {
//         return x / y;
//     }
//    }
// console.log(computeThings("plus", 1, 1));
// console.log(computeThings("dela", 16, 4))



// function plus(x, y) {
//     return x + y;
// }
// function dela(x, y) {
//    return x / y;
// }
// function raknaUt(callBack, x, y) {
//      console.log('Adding cost')
//      cost = cost + 1000
//     return callBack(x, y);
// }

// raknaUt(plus,1,2)
// raknaUt(dela,2,2)


// PROMISES

// 1. Dukar
// när Oliver dukar klart
// 2. Sätter på potatisen
// AWAITAR på potatisen
// 3. Gör jag potatismos




// const myPromise = new Promise((resolve, reject) => {
//     // Simulating an asynchronous operation
//     setTimeout(() => {
//         resolve('Success!');
//     }, 2000);
//    });

// myPromise.then(result => {
//     console.log('Promise resolved:', result);
// });


function resolveAfter2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Nu')
        resolve('resolved');
      }, 2000);
    });
  }


//   console.log('A')
//   resolveAfter2Seconds().then(()=>{ 
//       console.log('Nu')
//    });
//    console.log('Klar')
  
   

// async function testFunc(){
//     // Simulating an asynchronous operation
//     await resolveAfter2Seconds()
// }


 console.log('A2')
await resolveAfter2Seconds()
console.log('Klar2')
 
 
  
 


   




// // 1. Vad är ett objekt ? 
// // A JavaScript object is a collection of named values
// // const person2 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// // console.log(person2)
// // person2.firstName = "dsaadsdas"
// // person2.City = "Nacka"
// // console.log(person2)


// // 2 Objekt är BY REFERENCE
// // let i = 12 // primtiva datatyper är BY VALUE KOPIA
// // let j = i
// // j = 13
// // console.log(i)

// // const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// // var p2 = person
// // p2.firstName = "Kalle"
// // console.log(person)

// // 3. Hur skapar man ett object
// //a) med {} - med eller utan värden (recommended)
// //let phones = []
// // class Player{

// // };
// // var p = new Player();

// // let phone = {}
// // phone.Name = "ewdasds"
// // lägga till i efterhand ! Weird
// // b) med new Object()  (not recommended)
// // let phone  = new Object()
// // lägga till i efterhand ! Weird
// // c) new och  user defined constructor function
// // const Actor = function(id,name,birthyear){
// //      this.id = id;
// //      this.year = birthyear;
// //      this.name = name;
// // }
// // let stefan = new Actor(12,"423243",123)
// // const personOne = new Actor(12, 'Stefan', 1972);
// // d) Object.create
// // To understand the Object.create method, just remember that it takes two parameters. The first parameter is a mandatory object that serves as the prototype of the new object to be created. The second parameter is an optional object which contains the properties to be added to the new object.
// // const orgObject = { company: 'ABC Corp', age:1233 };
// // const coolCompany = Object.create(orgObject, { CoolFactor: { value: 123 } });

// // console.log(orgObject); // { company: "ABC Corp" }
// // console.log(coolCompany); // "EmployeeOne"


// // e) classes
// // class Person2 {
// //  constructor(fname, lname) {
// //     this.firstName = fname;
// //     this.lastName = lname;
// //     this.age = 12
// //   }
// // }
// // const person = new Person2('testFirstName', 'testLastName');
// // console.log(person)// 


// // Adding methods
// // const person = {
// //     firstName: "John",
// //     lastName : "Doe",
// //     id       : 5566,
// //     fullName : function() {
// //       return this.firstName + " " + this.lastName;
// //     }
// //   };
// // class Person {
// //  constructor(fname, lname) {
// //    this.firstName = fname;
// //     this.lastName = lname;
// //   }
// //  nameLength(){ return (this.firstName +this.firstName).length }
// // }

// // INHERITANCE
// // class Player extends Person {

// // }

// // let nextRound = document.getElementById("nextRound")
// // let tbody = document.querySelector("#allMovies tbody")



// // let gameObjects = [] //Fly, Person
// // nextRound.addEventListener("click",()=>{
// //     tbody.innerHTML = ""
// //     for(let player of gameObjects){
// //         var action = player.act()
// //         let s = `<tr><td>${player.firstName}</td><td>${action}</td><td>${player.level}</td></tr>` 
// //         tbody.innerHTML += s
// //     }
// // });


// // //DEMO: Stefans dinner

// // class GameObject{
// //     constructor(firstName){
// //         this.firstName = firstName;
// //         this.level = 0;

// //     }
// //     act(){
// //         console.log("Ska aldrig inträffa")
// //     }
// // }

// // class Fly extends GameObject{
// //     constructor() {
// //         super("Flugan")
// //     }
        
// //     act(){
// //         const textArray = [
// //             'surrar',
// //             'flyger',
// //             'landar i maten',
// //         ];
// //         var randomNumber = Math.floor(Math.random()*textArray.length);    
// //         var action = textArray[randomNumber]
// //         return action
// //     }
// // }


// // class Hund extends GameObject{
// //     constructor(firstName) {
// //         super(firstName)
// //     }
        
// //     act(){
// //         const textArray = [
// //             'tigga mat',
// //             'sova',
// //             'går omkring',
// //         ];
// //         var randomNumber = Math.floor(Math.random()*textArray.length);    
// //         var action = textArray[randomNumber]
// //         return action
// //     }
// // }



// // class Person extends GameObject{
// //     constructor(fname, lname) {
// //         super(fname)
// //         this.lastName = lname;
// //         this.howManyTimesInARow = 0
// //     }

// //     nameLength(){ 
// //         return (this.firstName +this.lastNameName).length 
// //     }

// //     act(){
// //         const textArray = [
// //             'rapar',
// //             'äter',
// //             'dricker',
// //             'pratar',
// //         ];
// //         var randomNumber = Math.floor(Math.random()*textArray.length);    
// //         var action = textArray[randomNumber]
// //         if(action === 'rapar'){
// //             this.howManyTimesInARow =  this.howManyTimesInARow + 1
// //         }else{
// //             this.howManyTimesInARow  = 0
// //         }
// //         if(this.howManyTimesInARow === 3){
// //             this.level = this.level + 1
// //         }
// //         return action
// //     }
// // }



// // gameObjects.push(new Person("Stefan","Holmberg"))
// // gameObjects.push(new Person("Kerstin","Holmberg"))
// // gameObjects.push(new Person("Oliver","Holmberg"))
// // gameObjects.push(new Fly())
// // gameObjects.push(new Hund("Stellan"))
// // console.log(gameObjects)




