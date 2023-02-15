let userName;
let userRole;

let user = JSON.parse(sessionStorage.getItem('user'));
if (user !== null) {
    userName = user.name;
    userRole = user.role;
}

export { userName, userRole };
