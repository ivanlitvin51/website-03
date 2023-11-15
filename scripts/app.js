let buttonBook = document.querySelector("button");
let buttonsHeaderLink = document.querySelectorAll('li.header-menu-item');
let buttonBurger = document.querySelector('button.header-burger-button');
let headerLogo = document.querySelector('a.header-logo');

buttonBook.onclick = () => alert("Button is unavailable now.");

for (let elem of buttonsHeaderLink) {
  elem.onclick = () => alert("Button is unavailable now.");
}

buttonBurger.onclick = () => alert("Button is unavailable now.");

headerLogo.onclick = () => alert("Button is unavailable now.");

/*
const testPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Yeah!")
  }, 2000);
})

testPromise.then(res => res = "Oh "+res).then(res => alert(res));*/

// const url = "https://jsonplaceholder.typicode.com/todos";
//
// const delay = ms => {
//   return new Promise(r => setTimeout(() => r(), ms));
// }
//
// async function fetchAsync() {
//   console.log("Fetch started...");
//   try {
//     await delay(2000);
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log("Data:", data);
//
//   } catch (e) {
//     console.log("Error: ", e);
//   }
//   finally {
//
//   }
// }
//
// fetchAsync();



