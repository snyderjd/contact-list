const contacts = Object.create({

    createHTML: (contactObject) => {
        const HTMLString = `<section class="contact contact--${contactObject.id}">
                                <h1>Name: ${contactObject.name}</h1>
                                <h3>Phone: ${contactObject.phoneNumber}</h3>
                                <h3>Address: ${contactObject.address}</h3>
                                <button class="editContact--${contactObject.id}">Edit</button>
                                <button class="deleteContact--${contactObject.id}">Delete</button>
                            </section>`;
        return HTMLString;
    },

    addToDOM: (container, HTMLString) => {
        container.innerHTML += HTMLString;
    }
});

export default contacts;