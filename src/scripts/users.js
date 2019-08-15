const users = Object.create({

    createLoginHTML: () => {
        const loginContainer = document.querySelector(".login__container");
        const loginHTML = `<label for="input__username">Username: </label>
                            <input type="text" class="input__username" id="input__username">
                            <label for="input__email">Email: </label>
                            <input type="text" class="input__email" id="input__email">
                            <button class="register__user">Register</button>
                            <button class="login__user">Log In</button>`;
        loginContainer.innerHTML = loginHTML;
    },

    createUser: (username, email) => {
        return {
            username: username,
            email: email
        };
    }
});

export default users;