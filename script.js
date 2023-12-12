const allMoviesTBody = document.querySelector("#allMovies tbody")
const btn90 = document.getElementById("btn90")

const Actor = function(id,name,birthyear){
    this.id = id;
    this.year = birthyear;
    this.name = name;
}

const actors = [
    new Actor(1, "Leonardo DiCaprio", 1974),
    new Actor(2, "Joseph Gordon-Levitt", 1981),
    new Actor(3, "Ellen Page", 1987),
    new Actor(4, "Daniel Day Lewis", 1957),
    new Actor(5, "Ciarán Hinds", 1953),
    new Actor(6, "Shane Carruth", 1972),
    new Actor(7, "Marlon Brando", 1924),
    new Actor(8, "Al Pacino", 1940),
    new Actor(9, "Robert Duvall", 1931),
    new Actor(10, "Johnny Depp", 1963),
    new Actor(11, "Sigourney Weaver", 1949),
    new Actor(12, "Tom Skeritt", 1933),
    new Actor(13, "John Hurt", 1940),
    new Actor(14, "Cate Blanchett", 1981),
    new Actor(15, "Kate Beckinsale", 1981),
    new Actor(16, "Michelle Pfeiffer", 1958)
];

const toActors = function(ids){
    result = []
    for(x of ids){
        result.push(actors.filter(i=>i.id == x)[0]) 
    }
    return result
}

const Movie = function(id,title,director,year,actors){
    this.id = id;
    this.title = title;
    this.director = director;
    this.year = year;
    this.actors = toActors(actors);
}

const ChristmasWish = function(type,namn){
    this.type = type;
    this.namn = namn;
}

const movies = [
    new Movie(1,"Inception","Christopher Nolan",2010,[1,2,3]),
    new Movie(2, "There will be blood", "Paul Thomas Anderson", 2007,[4,5]),
    new Movie(3, "Primer", "Shane Carruth", 2004,[6]),
    new Movie(4, "The Godfather", "Francis Ford Coppola", 1972,[7,8,9]),
    new Movie(5,"What's eating Gilberg Grape?", "Lasse Hallström", 1993,[1,10]),
    new Movie(6, "Donnie Brasco", "Mike Newell", 1997,[8,10]),
    new Movie(7, "Gangs of New York", "Martin Scorsese", 2002,[1,4]),
    new Movie(8, "Alien", "Ridley Scott", 1979,[11,12,13]),
    new Movie(9, "The Aviator","Martin Scorsese", 2004,[1,14,15]),
    new Movie(10, "Age of Innocence", "Martin Scorsese", 1993,[4,16]),
    new Movie(11, "Tinker Tailor Soldier Spy", "Tomas Alfredson", 2011,[13,5]),
]


const m2 = movies.findIndex(m=>m.year < 2005)
console.log(m2)


// FindFirstOrDefault
const m = movies.find(m=>m.year < 2005)
console.log(m)
// let summa2 = 0
// for(let m of movies){
//     summa2 = summa2 + m.year
// }


// // reduce REDUCERA EN ARRAY TILL ETT VÄRDE
// const summa = movies.reduce(function(currentValue,movie){
//     return currentValue + movie.year
// },0)
// console.log(summa)


// some js ->  list.Any(p=>p.....)
// finns det NÅN  som uppfyller kriteriet -> TRUE eller FALSE
// finns det nån film med Martin Scorsese 
// fel semantik - onödigt svårt kod - onödig kod 

// let count = 0
// for(let i = 0; i < movies.length; i++){
//     if(movies[i].director === "Martin Scorsese" ){
//         count = count +1
//     }
// }
// if(count > 0){
//     console.log("Japp vi har film/filmer med Martin Scorsese")
// }
let containsMovie = movies.some(m=>m.director === "Martin Scorsese")
console.log(containsMovie)

// C# All
let containsMovie2 = movies.every(m=>m.director === "Martin Scorsese")
console.log(containsMovie2)



const showTable = function(moviesArray){
    allMoviesTBody.innerHTML = ""
    for(let i = 0; i < moviesArray.length;i++) { // hrmmm you do foreach if you'd like, much nicer! 
                                            // I will show you in two weeks
                                            //  or for p of players     
        let trText = `<tr><th scope="row">${moviesArray[i].title}</th><td>${moviesArray[i].director}</td><td>${moviesArray[i].year}</td></tr>`
        allMoviesTBody.innerHTML += trText
    }

}

console.log("**************************")
//console.log(movies)
// for(let i = 0; i < movies.length; i++){
//     console.log(movies[i])
// }
for(let m of movies){
    console.log(m)
}
movies.forEach(m=>{
    console.log(m)
});

movies.forEach(function(m){
    console.log(m)
});


