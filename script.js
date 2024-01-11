


// 1. Vad är ett objekt ? 
// A JavaScript object is a collection of named values
//  const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};


// 2 Objekt är BY REFERENCE
let i = 12
let j = i
j = 13
console.log(i)

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
var p2 = person
p2.firstName = "Kalle"
console.log(person)

// 3. Hur skapar man ett object
// a) med {} - med eller utan värden (recommended)
// lägga till i efterhand ! Weird
// b) med new Object()  (not recommended)
// lägga till i efterhand ! Weird
// c) new och  user defined constructor function
// const Actor = function(id,name,birthyear){
//     this.id = id;
//     this.year = birthyear;
//     this.name = name;
// }
// const personOne = new Actor(12, 'Stefan', 1972);
// d) Object.create
// To understand the Object.create method, just remember that it takes two parameters. The first parameter is a mandatory object that serves as the prototype of the new object to be created. The second parameter is an optional object which contains the properties to be added to the new object.
// const orgObject = { company: 'ABC Corp' };
// const employee = Object.create(orgObject, { name: { value: 'EmployeeOne' } });

// console.log(employee); // { company: "ABC Corp" }
// console.log(employee.name); // "EmployeeOne"

// e) classes
// class Person {
//  constructor(fname, lname) {
//    this.firstName = fname;
//     this.lastName = lname;
//   }
// }
// const person = new Person('testFirstName', 'testLastName');



// Adding methods
// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
// class Person {
//  constructor(fname, lname) {
//    this.firstName = fname;
//     this.lastName = lname;
//   }
//  nameLength(){ return (this.firstName +this.firstName).length }
// }

// INHERITANCE
// class Player extends Person {

// }

let nextRound = document.getElementById("nextRound")
let tbody = document.querySelector("#allMovies tbody")

let gameObjects = []
nextRound.addEventListener("click",()=>{
    tbody.innerHTML = ""
    for(let player of gameObjects){
        var action = player.act()
        let s = `<tr><td>${player.firstName}</td><td>${action}</td><td></td></tr>` 
        tbody.innerHTML += s
    }
});


//DEMO: Stefans dinner
class Person {
 constructor(fname, lname) {
   this.firstName = fname;
    this.lastName = lname;
  }
 nameLength(){ return (this.firstName +this.firstName).length }
 act(){
    const textArray = [
        'rapar',
        'äter',
        'dricker',
        'rapar',
    ];
    var randomNumber = Math.floor(Math.random()*textArray.length);    
    var action = textArray[randomNumber]
    return action
 }
}

gameObjects.push(new Person("Stefan","Holmberg"))
gameObjects.push(new Person("Kerstin","Holmberg"))
gameObjects.push(new Person("Oliver","Holmberg"))







// const Actor = function(id,name,birthyear){
//     this.id = id;
//     this.year = birthyear;
//     this.name = name;
// }

// const actors = [
//     new Actor(1, "Leonardo DiCaprio", 1974),
//     new Actor(2, "Joseph Gordon-Levitt", 1981),
//     new Actor(3, "Ellen Page", 1987),
//     new Actor(4, "Daniel Day Lewis", 1957),
//     new Actor(5, "Ciarán Hinds", 1953),
//     new Actor(6, "Shane Carruth", 1972),
//     new Actor(7, "Marlon Brando", 1924),
//     new Actor(8, "Al Pacino", 1940),
//     new Actor(9, "Robert Duvall", 1931),
//     new Actor(10, "Johnny Depp", 1963),
//     new Actor(11, "Sigourney Weaver", 1949),
//     new Actor(12, "Tom Skeritt", 1933),
//     new Actor(13, "John Hurt", 1940),
//     new Actor(14, "Cate Blanchett", 1981),
//     new Actor(15, "Kate Beckinsale", 1981),
//     new Actor(16, "Michelle Pfeiffer", 1958)
// ];

// const toActors = function(ids){
//     let result = []
//     for(let x of ids){
//         result.push(actors.filter(i=>i.id == x)[0]) 
//     }
//     return result
// }

// const Movie = function(id,title,director,year,actors){
//     this.id = id;
//     this.title = title;
//     this.director = director;
//     this.year = year;
//     this.actors = toActors(actors);
// }

// const ChristmasWish = function(type,namn){
//     this.type = type;
//     this.namn = namn;
// }

// const movies = [
//     new Movie(1,"Inception","Christopher Nolan",2010,[1,2,3]),
//     new Movie(2, "There will be blood", "Paul Thomas Anderson", 2007,[4,5]),
//     new Movie(3, "Primer", "Shane Carruth", 2004,[6]),
//     new Movie(4, "The Godfather", "Francis Ford Coppola", 1972,[7,8,9]),
//     new Movie(5,"What's eating Gilberg Grape?", "Lasse Hallström", 1993,[1,10]),
//     new Movie(6, "Donnie Brasco", "Mike Newell", 1997,[8,10]),
//     new Movie(7, "Gangs of New York", "Martin Scorsese", 2002,[1,4]),
//     new Movie(8, "Alien", "Ridley Scott", 1979,[11,12,13]),
//     new Movie(9, "The Aviator","Martin Scorsese", 2004,[1,14,15]),
//     new Movie(10, "Age of Innocence", "Martin Scorsese", 1993,[4,16]),
//     new Movie(11, "Tinker Tailor Soldier Spy", "Tomas Alfredson", 2011,[13,5]),
// ]


 