
const parent = document.querySelector(".parent");


fetch("https://ipulotu.github.io/Projects/7lock/data/cards.json")
    .then(response => response.json())
    .then(data => console.log(data));
    