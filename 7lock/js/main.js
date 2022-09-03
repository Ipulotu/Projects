


fetch("https://ipulotu.github.io/Projects/7lock/data/cards.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const parent = document.querySelector(".parent");
       
        for (let i = 1; i < 80; i++) {
            let img = document.createElement("img");
            img.setAttribute("src", data[i].image);
            parent.appendChild(img);
        }
    });









