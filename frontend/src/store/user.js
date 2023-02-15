const user = JSON.parse(sessionStorage.getItem('user'));

const userName = user.name;
const userRole = user.role;

export { userName, userRole };
