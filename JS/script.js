console.log("Cześć!");

let removePhoto = document.querySelector(".js-removePhoto");

let img = document.querySelector(".section__image");

removePhoto.addEventListener("click", () => {

  img.remove();
});


console.log(removePhoto);

let changeColor = document.querySelector(".js-changeColor");
let body = document.querySelector(".body");

changeColor.addEventListener("click", () => {
  body.classList.toggle("newBody");
});




let buttonContact = document.querySelector(".js-buttonContact");
let contact = document.getElementById("contact");

buttonContact.addEventListener("click", () => {
  if (contact.style.display === "block") {
    contact.style.display = "none";
    buttonContact.innerText = "ZOBACZ KONTAKT";

  } else {
    contact.style.display = "block";
    buttonContact.innerText = "UKRYJ KONTAKT";

  }
});



