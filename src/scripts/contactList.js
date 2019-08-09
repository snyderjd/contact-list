import contacts from "./contacts.js";
import data from "./data.js";

const contactList = Object.create({

    displayContacts: () => {
        const contactContainer = document.querySelector(".contact__container");
        data.getContacts().then(parsedContacts => {

            parsedContacts.forEach(contact => {
                console.log("displayContacts");
                const contactHTML = contacts.createHTML(contact);
                contacts.addToDOM(contactContainer, contactHTML);
            });
        });
    }});

export default contactList;