let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];

const getGlasses = () => {
    let html = "";
    dataGlasses.map((glasse) => {
        let { src, id } = glasse;
        html += `
    <button onclick="getGlassesID('${id}')" style=" border:none; outline:none; background:transparent;">
    <img src="${src}" height="100px" width="160px"></img>
    </button>
    `
    document.querySelector("#vglassesList").innerHTML = html
    })
}

getGlasses()


const getGlassesID = (id) => {
    for (const item of dataGlasses) {
        if(id === item.id){
            document.querySelector("#avatar").innerHTML = `
        <img class="model"  src="${item.virtualImg}" alt="">
        `;
      document.querySelector(".vglasses__info").innerHTML = `
        <h2>${item.name}</h2>
        <div>
        <span class="btn btn-light">${item.price}</span>
        <span>${item.brand}</span>
        </div>
        <p>${item.description}</p>
        `;
        }
    }
}

document.querySelector(".vglasses__info").style.display = "block";
let removeGlasses = (boolean) => {
  if (boolean === true) {
    document.querySelector(".model").style.display = "block";
    document.querySelector(".vglasses__info").style.display = "block";
  } else {
    document.querySelector(".model").style.display = "none";
    document.querySelector(".vglasses__info").style.display = "none";
  }
};
window.removeGlasses = removeGlasses;
window.getGlassesID = getGlassesID;
