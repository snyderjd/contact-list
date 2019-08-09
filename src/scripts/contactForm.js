import data from "./data.js";
import contactList from "./contactList.js";
import contacts from "./contacts.js";

const contactForm = Object.create({

    renderForm: () => {
        const formContainer = document.querySelector(".contact__form");
        formContainer.innerHTML += `<label for="input__name">Name: </label>
                                    <input type="text" class="input__name" id="input__name">
                                    <label for="input__phone">Phone Number: </label>
                                    <input type="text" class="input__phone" id="input__phone">
                                    <label for="input__address">Address: </label>
                                    <input type="text" class="input__address" id="input__address">
                                    <button class="submit__contact">Save Contact</button>`;
    },

    createContact: (name, phone, address) => {
        return {
            name: name,
            phoneNumber: phone,
            address: address
        };
    }
});

export default contactForm;