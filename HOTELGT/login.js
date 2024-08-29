const updateUserDatabase = users => {
    localStorage.setItem("users", JSON.stringify(users));
}


const getUserDatabase = () => {
    return JSON.parse(localStorage.getItem("users"));
}

const setup = () => {

    const users = [ 
        { userId: 1, firstname: "Juan", lastname: "Alvarez", role: "administrador", password: "ju5555", email: "juanperez@hotelesgt.com", phoneNumber: "22334455", loginAttempts: 0, isLocked: false },
        { userId: 2, firstname: "Maria", lastname: "Batz", role: "administrador", password: "ma6666", email: "mariabatz@hotelesgt.com", phoneNumber: "33445566", loginAttempts: 0, isLocked: false },
        { userId: 3, firstname: "Daniela", lastname: "Cortez", role: "recepcionista", password: "da7777", email: "danielacortez@hotelesgt.com", phoneNumber: "44556677", loginAttempts: 0, isLocked: false },
        { userId: 4, firstname: "Antonio", lastname: "Dardon", role: "administrador", password: "anton88", email: "antoniodardon@hotelesgt.com", phoneNumber: "55667788", loginAttempts: 0, isLocked: false },
        { userId: 5, firstname: "Nicolas", lastname: "Estrada", role: "recepcionista", password: "nico55", email: "nicolasestrada@hotelesgt.com", phoneNumber: "66778899", loginAttempts: 0, isLocked: false },
        { userId: 6, firstname: "Martha", lastname: "Flores", role: "administrador", password: "flores33", email: "marthaflores@hotelesgt.com", phoneNumber: "77889900", loginAttempts: 0, isLocked: false },
    ];

    updateUserDatabase(users); 

}

const updateLoginAttempts = (user, loginAttempts) => { 

    const users = getUserDatabase(); 
    const userIndex = users.findIndex(u => u.userId === user.userId); 

    if (userIndex < 0) { 
        alert("No se puede modificar el usuario");
    }

    user.loginAttempts = loginAttempts; 
    user.isLocked = loginAttempts >= 3; 
    users[userIndex] = user; 

    updateUserDatabase(users); 

}

const login = (email, password) => { 

    const users = getUserDatabase(); 
    const user = users.find(u => u.email === email); 

    if (!user) { 
        return { success: false, message: "El usuario no existe en la base de datos" };
    }

    if (user.isLocked) { 
        return { success: false, message: "El usuario se encuentra bloqueado" };
    }

    if (user.password !== password) { 
        updateLoginAttempts(user, ++user.loginAttempts);
        return { success: false, message: "La contraseña es incorrecta" };
    }

    updateLoginAttempts(user, 0); 
    localStorage.setItem("loggedInUser", JSON.stringify(user)); 

    return { success: true, message: "La sesión se ha iniciado" }; 

}



const setupLoginForm = () => {

    const loginForm = document.getElementById("loginForm");

    loginForm.onsubmit = event => { 

        event.preventDefault(); 
        const email = document.getElementById("email").value; 
        const password = document.getElementById("password").value; 
        const loginResult = login(email, password); 

        
        if (!loginResult.success) {
            alert(loginResult.message); 
            return;
        }

    
        window.location.href = "table.html";

    }


}


window.onload = function () {

    setup(); 
    setupLoginForm(); 

}