///                  Where              Select  
let wishes = movies.filter(m=>m.id > 8).map(m=>new ChristmasWish("Movie",m.title))
console.log(wishes)


// let result = []
//  for(let i = 0; i < movies.length; i++){
//      if(movies[i].year >= 2002){
//         result.push(movies[i])
//      }
//  }



// FILTER:

//Visa alla filmer vars Actor-lista innehåller tre skådespelare 
items = movies.filter(m=>m.actors.length === 3)
console.log(items)



//let newArray = movies.filter(m => m.year > 2002 && m.year < 2018 );
let newArray = movies.filter(function(movie){
    if(movie.year > 2020) return true;
    return false;
});
console.log(newArray)


console.log("**************************")


// 1. HIGHER ORDER FUNCTIONS skicka in en funktion som en parameter List<Player> p; p.Where(p=>p.Jersey == 21);
//              addEventListener("click",HIGHER ORDER FUNCTION)
 // 2. Where -> Select  (C#) filtrera array och transformera    List<Player> p; p.Where(sddasdas).Select(m=>new ViewModel... )
 // All .Any()   - Some() -  Every()

 // C# Where -> Javascript filter
 // C# Select -> Javascript map

 



    // 1. Visa alla filmer som släpptes någon gång under 90-talet.
    // 2. Visa alla filmer vars Actor-lista innehåller tre skådespelare 
    // 3. Visa alla filmer som där någon av skådespelarna i filmen var äldre än 40 år när filmen gjordes
    // 4. Visa alla skådespelare som är äldre än 50 år. Sortera skådespelarna på namn.
    // 5. Visa alla skådespelare som har bokstaven "g" eller ”G” i sitt namn. 
    // 6. Visa för alla skådespelare bara deras namn och ålder. TRANSFORM
    // 7. Visa en lista innehållande filmtitel, regissör och antal skådespelare för alla filmer. TRANSFORM
    // 8. Visa för alla filmer filmens titel, samt genomsnittliga åldern för skådespelarna i filmen TRANSFORM!
    // 9. ta fram alla filmer som gjordes under 2000-talet och där regissören heter Martin Scorsese.Visa bara Titel, release år och regissör.
    // 10. Visa alla skådespelare som är med i mer än en film. Visa också hur många filmer de är med i.
    // 11.visa alla filmer vars årtal är senare än det genomsnittliga årtalet för alla filmer.Sortera resultatet på årtalet i stigande ordning(ascending).


btn90.addEventListener("click",()=>{
    items = movies.filter(m=>m.year >= 1990 && m.year <= 1999)
    showTable(items)
})


// const kategori = document.getElementById("kategori")
// const sak = document.getElementById("sak")
// const wish = document.getElementById("wish")
// const lightrope = document.getElementById("lightrope")
// const hunden  = document.getElementById("hunden")



// const dateToCountdown = new Date('2023-12-22T16:00:00');
// const days  = document.getElementById("days")
// const hours  = document.getElementById("hours")
// const minutes  = document.getElementById("minutes")
// const seconds  = document.getElementById("seconds")


// let antalSekunder = 0

// const updateCountdown = function(){
//     var now = new Date().getTime();
//     var distanceInMilliSeconds = dateToCountdown - now;
//     var daysLeft = Math.floor(distanceInMilliSeconds / (1000 * 60 * 60 * 24));
//     var hoursLeft = Math.floor((distanceInMilliSeconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutesLeft = Math.floor((distanceInMilliSeconds % (1000 * 60 * 60)) / (1000 * 60));
//     var secondsLeft = Math.floor((distanceInMilliSeconds % (1000 * 60)) / 1000);    

//     days.innerText = daysLeft
//     hours.innerText = hoursLeft
//     minutes.innerText = minutesLeft
//     seconds.innerText = secondsLeft
//     // // en sekund till gått!!
//     // antalSekunder = antalSekunder +1
//     // days.innerText=antalSekunder
// }


// setInterval(updateCountdown, 1000);
// //setInterval(updatyeBlaBla, 20000);

// const Product = function(name,category){
//     this.name = name
//     this.category = category
// }

// const products=[
//     new Product("Javascript for Dummies", "Böcker"),
//     new Product("Javascript for Christmas Lovers", "Böcker"),
//     new Product("Strumpor", "Kläder"),
//     new Product("Skor", "Kläder"),
//     new Product("Mössa", "Kläder"),
//     new Product("Playstation 5", "Leksaker"),
//     new Product("Hockeyspel Stiga", "Leksaker"),
// ];

// // skulle kunna loopa igenom och skapa en ny array med UNIKA kategories
// //men mer modernt 
// const uniqueCategories = [...new Set(products.map(function(item){return item.category}))];
// uniqueCategories.forEach(function(catNamn){
//     kategori.add(new Option(catNamn))
// })


