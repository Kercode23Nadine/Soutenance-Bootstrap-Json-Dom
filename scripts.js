let modalB = document.querySelector(".modal-body-info");

fetch("https://www.tbads.eu/greta/kercode/ajax/?article=2")
  .then((response) => response.json())
  .then(function (jsonData) {
    title(jsonData);
    console.log("Réponse :%o", jsonData);
  })
  .catch((msg) => console.log("Message d'erreur:", msg));

function title(jsonData) {
  //  un nouveau titre
  let newtitle = document.createElement("h3");
  newtitle.textContent = jsonData.title;
  newtitle.classList.add("text-center", "bg-danger", "text-light", "p-3");
  //  un nouveau titre
  let myDateTitle = document.createElement("h2");
  myDateTitle.textContent =
    jsonData.date.day + " " + jsonData.date.month + " " + jsonData.date.year;
  myDateTitle.classList.add("text-center", "fw-bold", "mx-5", "p-3");
  //  nouveau p
  let newP = document.createElement("p");
  jsonData.content.forEach(function () {
    newP.textContent = jsonData.content;
  });
  newP.classList.add("m-5", "p-5");
  //  nouvelle image
  let newImg = document.createElement("img");
  newImg.src = jsonData.picture;
  newImg.alt = "soldes";
  newImg.classList.add("img-fluid", "p-5", "w-100");

  // Ajout modal-body
  modalB.appendChild(myDateTitle);
  modalB.appendChild(newtitle);
  modalB.appendChild(newImg);
  modalB.appendChild(newP);
}

// modal 2

let modalBis = document.querySelector(".modal-body-info-bis");

fetch("https://www.tbads.eu/greta/kercode/ajax/?article=3")
  .then((response) => response.json())
  .then(function (jsonDataBis) {
    create(jsonDataBis);
    console.log("Réponse :%o", jsonDataBis);
  })
  .catch((msg) => console.log("Message d'erreur:", msg));
function create(jsonDataBis) {
  //  un nouveau titre
  let newTitle = document.createElement("h3");
  newTitle.textContent = jsonDataBis.title;
  newTitle.classList.add("text-center", "bg-light", "fw-bold", "p-3");

  //  un nouveau titre
  let myAuthorTitle = document.createElement("h4");
  myAuthorTitle.textContent =
    jsonDataBis.author.name + " " + " " + jsonDataBis.author.position;
  myAuthorTitle.classList.add(
    "text-center",
    "fw-bold",
    "mx-5",
    "p-3",
    "bg-light"
  );

  // nouveau p
  let newP = document.createElement("p");
  jsonDataBis.content.forEach(function () {
    newP.textContent = jsonDataBis.content;
  });
  newP.classList.add("m-5", "p-5");

  //  nouvelle image
  let newImg = document.createElement("img");
  newImg.src =jsonDataBis.picture;
  newImg.alt = "cuisine";
  newImg.classList.add("img-fluid", "p-5", "w-100");

  // Ajout modal-body
  modalBis.appendChild(newTitle);
  modalBis.appendChild(newImg);
  modalBis.appendChild(myAuthorTitle);
  modalBis.appendChild(newP);
}
