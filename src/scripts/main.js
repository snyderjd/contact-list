import contactList from "./contactList.js";
import contactForm from "./contactForm.js";
import contacts from "./contacts.js";
import data from "./data.js";
import users from "./users.js";

users.createLoginHTML();
contactForm.renderForm();
contactList.displayContacts();

// Create a new user and post to the database with the given values when the register button is clicked
const registerButton = document.querySelector(".register__user");
registerButton.addEventListener("click", event => {
    const usernameValue = document.querySelector(".input__username").value;
    const emailValue = document.querySelector(".input__email").value;

    const userObject = users.createUser(usernameValue, emailValue);
    data.saveUser(userObject);
});

// When login button is clicked, get users from the database and check against the input field values. When a match is found, make that user the current user
const loginButton = document.querySelector(".login__user");
loginButton.addEventListener("click", event => {
    const usernameValue = document.querySelector(".input__username").value;
    const emailValue = document.querySelector(".input__email").value;

    const userObject = users.createUser(usernameValue, emailValue);

    data.getUsers().then(parsedUsers => {
        console.log(parsedUsers);
        parsedUsers.forEach(user => {
            if (usernameValue === user.username && emailValue === user.email) {
                console.log(`${user.username} is now logged in`);
            }
        });
    });
});

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

