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