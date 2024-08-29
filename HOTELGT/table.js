
const getSelectedUserId = () => {
    return localStorage.getItem("selectedUserId");
}

const updateUserDatabase = users => {
    localStorage.setItem("users", JSON.stringify(users));
}

const getUserDatabase = () => {
    return JSON.parse(localStorage.getItem("users"));
}

const getLoggedInUser = () => {
    return JSON.parse(localStorage.getItem("loggedInUser"));
}

const setSelectedUser = (userId) => {
    localStorage.setItem("selectedUserId", userId);
}

const setAction = (action) => {
    localStorage.setItem("action", action);
}

const logout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}

const setupUserName = () => {
    const username = document.getElementById("username");
    const loggedInUser = getLoggedInUser();
    username.innerHTML = `${loggedInUser.firstname} ${loggedInUser.lastname}`;
}

const setupButtons = () => {

    document.getElementById("logoutBtn").onclick = () => { logout(); }

    document.getElementById("editUserBtn").onclick = () => {

        if (!getSelectedUserId()) {
            alert("No seleccionaste ningún usuario");
            return;
        }

        setAction("Modificar");
        window.location.href = "deleted.html";

    }

    document.getElementById("deleteUserBtn").onclick = () => {

        if (!getSelectedUserId()) {
            alert("No seleccionaste ningún usuario");
            return;
        }

        setAction("Eliminar");
        window.location.href = "deleted.html";

    };

    document.getElementById("addUserBtn").onclick = () => {
        setAction("Agregar");
        window.location.href = "deleted.html";
    }

}

const setupTable = () => {

    const tableBody = document.getElementById("usersTableBody");
    const users = getUserDatabase();

    users.forEach(user => {

        var html = `<tr>
            <td><input type="radio" id="user${user.userId}Radio" name="radio" onClick="setSelectedUser(${user.userId})"/></td>
            <td>${user.userId}</td>
            <td>${user.firstname}</td>
            <td>${user.lastname}</td>
            <td>${user.role}</td>
            <td>${user.email}</td>
            <td>${user.phoneNumber}</td>
            <td>${user.loginAttempts}</td>
            <td>${user.isLocked ? "Sí" : "No"}</td>
            </tr>`;

        tableBody.innerHTML += html;

    });


}

window.onload = function () {

    if (!getLoggedInUser()) {
        window.location.href = "login.html";
    }

    setupUserName();
    setupTable();
    setupButtons();

}