// const onFocusWish =  function(){
//     lightrope.style.display = "block";
// }
// const onBlurWish =  function(){
//     lightrope.style.display = "none";
// }

// const onChangeWish = function(){
//     alert("Hej")
// }


// const onInputWish = function(){
//     const inmatningen = wish.value.toLowerCase()    
//     if(inmatningen.includes("hund")){
//         hunden.style.display="block";
//     } else{
//         hunden.style.display="none";
//     }
// }

// const onKategoriChange = function(){
//     sak.innerHTML = "" // rensa alla options


//     let matchingProducts = products.filter(c=>c.category === kategori.value)
//     matchingProducts.forEach(item=>{
//         let opt = document.createElement('option');
//         opt.innerText = item.name;
//         sak.appendChild(opt);    
//     });

//     // let opt = document.createElement('option');
//     // opt.value = "Defence";
//     // opt.innerText = "Defence2";
//     // sak.appendChild(opt);    
// }

// kategori.addEventListener("change",onKategoriChange)

// wish.addEventListener("focus",onFocusWish)
// wish.addEventListener("blur",onBlurWish)
// //wish.addEventListener("change",onChangeWish)
// wish.addEventListener("input",onInputWish)

// kategori.dispatchEvent(new Event('change'))
// //onKategoriChange() - SAMMA FUNKAR LIKA BRA!!

// /*
// -addEventListener
// 			vad finns? "click"
		
// `			click - when the element clicked
// 			dbclick - when the element double clicked
// 			mouseout -when the mouse pointer out from the element
// 			change -when value change on input field
//             input - när en input blivit ändrad - vid "keypress"
// 			blur -when the element is not focused
//             focus - 
// 			keydown - when a key is down
// 			keyup - when a key is up
// 			keypress - when we press any key


// */



// const allPlayersTBody = document.querySelector("#allPlayers tbody")
// const searchPlayer = document.getElementById("searchPlayer")

// function Player(id, name,jersey,team, position){
//     this.id = id
//     this.name = name
//     this.jersey = jersey
//     this.team = team
//     this.position = position
//     this.visible = true
//     this.matches = function(searchFor){
//         return  this.name.toLowerCase().includes(searchFor) || 
//                 this.position.toLowerCase().includes(searchFor) || 
//                 this.team.toLowerCase().includes(searchFor)        
//     }
//     // this.isCool = function(){
//     //     if(this.jersey === 21){
//     //         return true;
//     //     }
//     //     return false;
//     // }
//     // this.message = function(){
//     //     alert(this.team)
//     // }
// }

// // I VERKLIGA LIVET - Vi "fetchar" från API
// const players = [
//     new Player(1,"Peter Forsberg",21,"Colorado", "Forward"),
//     new Player(2,"Mats Sundin",13,"Toronto", "Forward"),
//     new Player(3,"Niklas Lidström",5,"Detroit","Defence"),
//     new Player(4,"Mikko Rantanen",96,"Colorado", "Forward"),
//     new Player(5,"Jack Johnson",3,"Colorado","Defence"),
// ]

// // "change" -> triggas när man LÄMNAR rutan
// // keypress, keyup
// searchPlayer.addEventListener("input", function() {
//     const searchFor = searchPlayer.value.toLowerCase() 
//     for(let i = 0; i < players.length;i++){ // TODO add a matches function
//         if(players[i].matches(searchFor)){
//             players[i].visible = true                            
//         }else{
//             players[i].visible = false 
//         }
//     }
//     updateTable()

// });


// const createTableTdOrTh = function(elementType,innerText){
//     let element = document.createElement(elementType)
//     element.textContent = innerText
//     return element
// }


// const playerName = document.getElementById("playerName")
// const jersey = document.getElementById("jersey")
// const position = document.getElementById("position")


// const onClickPlayer = function(event){
//     const htmlElementetSomViHarKlickatPa = event.target

//     //alert(htmlElementetSomViHarKlickatPa.dataset.stefansplayerid);
//     const player = players.find(p=> p.id === parseInt(htmlElementetSomViHarKlickatPa.dataset.stefansplayerid))
//     playerName.value = player.name
//     jersey.value = player.jersey
//     position.value = player.position

//     MicroModal.show('modal-1');

// }


// const updateTable = function(){
//     // while(allPlayersTBody.firstChild)
//     //     allPlayersTBody.firstChild.remove()
//     allPlayersTBody.innerHTML = ""

//     // först ta bort alla children
//     for(let i = 0; i < players.length;i++) { // hrmmm you do foreach if you'd like, much nicer! 
//         if(players[i].visible == false){
//             continue
//         }
//         let tr = document.createElement("tr")

//         tr.appendChild(createTableTdOrTh("th", players[i].name))
//         tr.appendChild(createTableTdOrTh("td", players[i].jersey ))
//         tr.appendChild(createTableTdOrTh("td", players[i].position ))
//         tr.appendChild(createTableTdOrTh("td", players[i].team ))

