const data = Object.create({
    getContacts: () => {
        return fetch("http://localhost:8088/contacts")
            .then(response => response.json());
    },

    saveContact: (contactObject) => {
        return fetch("http://localhost:8088/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contactObject)
        })
        .then(response => response.json());
    },

    saveUser: (userObject) => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObject)
        })
        .then(response => response.json());
    },

    getUsers: () => {
        return fetch("http://localhost:8088/users")
            .then(response => response.json());
    }
});

export default data;