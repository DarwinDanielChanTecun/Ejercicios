const updateUserDatabase = users => {
    localStorage.setItem("users", JSON.stringify(users));
}

const getUserDatabase = () => {
    return JSON.parse(localStorage.getItem("users"));
}

const getLoggedInUser = () => {
    return localStorage.getItem("loggedInUser");
}

const getSelectedUserId = () => {
    return localStorage.getItem("selectedUserId");
}

const deleteUser = (userId) => {

    const users = getUserDatabase();
    const userIndex = users.findIndex(u => u.userId == userId);

    if (userIndex < 0) {
        alert("No se puede eliminar el usuario");
    }

    users.splice(userIndex, 1);
    updateUserDatabase(users);
    window.location.href = "table.html";

}

const updateUser = (userId) => {

    const users = getUserDatabase();
    const userIndex = users.findIndex(u => u.userId == userId);

    if (userIndex < 0) {
        alert("No se puede modificar el usuario");
    }

    const selectedUserId = localStorage.getItem("selectedUserId");
    const user = users.filter(u => u.userId == selectedUserId)[0];
    user.firstname = document.getElementById("firstnameTxt").value;
    user.lastname = document.getElementById("lastnameTxt").value;
    user.role = document.getElementById("roleTxt").value;
    user.email = document.getElementById("emailTxt").value;
    user.phoneNumber = document.getElementById("phoneNumberTxt").value;

    updateUserDatabase(users);
    window.location.href = "table.html";

}

const addUser = () => {

    const users = getUserDatabase();
    const email = document.getElementById("emailTxt").value;

    if (users.find(u => u.email === email)) {
        alert("El usuario ya existe en la base de datos");
        return false;
    }

    const user = {
        userId: Math.max(...users.flatMap(u => u.userId)) + 1,
        firstname: document.getElementById("firstnameTxt").value,
        lastname: document.getElementById("lastnameTxt").value,
        role: document.getElementById("roleTxt").value,
        password: document.getElementById("passwordTxt").value,
        email: document.getElementById("emailTxt").value,
        phoneNumber: document.getElementById("phoneNumberTxt").value,
        loginAttempts: 0,
        isLocked: false
    };

    users.push(user);
    updateUserDatabase(users);

}
const setUpBtn = action => {

    document.getElementById("deleteBtn").onclick = function () {

        const userId = document.getElementById("userIdTxt").value;

        action === "Eliminar" && deleteUser(userId);
        action === "Modificar" && updateUser(userId);
        action === "Agregar" && addUser(userId);
        localStorage.removeItem("selectedUserId");

    }

}

const setupInputs = (user) => {
    document.getElementById("userIdTxt").value = user.userId;
    document.getElementById("firstnameTxt").value = user.firstname;
    document.getElementById("lastnameTxt").value = user.lastname;
    document.getElementById("roleTxt").value = user.role;
    document.getElementById("emailTxt").value = user.email;
    document.getElementById("phoneNumberTxt").value = user.phoneNumber;
}

window.onload = function () {

    if (!getLoggedInUser()) {
        window.location.href = "login.html";
    }

    const selectedUserId = localStorage.getItem("selectedUserId");
    const user = getUserDatabase().filter(u => u.userId == selectedUserId)[0];
    const action = localStorage.getItem("action");

    action != "Agregar" && setupInputs(user);
    setUpBtn(action);

}