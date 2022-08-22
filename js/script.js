const elContactInfoBox = $(".js-contact-info-box");
const elContactFormBox = $(".js-contact-form-box");

const elAddNewContactBtn = $(".js-new-contact-btn");
const elDeleteContactBtn = $(".js-delete-contact-btn");

const elContactSearchInput = $(".js-search-input");

elAddNewContactBtn.addEventListener("click", function() {
  elContactInfoBox.classList.toggle("opacity-25");
  elContactInfoBox.classList.toggle("user-select-none");
  elContactFormBox.classList.toggle("d-none");
  elAddNewContactBtn.classList.toggle("disabled");
  elDeleteContactBtn.classList.toggle("disabled");
  elContactSearchInput.setAttribute("disabled", "disabled");
  elContactSearchInput.classList.toggle("none-hover");
} );





































































// console.log(elForm);
// console.log(elInput);

// let elNewP = document.createElement("p");
// elNewP.className = "klass";
// elNewP.textContent = "Salom";

// console.log(elNewP);

// let elNewDiv = createElement("div", "klass", "Salom");
// console.log(elNewDiv);





















// function sayHello(name = "foydalanuvchi") {
//   console.log(`Assalomu alaykum, ${name}!`);
// }

// sayHello("Aliyor");


// let sayName = (name) => {
//   return `Assalomu alaykum, ${name}!`;
// }

// let sayName = name => {
//   return `Assalomu alaykum, ${name}!`;
// }

// let sayName = name => {return `Assalomu alaykum, ${name}!`};

// let showName = sayName("Aliyor");



// console.log(showName);

// let elDiv = document.querySelector(".father");
// console.log(elDiv);






















// let pokemons = ['Pikachu', 'Raycho', 'Charmander', 'Snorlax', 'Ditto', 'Piplup', 'Dialgo', 'Mew', 'Lopunny'];

// // for (let pokemon of pokemons) {
// //   console.log(pokemon);
// // }

// // for (let i = 0; i < pokemons.length; i++) {
// //   console.log(pokemons[i]);
// // }

// // pokemons.forEach(function (pokemon, i) {
// //   console.log(pokemon, i+1);
// // })

// let countries = [
//   {
//     name: "Uzbekistan",
//     capital: "Tashkent",
//     region: "Central Asia",
//     population: 36.5,
//     cities: ["Qo'qon", "Samarqand", "Buxoro", "Xiva"],
//   },
//   {
//     name: "USA",
//     capital: "Washington D.C.",
//     region: "North America",
//     population: 329.5,
//     cities: ["New York", "Boston", "San Francisko", "Los Angeles"],
//   }, 
//   {
//     name: "Great Britan",
//     capital: "London",
//     region: "West Europe",
//     population: 67.5,
//     cities: ["Eidenburg", "Liverpul", "Manchester", "Brighton"],
//   }
// ]

// // for (let i = 0; i < countries.length; i++) {
// //   console.log(countries[i].name, countries[i].region);
// // }

// countries.forEach(function(contry) {
//   console.log(contry.name, contry.region);
// })