{
  const welcome = () => {
    console.log("Cześć!");
  };

  const toggleBackground = () => {
    const body = document.querySelector(".body");
    body.classList.toggle("newBody");
  };

  const hideImageClick = () => {
    const img = document.querySelector(".section__image");
    img.remove();
  };

  const seeContact = () => {

    const contact = document.getElementById("contact");
    if (contact.style.display === "block") {
      contact.style.display = "none";
      buttonContact.innerText = "ZOBACZ KONTAKT";

    } else {
      contact.style.display = "block";
      buttonContact.innerText = "UKRYJ KONTAKT";

    }
  };

  const init = () => {

    const changeColor = document.querySelector(".js-changeColor");
    changeColor.addEventListener("click", toggleBackground);

    const removePhoto = document.querySelector(".js-removePhoto");
    removePhoto.addEventListener("click", hideImageClick);
    console.log(removePhoto);

    const buttonContact = document.querySelector(".js-buttonContact");
    buttonContact.addEventListener("click", seeContact);

    welcome();
  };


  init();

}