//         let td = document.createElement("td")
//         let btn = document.createElement("button")
//         btn.textContent = "EDIT"
//         btn.dataset.stefansplayerid=players[i].id
//         td.appendChild(btn)
//         tr.appendChild(td)


//         btn.addEventListener("click",onClickPlayer);

//         // btn.addEventListener("click",function(){
//         //       alert(players[i].name)  
//         //       //                      detta funkar fast med sk closures = magi vg
//         // })


//         allPlayersTBody.appendChild(tr)
//     }

//     // innerHTML och backticks `
//     // Problem - aldrig bra att bygga strängar som innehåller/kan innehålla html
//     //    injection
//     // for(let i = 0; i < players.length;i++) { // hrmmm you do foreach if you'd like, much nicer! 
//     //                                         // I will show you in two weeks
//     //                                         //  or for p of players     
//     //     let trText = `<tr><th scope="row">${players[i].name}</th><td>${players[i].jersey}</td><td>${players[i].position}</td><td>${players[i].team}</td></tr>`
//     //     allPlayersTBody.innerHTML += trText
//     // }
//     // createElement
// }


// const fillOptions = function(){
//     let opt = document.createElement('option');
//     opt.value = "Defence";
//     opt.innerText = "Defence2";
//     position.appendChild(opt);
    
//     opt = document.createElement('option');
//     opt.value = "Forward";
//     opt.innerText = "Forward";
//     position.appendChild(opt);

//     opt = document.createElement('option');
//     opt.value = "Goalie";
//     opt.innerText = "Goalie";
//     position.appendChild(opt);

// }


// updateTable()





// MicroModal.init({
//     onShow: modal => console.info(`${modal.id} is shown`), // [1]
//     onClose: modal => console.info(`${modal.id} is hidden`), // [2]
//     openTrigger: 'data-custom-open', // [3]
//     closeTrigger: 'data-custom-close', // [4]
//     openClass: 'is-open', // [5]
//     disableScroll: true, // [6]
//     disableFocus: false, // [7]
//     awaitOpenAnimation: false, // [8]
//     awaitCloseAnimation: false, // [9]
//     debugMode: true // [10]
//   });




  
// var form = document.getElementById("form1");

// var pristine = new Pristine(form);

// form.addEventListener('submit', function (e) {
//    e.preventDefault();
//    var valid = pristine.validate();
//    //alert('Form is valid: ' + valid);
// }      )






// // // Status???

// // // 1 OBJECT ???
// // // a) unnamed class
// // // let player = {
// // //     name: "Stefan",
// // //     age:51
// // // };

// // // let player2 = {
// // //     name: "Oliver",
// // //     age:15
// // // };

// // // player.jersey = 21

// // // console.log(player)
// // // console.log(player2)

// // // let allPlayers = [player,player2,12,"2"]
// // // console.log(allPlayers)

// // // b) "new" function - Constructor function 
// // function Player(name,age){
// //     this.name = name
// //     this.age = age
// //     this.jersey = 0
// // }



// // player = new Player("Stefan",51)
// // player.jersey = 21
// // console.log(player.name)

// // player2 = new Player("Oliver",51)
// // player2.jersey = 21

// // //console.log(player)


// // document.getElementById("searchPlayer")

// // // c) class and constructor etc
// // const lista =  document.getElementsByClassName("container")
// // const lista2 =  document.getElementsByTagName("div")

// // const l3 = document.querySelectorAll("#preview table tr")

// // //testPreview.innerText = "Test"
// // testPreview.innerHTML = "Test<br />Test2"

// // //some basic selectors, VISA Dagens övningar
// // const searchPlayer =  document.getElementById("searchPlayer")
// // searchPlayer.value = "whatever"
// // searchPlayer.style.fontSize="40px"
// // searchPlayer.style.backgroundColor = "#aaa"
// // //searchPlayer.classList.add("visible")
// // //searchPlayer.classList.remove("visible")
// // console.log(searchPlayer)
// //                     // GetElementById() ==================================================
// //                     // GetElementByClassName() ===========================================
// //                     // GetElementByTagName() =============================================
// //                     // QuerySelector() - Väljer den FÖRSTA element som matchar  ==========



// // // sätta lite styles etc!                    

// // // array till table rows
// // // på två olika sätt såklart

// // // filter - när man skriver i Search så ska raderna automatiskt filtreras
// // //    tjuvstart "events" - mer imorgon

// // // (i morgon)
// // // vid klick på en rad ska vi visa ett formulär (poppa upp en modal dialog) ( = edit )

// // // om vi hinner idag?
// // // skapa options -> select

// // //egen tid = komma igång med övningarna