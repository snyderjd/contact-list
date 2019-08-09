import contactList from "./contactList.js";
import contactForm from "./contactForm.js";
import contacts from "./contacts.js";
import data from "./data.js";

contactForm.renderForm();
contactList.displayContacts();

const saveButton = document.querySelector(".submit__contact");
saveButton.addEventListener("click", event => {
    const nameValue = document.querySelector(".input__name").value;
    const phoneValue = document.querySelector(".input__phone").value;
    const addressValue = document.querySelector(".input__address").value;

    const contactContainer = document.querySelector(".contact__container");

    const newContact = contactForm.createContact(nameValue, phoneValue, addressValue);

    contactContainer.innerHTML = "";
    data.saveContact(newContact)
        .then(contactList.displayContacts);
});

